import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Menu, MenuOpenRounded, MenuRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 0",
  },
  menu: {
    display: "flex",
  },
  sidebarMenu: {
    display: "flex",
    flexDirection: "Column",
    marginTop: "50px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "12px",
    marginLeft: "16px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "50px",
      fontSize: "20px",
    },
  },
  drawer: {
    postition: "absolute",
    right: 0,
    width: "250px",
    height: "100vh",
    backgroundColor: `${theme.palette.primary.main}`,
  },
  logo: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#fff",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "HOME", path: "/" },
    { id: 2, title: "ABOUT", path: "/about" },
    { id: 3, title: "SERVICES", path: "/services" },
    { id: 4, title: "CONTACT", path: "/contact" },
    // { id: 2, title: "ABOUT", path: "/about" },
  ];

  const Menu = () =>
    navLinks.map(({ id, title, path }) => (
      <Link
        onClick={() => setIsOpen(false)}
        className={classes.link}
        key={id}
        to={path}
      >
        {title}
      </Link>
    ));

  return (
    <>
      <Header />
      <AppBar className={classes.root} position="static">
        <Container>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Link className={classes.logo} to="/">
                <Typography variant="h5">Secure Tax</Typography>
              </Link>
            </Grid>
            <Hidden xsDown>
              <Grid item className={classes.menu}>
                {Menu()}
              </Grid>
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setIsOpen(true)} color="inherit">
                <MenuRounded />
              </IconButton>

              <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <Box className={classes.drawer}>
                  <Container>
                    <IconButton onClick={() => setIsOpen(false)}>
                      <MenuOpenRounded style={{ color: "#FFF" }} />
                    </IconButton>
                    <Box className={classes.sidebarMenu}>{Menu()}</Box>
                  </Container>
                </Box>
              </Drawer>
            </Hidden>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
