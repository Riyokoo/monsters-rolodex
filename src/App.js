import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search box/search-box.component'

import './App.css';

class App extends React.Component{

  constructor(){
    super();

    this.state = {
     
      monsters : [],
      SearchField : '',
      mesaj:'Ceva',
      title:'Title of the monster'

    };

    
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  handleChange = e =>(
    this.setState({SearchField : e.target.value})
  )

  render(){

    const monsters = this.state.monsters;
    const SearchField = this.state.SearchField;
    
    const FilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(SearchField.toLowerCase()));

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <button onClick = {this.changeText}>Change text</button>
        <button onClick = {this.reversechangetext}>Go back to normal</button>
          <h3>{this.state.mesaj}</h3>
        <SearchBox placeholder = "search monster" handleChange = {this.handleChange}></SearchBox>
        
        <CardList monsters = {FilteredMonsters}></CardList> 
      </div>
    )
  } 
  
  changeText = () => this.setState({mesaj : "altceva"}) ;
  reversechangetext = () => this.setState({mesaj : "acel ceva"});

  
}

export default App;
