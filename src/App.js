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
      { text: "item 3", done: false, key: '2' },
      { text: "item 4", done: false, key: '3' },
      { text: "item 5", done: false, key: '4' },
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
    //v1
  //   const currentDone = this.state.items[index].done;
  //   this.setState(prevState => ({
  //     done: prevState.items[index].done = !currentDone
  // }));

    //v2
  const part1 = this.state.items.slice(0, index);
  const part2 = this.state.items.slice((index+1));
  const currentTask = this.state.items[index];
  console.log(part1);
  console.log(part2);
  console.log(currentTask);
  currentTask.done = !currentTask.done;
  console.log(currentTask);
  const newItems = part1.concat(currentTask, part2);
  this.setState(
    {items: newItems}
  )
  console.log(this.state.items);
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