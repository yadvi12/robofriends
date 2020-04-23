import React, {Component} from 'react';
import { robots } from '../robots';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
class App extends Component  {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  onSearchChange=(event)=>{
    this.setState({searchField: event.target.value})
    console.log(event.target.value);


  }
  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return(
      <div className='tc'>
      <h1 className='f2'>RoboFriends</h1>
      <SearchBox searchChange= {this.onSearchChange}/>
      <Scroll>
       <CardList robots={filteredRobots}/>
       </Scroll>
      </div>
    );
  }



}
export default App;
