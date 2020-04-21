import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

import BannerHamburger from './BannerHamburger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    display: "flex",
    flex: 1
  },
  storeName: {
    color: "#F4F4F4",
    marginTop: "16px",
    display: "inline-block"
  },
  menuButton: {
    marginRight: "30px",
    textDecoration: "none",
    color: "#F4F4F4"
  },
  rightMenuButton: {
    marginRight: "30px",
    textDecoration: "none",
    color: "#1C1C1C"
  },
  appbar: {
    padding: "0 60px",
    [theme.breakpoints.down('md')]: {
      padding: "0 10px"
    }
  }
});

const Banner = ({ classes, quantity, config, width }) => {

  const number = quantity ? ` (${quantity})` : "";

  // For Top Banner
  const productLink = <Link to={`/product`} className={classes.menuButton}>
    <Typography variant="button" gutterBottom>Productos</Typography>
  </Link>

  const companyLink = <Link to={`/empresa`} className={classes.menuButton}>
    <Typography variant="button" gutterBottom>Empresa</Typography>
  </Link>

  const contactLink = <Link to={`/contacto`} style={{flex: 1}} className={classes.menuButton}>
    <Typography variant="button" gutterBottom>Contacto</Typography>
  </Link>

  //For Rigth Banner
  const rightProductLink = <Link to={`/product`} className={classes.rightMenuButton}>
    <Typography variant="button" gutterBottom>Productos</Typography>
  </Link>

  const rightCompanyLink = <Link to={`/empresa`} className={classes.rightMenuButton}>
    <Typography variant="button" gutterBottom>Empresa</Typography>
  </Link>

  const rightContactLink = <Link to={`/contacto`} style={{flex: 1}} className={classes.rightMenuButton}>
    <Typography variant="button" gutterBottom>Contacto</Typography>
  </Link>

  let menu;
  if (isWidthDown('sm', width)) {
    menu = <BannerHamburger productLink={rightProductLink} companyLink={rightCompanyLink} contactLink={rightContactLink} number={number} />
  } else {
    menu = (<span className={classes.buttons}>
        { productLink }
        { companyLink }
        { contactLink }
        <Link to={`/cart`} className={classes.menuButton} style={{ marginRight: 0 }}>
          <Typography variant="button" gutterBottom>Cart{number}</Typography>
        </Link>
      </span>)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.appbar}>
        <Toolbar>
        <a href="/"><img src="https://scontent.ftru1-1.fna.fbcdn.net/v/t1.0-1/60037162_649519088826302_5712132072173207552_n.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=vbrCqP6FOisAX9_lRLx&_nc_ht=scontent.ftru1-1.fna&oh=259adadc03551f6fb488b501fea43260&oe=5EC059B8" alt="Vapehouse_logo" width="50" height="50"></img></a>
          <Link to={`/`} className={classes.menuButton}>
            <div className="logo" />
            <h3 className={classes.storeName}>{config.store_name}</h3>
          </Link>
          { menu }
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withWidth()(withStyles(styles)(Banner));