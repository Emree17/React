import React,  { Component } from 'react';
import './App.css';
import Contact from './Contact';

class App extends Component {

state={
  Contact:[{
    name:'Emrecan',
    phone:'0999 9999'
  },
  {
    name:'Tuba',
    phone:'0999 9989'
  }
]
};

addContact()
{

}

  render()
  {
    return (
      <div className="App">
  
        <Contact contact={this.state.Contact}/>
       
      </div>
    );
  }
 
}

export default App;
