import './App.css';
import Header from './pages/Header';
import SingleItem from './pages/SingleItem';
import SingleItem2 from './pages/SingleItem2';
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
    const x = this.state.items.length;
    const item = { text: newItem, done:false, key:x}
    console.log(item);
    this.setState({
      items: this.state.items.concat(item)
    })
  };

  render() {
    return (
      <>
        <Header />
        <div className='body'>
          <SingleItem handleClick={ () => this.handleClick()} />

          {this.state.items.map((item, index) =>
            <SingleItem2
              text={item.text}
              id={item.id}
              index={index}
              key={index.toString()}
              handleClick={item.handleClick}
            />
          )}
          </div>
        </>
    );
  }
}

export default App;