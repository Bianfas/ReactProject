import React from 'react';

import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = (props) =>{
    const {todos,deleteTodo,toggleCompleted} = props;
    const listItems = todos.map((todo,index) =>{
        return (
    //<List component="nav">  
     <ListItem dense button key={index}>
        <Checkbox checked={todo.completed} onChange={() => toggleCompleted(index)}></Checkbox>
        <ListItemText primary={todo.value}></ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick = {() => deleteTodo(index)}>
            <DeleteIcon ></DeleteIcon>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem> 
    //</List>
        )
    })
    return <List>{listItems}</List>;
};

export default TodoList;