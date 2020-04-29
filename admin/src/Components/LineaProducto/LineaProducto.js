import React, { Component } from 'react';
import { Button,Modal,ModalBody,ModalHeader,ModalFooter } from 'reactstrap';

class LineaProducto extends Component {
    constructor(props){
        super(props);
        this.state = {
            primary: false,
            primary2: false,
        }
        

        this.togglePrimary = this.togglePrimary.bind(this);
        this.togglePrimary2 = this.togglePrimary2.bind(this);
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

    render() {
        
        return(
            <>
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
                        Aquí se mostraría las opciones para añadir las fotos del producto.
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
                        Aqué se añadiría las opciones para mostrar los detalles y variantes que tenga el producto.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.togglePrimary2}>Guardar</Button>{' '}
                        <Button color="secondary" onClick={this.togglePrimary2}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </td>
            </>
        );
    }
}

export default LineaProducto;