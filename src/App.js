import './App.css';
import Header from './pages/Header';
import SingleItem from './pages/SingleItem';
import SingleItem2 from './pages/SingleItem2';
import Done from './pages/Done';
import React from 'react';

class App extends React.Component {
  state = {
    items: [
      { text: "item 1", done: false, key: '0' }, 
      { text: "item 2", done: false, key: '1' },
    ]
  };

  handleClick() {
    console.log("click");
    const newItem = prompt("Please enter new task", "empty new task");
    const x = this.state.items.length.toString();
    const item = { text: newItem, done:false, key:x}
    console.log(item);
    this.setState({
      items: this.state.items.concat(item)
    })
  };

  
  handleDone = (index) => {
    console.log("1 ", this.state.items[index]);
    const currentDone = this.state.items[index].done;
    console.log("cd1 ",  currentDone);
    this.setState(prevState => ({
      done: prevState.items[index].done = !currentDone

  }));
    console.log("2 ", this.state.items[index]);
    console.log("cd2 ",  currentDone);
  };

  render() {
    return (
      <>
        <Header />
        <div className='body'>
          

          {this.state.items.map((item, index) =>
            <SingleItem2
              text={item.text}
              index={index}
              key={item.key}
              done={item.done}
              handleDone={this.handleDone}
            />
          )}

            <SingleItem handleClick={ () => this.handleClick()} />
          </div>
        </>
    );
  }
}

export default App;