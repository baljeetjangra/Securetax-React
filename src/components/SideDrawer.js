import React, { useState } from "react";
import { Drawer, IconButton, Link, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import {
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
});

const SideDrawer = () => {
  const classes = useStyles(); // Add this

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (e) => setIsDrawerOpen(!isDrawerOpen);

  const sideDrawerList = () => (
    <div onClick={toggleDrawer}>
      <List className={classes.list} component="nav">
        <Link className="" to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link className="" to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link className="" to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer} edge="start" aria-label="menu">
        <Menu />
      </IconButton>
      <Drawer>
        <sideDrawerList />
      </Drawer>
    </div>
  );
};

export default SideDrawer;
