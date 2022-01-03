import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Table } from 'react-bootstrap';
import api from '../../services/api';
import { Container } from './styles';

// import 'react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboards: React.FC = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    (async () => {
      await api.get('').then(response => setData(response.data));
      console.log(data);
    })();
  }, [data]);

  const renderTableData = () => {
    return ( data.map((data, index) => {
       const { symbol, openPrice } = data
       return (
          <tr key={symbol}>
             <td>{symbol}</td>
             <td>{openPrice}</td>
          </tr>
       )
    })
    )}


  const layout = {
    md:[
      { i: 'a', x: 0, y: 0, w: 10, h: 10, minH: 0, maxH: 2  },
      { i: 'b', x: 2, y: 0, w: 2, h: 2, minH: 0, maxH: 2 },
      { i: 'c', x: 4, y: 0, w: 2, h: 2, minH: 0, maxH: 2 },
    ],

    lg:[
      { i: 'a', x: 0, y: 0, w: 2, h: 4, minH: 0, maxH: 2 },
      { i: 'b', x: 2, y: 0, w: 2, h: 2, minH: 0, maxH: 2 },
      { i: 'c', x: 4, y: 0, w: 2, h: 2, minH: 0, maxH: 2 },
    ]};

    const columns={
        ["lg"]: 12,
        ["md"]: 2,
  };



  return (
    <Container>

  <ResponsiveGridLayout className="layout" cols={columns} layouts={layout}>
      <Table key="a" striped bordered hover variant="light" >
        <thead>
          <tr>
            <th scope="row">#</th>
            <th>Symbol</th>
          </tr>
          </thead>
        <tbody>
        {data.map((data ) => {
       const { symbol, openPrice } = data
       return (
          <tr key={symbol}>
             <td>{symbol}</td>
             <td>{openPrice}</td>
          </tr>
       )
    })}
        </tbody>

      </Table>
      {/* </div> */}

     </ResponsiveGridLayout>
     </Container>

  );
};

export default Dashboards;
