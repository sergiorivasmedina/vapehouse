import React, { Component } from 'react';
import { Label,Card, CardBody, CardHeader, Col, Row, Table, Input,Button,ButtonDropdown,DropdownItem,DropdownToggle,DropdownMenu,Badge,Modal,ModalHeader,ModalBody,ModalFooter,FormGroup } from 'reactstrap';
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

      productChange: false,

      dropdownOpen: new Array(19).fill(false),

      small: false,

      valueNuevoProductoNombre: '',
      valueNuevoProductoNOrden: '',
      valueNuevoProductoPrecio: '',
      valueNuevoProductoDescripcion: ''
      
    };

    
    this.toggleProducto = this.toggleProducto.bind(this);

    this.handleChangeEditarProductoNombre = this.handleChangeEditarProductoNombre.bind(this);
    this.handleChangeEditarProductoNOrden = this.handleChangeEditarProductoNOrden.bind(this);
    this.handleChangeEditarProductoPrecio = this.handleChangeEditarProductoPrecio.bind(this);
    this.handleChangeEditarProductoDescripcion = this.handleChangeEditarProductoDescripcion.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);

    this.handleChangeNuevoProductoNOrden = this.handleChangeNuevoProductoNOrden.bind(this);
    this.handleChangeNuevoProductoPrecio = this.handleChangeNuevoProductoPrecio.bind(this);
    this.handleChangeNuevoProductoNombre = this.handleChangeNuevoProductoNombre.bind(this);
    this.handleChangeNuevoProductoDescripcion = this.handleChangeNuevoProductoDescripcion.bind(this);
    
  }

  componentDidMount(){
    //aqui traer la informacion del back-end
    axios.get('/productos').then(res => {
      this.setState({ productos:res.data })
    })

  }

  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => { return (index === i ? !element : false); });
    this.setState({
      dropdownOpen: newArray,
    });
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

  handleChangeNuevoProductoNOrden(event) {
    this.setState({valueNuevoProductoNOrden:event.target.value});
  }

  handleChangeNuevoProductoPrecio(event) {
    this.setState({valueNuevoProductoPrecio:event.target.value});
  }

  handleChangeNuevoProductoNombre(event) {
    this.setState({valueNuevoProductoNombre:event.target.value});
  }

  handleChangeNuevoProductoDescripcion(event) {
    this.setState({valueNuevoProductoDescripcion:event.target.value});
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
            fechaRegistro: producto.fechaRegistro,
            estado: producto.estado
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

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  agregarProducto() {
    let nOrden = document.getElementById('nOrden').value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let descripcion = document.getElementById('descripcion').value;
    if(nOrden !== '' && nombre !== '' && precio !== '' && descripcion !== '' && !isNaN(nOrden) && !isNaN(precio)){
      //llamar web service para agregar el nuevo producto
      var prod = {
        nombre: nombre,
        precio: precio,
        norden: nOrden,
        descripcion: descripcion,
        estado: 1
      }

      axios.post('/producto/insertar', prod).then(res => {
        let prodArray = this.state.productos.slice();
        prod.fechaRegistro = "Ahora"
        prodArray.push(prod);
        this.setState({productos: prodArray});
      })

      this.toggleSmall();
    } else {
      console.log("no cumplio el condicional")
    }
  }

  activacionProducto(producto, i) {
    //cambiar estado del producto
    var prod = {
      idProducto: producto.idProducto,
      nombre: producto.nombre,
      precio: producto.precio,
      norden: producto.norden,
      descripcion: producto.descripcion,
      fechaRegistro: producto.fechaRegistro,
      estado: i
    }

    axios.post('/producto/editar', prod).then(res =>{
      //actualizar la tabla
      var index_actualizar = this.state.productos.findIndex(x=> x.idProducto === producto.idProducto);
      let prodArray = this.state.productos.slice();
      prodArray[index_actualizar].estado = prod.estado;
      this.setState({productos: prodArray});
      this.setState({idProducto: -1});
  })
  }

  eliminarProducto(producto){
    axios.delete('/producto/eliminar', {params: {idProducto: producto.idProducto}}).then(res => {
      // var index_actualizar = this.state.productos.findIndex(x=> x.idProducto === producto.idProducto);
      let prodArray = this.state.productos.filter( e => e.idProducto !== producto.idProducto);
      this.setState({productos: prodArray});
      this.setState({idProducto: -1});
    })
  }
    
    render() {
        return (
      <div className="animated fadeIn">
        <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <td>
            <Button block color="dark" className="btn-square" onClick={this.toggleSmall}>Agregar Producto</Button>
            <Modal isOpen={this.state.small} toggle={this.toggleSmall} className={'modal-sm ' + this.props.className}>
              <ModalHeader toggle={this.toggleSmall}>Agregar Nuevo Producto</ModalHeader>
              <ModalBody>
                <React.Fragment>
                  <FormGroup row>
                    <Col sm="4">
                      <Label htmlFor="labelNOrden">N° Orden</Label>
                      <Input type="text" id="nOrden" value={this.state.valueNuevoProductoNOrden} onChange={this.handleChangeNuevoProductoNOrden} placeholder="N°"/>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                    <Col sm="5">
                      <Label htmlFor="labelPrecio">Precio (S/)</Label>
                      <Input type="text" id="precio" value={this.state.valueNuevoProductoPrecio} onChange={this.handleChangeNuevoProductoPrecio} placeholder="Precio (S/)"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="10">
                      <Label htmlFor="labelNombre">Nombre del Producto</Label>
                      <Input type="text" id="nombre" value={this.state.valueNuevoProductoNombre} onChange={this.handleChangeNuevoProductoNombre} placeholder="Nombre"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm="12">
                      <Label htmlFor="labelDescripcion">Descripción</Label>
                      <Input type="text" id="descripcion" value={this.state.valueNuevoProductoDescripcion} onChange={this.handleChangeNuevoProductoDescripcion} placeholder="Descripcion"/>
                    </Col>
                  </FormGroup>
                </React.Fragment>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.agregarProducto.bind(this)}>Agregar</Button>{' '}
                <Button color="secondary" onClick={this.toggleSmall}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </td>
          <br></br>
        </Col>
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
                    <th>Estado</th>
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
                          {(producto.estado === 1) ? (
                            <Badge color="success">Activo</Badge>
                          ) :(
                            <Badge color="secondary">Inactivo</Badge>
                          )
                          }
                          </td>
                          <td>
                              <Button color="danger" className="btn-pill" onClick={this.abrirProductoConfig.bind(this, producto)}>
                              <i className="fa fa-edit"></i>&nbsp;Editar Producto
                              </Button>
                          </td>
                        </React.Fragment>
                      ):(
                        <React.Fragment>
                          <td sm="8"><Input type="text" id="nuevoNOrden" placeholder="N° Orden" value={this.state.valueEditarProductoNOrden} onChange={this.handleChangeEditarProductoNOrden}/></td>
                          <td><Input type="text" id="nuevoNombre" placeholder="Ingrese nombre" value={this.state.valueEditarProductoNombre} onChange={this.handleChangeEditarProductoNombre}/></td>
                          <td><Input type="text" id="nuevoPrecio" placeholder="Ingrese precio" value={this.state.valueEditarProductoPrecio} onChange={this.handleChangeEditarProductoPrecio}/></td>
                          <td><Input type="text" id="nuevaDescripcion" placeholder="Ingrese descripcion" value={this.state.valueEditarProductoDescripcion} onChange={this.handleChangeEditarProductoDescripcion}/></td>
                          <td> &nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td> &nbsp;&nbsp;&nbsp;&nbsp;</td>
                          <td>
                          <ButtonDropdown isOpen={this.state.dropdownOpen[18]} toggle={() => { this.toggle(18); }}>
                            <DropdownToggle caret size="sm" outline>
                              <i className="fa fa-cog"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem header>Configuración</DropdownItem>
                              {(producto.estado !== 1) ? (
                                <DropdownItem onClick={this.activacionProducto.bind(this, producto, 1)}>Activar</DropdownItem>
                              ): (
                                <DropdownItem onClick={this.activacionProducto.bind(this, producto, 0)}>Desactivar</DropdownItem>
                              )}
                              <DropdownItem onClick={this.eliminarProducto.bind(this, producto)}>Eliminar</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                          </td>
                          <td>
                            <Button color="danger" outline className="btn-pill" onClick={this.guardar.bind(this, producto)}>
                              <i className="fa fa-save"></i>&nbsp;Guardar
                            </Button>
                          </td>
                          <td>
                            <Button color="secondary" outline className="btn-pill" onClick={this.cancelarProductoConfig.bind(this, producto)}>
                              <i className="fa fa-times-rectangle-o"></i>&nbsp;Cancelar
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
