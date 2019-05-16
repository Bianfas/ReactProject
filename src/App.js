import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import * as Chck from './CheckBox.js';
// import logo from './logo.svg';
// import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
  <React.Fragment>
    <Typography variant="h2" align="center">Hello Sexy</Typography>
    <TextField type="text" variant="outlined" margin="normal" placeholder="add to do" ></TextField>
    <List component="nav">
      <ListItem dense button >
        <Checkbox></Checkbox>
        <ListItemText primary="yolo"></ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  </React.Fragment>
  );
}

//CheckBox

export default App;

