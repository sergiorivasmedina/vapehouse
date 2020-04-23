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
            idProducto: null,
            valueEditarProductoNombre: this.props.nombre,
            valueEditarProductoNOrden: this.props.norden,
            valueEditarProductoPrecio: this.props.precio,
            valueEditarProductoDescripcion: this.props.descripcion,

            productChange: false
        };

        this.togglePrimary = this.togglePrimary.bind(this);
        this.togglePrimary2 = this.togglePrimary2.bind(this);
        this.toggleProducto = this.toggleProducto.bind(this);

        this.handleChangeEditarProductoNombre = this.handleChangeEditarProductoNombre.bind(this);
        this.handleChangeEditarProductoNOrden = this.handleChangeEditarProductoNOrden.bind(this);
        this.handleChangeEditarProductoPrecio = this.handleChangeEditarProductoPrecio.bind(this);
        this.handleChangeEditarProductoDescripcion = this.handleChangeEditarProductoDescripcion.bind(this);
    }

    handleChangeEditarProductoNombre(event) {
        this.setState({valueEditarProductoNombre:event.target.value});
    }

    handleChangeEditarProductoNOrden(event) {
        this.setState({valueEditarProductoNOrden:event.target.value});
    }

    handleChangeEditarProductoPrecio(event) {
        this.setState({valueEditarProductoPrecio:event.target.value});
    }

    handleChangeEditarProductoDescripcion(event) {
        this.setState({valueEditarProductoDescripcion:event.target.value});
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
      }

      abrirProductoConfig() {
        console.log(this.props.idProducto);

        this.toggleProducto();
      }

      guardar() {
        if(document.getElementById('nuevoNombre').value != this.props.nombre || document.getElementById('nuevoNOrden').value != this.props.norden || document.getElementById('nuevoPrecio').value != this.props.precio || this.props.nombre && document.getElementById('nuevaDescripcion').value != this.props.descripcion){
            //llamar al web service correspondiente para la actualizacion del producto
            var producto = {
                idProducto: this.props.idProducto,
                nombre: document.getElementById('nuevoNombre').value,
                precio: document.getElementById('nuevoPrecio').value,
                norden: document.getElementById('nuevoNOrden').value,
                descripcion: document.getElementById('nuevaDescripcion').value
            }

            axios.post('/producto/editar', producto).then(res =>{
                console.log("Se realizo el cambio del producto");
            })
        }
        
        
        this.toggleProducto();
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
                    <Button color="danger" className="btn-pill" onClick={this.abrirProductoConfig.bind(this)}>
                    <i className="fa fa-edit"></i>&nbsp;Editar Producto
                    </Button>
                    <Modal isOpen={this.state.productoModal} toggle={this.toggleProducto}
                        className={'modal-primary ' + this.props.className}>
                    <ModalHeader toggle={this.toggleProducto}>Editar información del producto</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                        <Col sm="3">
                            <Label htmlFor="norden">N° Orden</Label>
                            <Input type="text" id="nuevoNOrden" placeholder="N° Orden" value={this.state.valueEditarProductoNOrden} onChange={this.handleChangeEditarProductoNOrden}/>
                        </Col>
                        <Col sm="4">
                            <Label htmlFor="precio">Precio</Label>
                            <Input type="text" id="nuevoPrecio" placeholder="Nuevo precio" value={this.state.valueEditarProductoPrecio} onChange={this.handleChangeEditarProductoPrecio}/>
                        </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col sm="10">
                            <Label htmlFor="nombre">Nombre</Label>
                            <Input type="text" id="nuevoNombre" placeholder="Ingrese nuevo nombre" value={this.state.valueEditarProductoNombre} onChange={this.handleChangeEditarProductoNombre}/>
                        </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col sm="12">
                            <Label htmlFor="descripcion">Descripción</Label>
                            <Input type="text" id="nuevaDescripcion" placeholder="Ingrese nueva descripción" value={this.state.valueEditarProductoDescripcion} onChange={this.handleChangeEditarProductoDescripcion}/>
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