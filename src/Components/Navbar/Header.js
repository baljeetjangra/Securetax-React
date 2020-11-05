import { Container, Grid, IconButton, makeStyles } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  socialLink: {
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  },
  socialDetail: {
    display: "flex",
    width: "260px",
    justifyContent: "space-between",
  },
  headerColor: {
    backgroundColor: "#fff",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container justify="space-between">
        <Grid item className={classes.socialLink}>
          <a href="">
            <Facebook color="secondary" />
          </a>
          <a href="">
            <Twitter color="secondary" />
          </a>
          <a href="">
            <Instagram color="secondary" />
          </a>
        </Grid>
        <Grid item className={classes.socialDetail}>
          <Phone color="secondary" />
          <h4>999-999-9999</h4>
          <MailOutline color="secondary" />
          <h4>info@email.com</h4>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
