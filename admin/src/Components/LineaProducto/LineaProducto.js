import React, { Component } from 'react';
import { Label,FormGroup, Input,Button,Col,Modal,ModalBody,ModalHeader,ModalFooter } from 'reactstrap';
import axios from '../../index';

class LineaProducto extends Component {
    constructor(props){
        super(props);
        this.state = {
            primary: false,
            primary2: false,
            productoModal: false,
            idProducto: null
        };

        this.setState.idProducto = this.props.idProducto;

        this.togglePrimary = this.togglePrimary.bind(this);
        this.togglePrimary2 = this.togglePrimary2.bind(this);
        this.toggleProducto = this.toggleProducto.bind(this);
    }

    togglePrimary() {
        this.setState({
          primary: !this.state.primary,
        });
      }
    
      togglePrimary2() {
        this.setState({
          primary2: !this.state.primary2,
        });
      }
    
      toggleProducto() {
        this.setState({
          productoModal: !this.state.productoModal,
        });
      }

      componentDidMount(){
          this.setState.idProducto = this.props.idProducto;
      }

      guardar() {
        console.log(this.state.idProducto);
      }

    render() {
        return(
            <tr>
                <td>{this.props.norden}</td>
                <td>{this.props.nombre}</td>
                <td>{this.props.precio}</td>
                <td>{this.props.descripcion}</td>
                <td>{this.props.fechaRegistro}</td>
                <td>
                    <Button color="light" className="btn-pill" onClick={this.togglePrimary}>
                    <i className="fa fa-instagram"></i>&nbsp;Ver/Editar
                    </Button>
                    <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                        className={'modal-info ' + this.props.className}>
                    <ModalHeader toggle={this.togglePrimary}>Ver / Editar fotos del producto</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togglePrimary}>Guardar</Button>{' '}
                        <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </td>
                <td>
                    <Button color="light" className="btn-pill" onClick={this.togglePrimary2}>
                    <i className="fa fa-list-ul"></i>&nbsp;Ver/Editar
                    </Button>
                    <Modal isOpen={this.state.primary2} toggle={this.togglePrimary2}
                        className={'modal-info ' + this.props.className}>
                    <ModalHeader toggle={this.togglePrimary2}>Ver / Editar detalles del producto</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togglePrimary2}>Guardar</Button>{' '}
                        <Button color="secondary" onClick={this.togglePrimary2}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </td>
                <td>
                    <Button color="danger" className="btn-pill" onClick={this.toggleProducto}>
                    <i className="fa fa-edit"></i>&nbsp;Editar Producto
                    </Button>
                    <Modal isOpen={this.state.productoModal} toggle={this.toggleProducto}
                        className={'modal-primary ' + this.props.className}>
                    <ModalHeader toggle={this.toggleProducto}>Editar información del producto</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                        <Col sm="3">
                            <Label htmlFor="norden">N° Orden</Label>
                            <Input type="text" id="nuevoNOrden" placeholder="N° Orden" />
                        </Col>
                        <Col sm="4">
                            <Label htmlFor="precio">Precio</Label>
                            <Input type="text" id="nuevoPrecio" placeholder="Nuevo precio" />
                        </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col sm="10">
                            <Label htmlFor="nombre">Nombre</Label>
                            <Input type="text" id="nuevoNombre" placeholder="Ingrese nuevo nombre"  />
                        </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col sm="12">
                            <Label htmlFor="descripcion">Descripción</Label>
                            <Input type="text" id="nuevaDescripcion" placeholder="Ingrese nueva descripción" />
                        </Col>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.guardar.bind(this)}>Guardar</Button>{' '}
                        <Button color="secondary" onClick={this.toggleProducto}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </td>
            </tr>
        );
    }
}

export default LineaProducto;