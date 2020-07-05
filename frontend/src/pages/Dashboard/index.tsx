import React, { useState, useEffect } from 'react';
import moment from 'moment';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import Header from '../../components/Header';
import { Container, CardContainer, Card, TableContainer } from './styles';

interface Product {
  id: string;
  title: string;
  type: string;
  rating: number;
  price: number;
  created_at: Date;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Visualize seus arquivos, ou importe novos arquivos utilizados a ferramenta para importar arquivos.</p>
            </header>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Tipo</th>
                <th>Rating</th>
                <th>Preço</th>
                <th>Data</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td className="title">{product.title}</td>
                  <td className={product.type}>
                    {product.type}
                  </td>
                  <td>{product.rating}</td>
                  <td>{formatValue(product.price)}</td>
                  <td>{moment(product.created_at).format("DD/MM/YYYY")}</td>
                  <td>botão</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
