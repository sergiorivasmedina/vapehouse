import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Input,Button } from 'reactstrap';
import LineaProducto from '../../../Components/LineaProducto/LineaProducto'
import axios from '../../../index';


class Producto extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      productos: [],
      
      productoModal: false,
      valueEditarProductoNombre: '',
      valueEditarProductoNOrden: '',
      valueEditarProductoPrecio: '',
      valueEditarProductoDescripcion: '',
      idProducto: -1,

      productChange: false
      
    };

    
    this.toggleProducto = this.toggleProducto.bind(this);

    this.handleChangeEditarProductoNombre = this.handleChangeEditarProductoNombre.bind(this);
    this.handleChangeEditarProductoNOrden = this.handleChangeEditarProductoNOrden.bind(this);
    this.handleChangeEditarProductoPrecio = this.handleChangeEditarProductoPrecio.bind(this);
    this.handleChangeEditarProductoDescripcion = this.handleChangeEditarProductoDescripcion.bind(this);
    
  }

  componentDidMount(){
    //aqui traer la informacion del back-end
    axios.get('/productos').then(res => {
      this.setState({ productos:res.data })
    })

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

  

  toggleProducto() {
    this.setState({
      productoModal: !this.state.productoModal,
    });
  }

  abrirProductoConfig(producto) {
    this.setState({idProducto:producto.idProducto});
    
    //asignar los valores a los inputs
    this.setState({valueEditarProductoNOrden: producto.norden});
    this.setState({valueEditarProductoNombre: producto.nombre});
    this.setState({valueEditarProductoPrecio: producto.precio});
    this.setState({valueEditarProductoDescripcion: producto.descripcion});
  }

  cancelarProductoConfig() {
    this.setState({idProducto:-1});
  }

  guardar(producto) {
    if(document.getElementById('nuevoNombre').value !== producto.nombre || document.getElementById('nuevoNOrden').value !== producto.norden || document.getElementById('nuevoPrecio').value !== producto.precio || document.getElementById('nuevaDescripcion').value !== producto.descripcion){
      
      //llamar al web service correspondiente para la actualizacion del producto
        var prod = {
            idProducto: producto.idProducto,
            nombre: document.getElementById('nuevoNombre').value,
            precio: document.getElementById('nuevoPrecio').value,
            norden: document.getElementById('nuevoNOrden').value,
            descripcion: document.getElementById('nuevaDescripcion').value,
            fechaRegistro: producto.fechaRegistro
        }

        axios.post('/producto/editar', prod).then(res =>{
            console.log("Se realizo el cambio del producto");
            //actualizar la tabla
            var index_actualizar = this.state.productos.findIndex(x=> x.idProducto === producto.idProducto);
            let prodArray = this.state.productos.slice();
            prodArray[index_actualizar].nombre = prod.nombre;
            this.setState({productos: prodArray});
            this.setState({idProducto: -1});
        })
    }
    
    
    this.toggleProducto();
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
                      {(this.state.idProducto !== producto.idProducto) ? (
                        <React.Fragment>
                          <LineaProducto idProducto={producto.idProducto} norden={producto.norden} nombre={producto.nombre} precio={producto.precio} descripcion={producto.descripcion} fechaRegistro={producto.fechaRegistro}/>
                          <td>
                              <Button color="danger" className="btn-pill" onClick={this.abrirProductoConfig.bind(this, producto)}>
                              <i className="fa fa-edit"></i>&nbsp;Editar Producto
                              </Button>
                          </td>
                        </React.Fragment>
                      ):(
                        <React.Fragment>
                          <td><Input type="text" id="nuevoNOrden" placeholder="N° Orden" value={this.state.valueEditarProductoNOrden} onChange={this.handleChangeEditarProductoNOrden}/></td>
                          <td><Input type="text" id="nuevoNombre" placeholder="Ingrese nombre" value={this.state.valueEditarProductoNombre} onChange={this.handleChangeEditarProductoNombre}/></td>
                          <td><Input type="text" id="nuevoPrecio" placeholder="Ingrese precio" value={this.state.valueEditarProductoPrecio} onChange={this.handleChangeEditarProductoPrecio}/></td>
                          <td><Input type="text" id="nuevaDescripcion" placeholder="Ingrese descripcion" value={this.state.valueEditarProductoDescripcion} onChange={this.handleChangeEditarProductoDescripcion}/></td>
                          <td> &nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td> &nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td>
                            <Button color="secondary" outline className="btn-pill" onClick={this.cancelarProductoConfig.bind(this, producto)}>
                              <i className="fa fa-times-rectangle-o"></i>&nbsp;Cancelar
                            </Button>
                          </td>
                          <td>
                            <Button color="danger" outline className="btn-pill" onClick={this.guardar.bind(this, producto)}>
                              <i className="fa fa-save"></i>&nbsp;Guardar
                            </Button>
                          </td>
                        </React.Fragment>
                      )}
                      
                      
                    </tr>
                    )}
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Producto;
