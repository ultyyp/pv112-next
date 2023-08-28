import React from 'react';

class TodoApp extends React.Component {
    state = {
      newItemText: '',
      items: []
    };
  
    handleChange = (event) => {
      this.setState({ newItemText: event.target.value });
    };
  
    addItem = () => {
      const { newItemText, items } = this.state;
      if (newItemText.trim() !== '') {
        this.setState({
          newItemText: '',
          items: [...items, { text: newItemText, completed: false }]
        });
      }
    };
  
    toggleComplete = (index) => {
      const { items } = this.state;
      items[index].completed = !items[index].completed;
      this.setState({ items });
    };
  
    removeItem = (index) => {
      const { items } = this.state;
      this.setState({ items: items.filter((_, i) => i !== index) });
    };
  
    removeChecked = () => {
      this.setState((prevState) => ({
        items: prevState.items.filter(item => !item.completed)
      }));
    };
  
    render() {
      const { newItemText, items } = this.state;
  
      return (
        <div>
          <h1>To-Do List</h1>
          <input
            type="text"
            value={newItemText}
            onChange={this.handleChange}
            placeholder="Add a new item..."
          />
          <button onClick={this.addItem}>Add</button>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => this.toggleComplete(index)}
                />
                {item.text}
                <button onClick={() => this.removeItem(index)}>x</button>
              </li>
            ))}
          </ul>
          <button onClick={this.removeChecked}>Delete Checked</button>
        </div>
      );
    }
  }


export default function Todo(){
    return <TodoApp/>
}