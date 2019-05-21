import React from 'react';
import Typography from '@material-ui/core/Typography';

// import * as Chck from './CheckBox.js';
// import logo from './logo.svg';
// import './App.css';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Grid from '@material-ui/core/Grid';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
      todos: []
    };
  }
  
  updateValue = e => {
  this.setState({
    value: e.target.value
  })
  //console.log(this.state.value);
  }

  saveTodo = () =>{
    const todos = this.state.todos;
    //todos.push(this.state.value);
    todos.push({
      value:this.state.value,
      completed : false
    });
    this.clearValue();
    this.setState({
      todos
      //value:""
    });
  };

  deleteTodo = (index) =>{
    const todos = this.state.todos;
    todos.splice(index,1)
    this.setState({
      todos
    });
  }

  clearValue= () =>{
    this.setState({
      value:""
    });
  };

  toggleCompleted = (index) =>{
    const todos = this.state.todos;
    todos[index].completed =  !todos[index].completed ;
    this.setState({
      todos
    })
  }

  render() {
    return (
  <React.Fragment>
    <Typography variant="h2" align="center">Hello Sexy</Typography>
    
    <Grid container justify="center">
    <TodoForm 
    onChange={this.updateValue} 
    value={this.state.value} 
    saveTodo={this.saveTodo}/>
    </Grid>

    <Grid container justify="center">
    <Grid item md={8}>
    <TodoList 
    todos={this.state.todos} 
    deleteTodo={this.deleteTodo} 
    toggleCompleted={this.toggleCompleted}>
    </TodoList>
    </Grid> 
    </Grid>
  </React.Fragment>
  );  
 }
}

//CheckBox
export default App;

