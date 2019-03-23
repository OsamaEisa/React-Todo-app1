import React, { Component } from 'react';
import TodoItems from './components/todoItems/TodoItems';
import AddItems from './components/editItems/AddItems';

class App extends Component {

  state = {
    items: [
      {id:1, name:'name 1', age:20 },
      {id:2, name:'name 2', age:21 },
      {id:3, name:'name 3', age:22 }
    ],
  }

  deleteItem = (id) => {
    console.log(id);
    let newItems = this.state.items;
    let index = newItems.findIndex(item => item.id === id )
      newItems.splice(index,1)
      this.setState({
        items: newItems
      })
    /**
     * let newItems = this.state.items.filter(item => {
     *  return item.id !== id 
     * })
     *  filter return: 
     *    true means keep this id in the array and delete the rest
     *    false means delete this id and keep the rest 
     */
  } 

  addItem = (item) => {
    item.id = Math.random();
    let newItems = this.state.items;
    newItems.push(item);
    this.setState({
      items: newItems
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>Todo App</h1>
        <h3>{this.state.errmsg}</h3>
        <TodoItems itemsSt= {this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
