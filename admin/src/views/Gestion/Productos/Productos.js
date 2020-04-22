import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import axios from '../../../index';

class Tables extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      productos: []
    }
  }

  componentDidMount(){
    //aqui traer la informacion del back-end
    console.log("probando componentDidMount");
    axios.get('/productos').then(res => {
      this.setState({ productos:res.data })
    })

    
  }
    
    render() {
        return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Productos en Tienda Online
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>N° Orden</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descripción</th>
                    <th>Fecha Registro</th>
                    <th>Fotos</th>
                    <th>Detalles</th>
                    <th></th>
                  </tr>
                  </thead>

                  <tbody>
                    {this.state.productos.map(producto => 
                      <tr>
                        <td>{producto.norden}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.fechaRegistro}</td>
                        <td>
                          <Button color="light" className="btn-pill">
                            <i className="fa fa-instagram"></i>&nbsp;Ver/Editar
                          </Button>
                        </td>
                        <td>
                          <Button color="light" className="btn-pill">
                            <i className="fa fa-list-ul"></i>&nbsp;Ver/Editar
                          </Button>
                        </td>
                        <td>
                          <Button color="danger" className="btn-pill">
                            <i className="fa fa-edit"></i>&nbsp;Editar Producto
                          </Button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous tag="button"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
