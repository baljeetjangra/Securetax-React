import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
  navBarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container className={classes.navBarDisplayFlex}>
          <IconButton className="" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Hidden smDown>
            <List className={classes.navDisplayFlex} component="nav">
              <Link className={classes.linkText} to="/">
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link className={classes.linkText} to="/">
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link className={classes.linkText} to="/">
                <ListItem button>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
