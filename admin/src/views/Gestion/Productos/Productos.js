import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import LineaProducto from '../../../Components/LineaProducto/LineaProducto'
import axios from '../../../index';


class Producto extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      productos: [],
      
    };

    
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
                      // <tr>
                      //   <td>{producto.norden}</td>
                      //   <td>{producto.nombre}</td>
                      //   <td>{producto.precio}</td>
                      //   <td>{producto.descripcion}</td>
                      //   <td>{producto.fechaRegistro}</td>
                      //   <td>
                      //     <Button color="light" className="btn-pill" onClick={this.togglePrimary}>
                      //       <i className="fa fa-instagram"></i>&nbsp;Ver/Editar
                      //     </Button>
                      //     <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                      //           className={'modal-info ' + this.props.className}>
                      //       <ModalHeader toggle={this.togglePrimary}>Ver / Editar fotos del producto</ModalHeader>
                      //       <ModalBody>
                      //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      //         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      //         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      //         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      //         culpa qui officia deserunt mollit anim id est laborum.
                      //       </ModalBody>
                      //       <ModalFooter>
                      //         <Button color="primary" onClick={this.togglePrimary}>Guardar</Button>{' '}
                      //         <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                      //       </ModalFooter>
                      //     </Modal>
                      //   </td>
                      //   <td>
                      //     <Button color="light" className="btn-pill" onClick={this.togglePrimary2}>
                      //       <i className="fa fa-list-ul"></i>&nbsp;Ver/Editar
                      //     </Button>
                      //     <Modal isOpen={this.state.primary2} toggle={this.togglePrimary2}
                      //           className={'modal-info ' + this.props.className}>
                      //       <ModalHeader toggle={this.togglePrimary2}>Ver / Editar detalles del producto</ModalHeader>
                      //       <ModalBody>
                      //         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      //         et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      //         aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      //         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      //         culpa qui officia deserunt mollit anim id est laborum.
                      //       </ModalBody>
                      //       <ModalFooter>
                      //         <Button color="primary" onClick={this.togglePrimary2}>Guardar</Button>{' '}
                      //         <Button color="secondary" onClick={this.togglePrimary2}>Cancel</Button>
                      //       </ModalFooter>
                      //     </Modal>
                      //   </td>
                      //   <td>
                      //     <Button color="danger" className="btn-pill" onClick={this.toggleProducto}>
                      //       <i className="fa fa-edit"></i>&nbsp;Editar Producto
                      //     </Button>
                      //     <Modal isOpen={this.state.productoModal} toggle={this.toggleProducto}
                      //           className={'modal-primary ' + this.props.className}>
                      //       <ModalHeader toggle={this.toggleProducto}>Editar información del producto</ModalHeader>
                      //       <ModalBody>
                      //         <FormGroup row>
                      //           <Col sm="3">
                      //             <Label htmlFor="norden">N° Orden</Label>
                      //             <Input type="text" id="nOrden" placeholder="N° Orden" />
                      //           </Col>
                      //           <Col sm="4">
                      //             <Label htmlFor="precio">Precio</Label>
                      //             <Input type="text" id="nuevoPrecio" placeholder="Nuevo precio" />
                      //           </Col>
                      //         </FormGroup>
                      //         <FormGroup>
                      //           <Col sm="10">
                      //             <Label htmlFor="nombre">Nombre</Label>
                      //             <Input type="text" id="nuevoNombre" placeholder="Ingrese nuevo nombre"  />
                      //           </Col>
                      //         </FormGroup>
                      //         <FormGroup>
                      //           <Col sm="12">
                      //             <Label htmlFor="descripcion">Descripción</Label>
                      //             <Input type="text" id="nuevaDescripcion" placeholder="Ingrese nueva descripción" />
                      //           </Col>
                      //         </FormGroup>
                      //       </ModalBody>
                      //       <ModalFooter>
                      //         <Button color="primary" onClick={this.toggleProducto}>Guardar</Button>{' '}
                      //         <Button color="secondary" onClick={this.toggleProducto}>Cancel</Button>
                      //       </ModalFooter>
                      //     </Modal>
                      //   </td>
                      // </tr>
                      <LineaProducto norden={producto.norden} nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} fechaRegistro={producto.fechaRegistro}/>
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

export default Producto;
