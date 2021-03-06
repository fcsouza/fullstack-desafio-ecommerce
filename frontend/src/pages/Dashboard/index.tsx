import React, { useState, useEffect } from 'react';
//import Modal from '@material-ui/core/Modal';
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

  async function handleRemoveProduct(id:string) {
    await api.delete(`products/${id}`);

    const newProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(newProducts);
  }

  async function handleUpdateProduct(id:string) {
    const resposnse = await api.get(`products/${id}`);
    console.log(resposnse.data);

  }

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
                  <td>{product.type}</td>
                  <td>{product.rating}</td>
                  <td>{formatValue(product.price)}</td>
                  <td>{moment(product.created_at).format("DD/MM/YYYY")}</td>
                  <td>
                    <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                    <button onClick={() => handleUpdateProduct(product.id)}>Alterar</button>
                  </td>
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
