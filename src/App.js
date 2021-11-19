import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { MEMBERS } from './shared/members';
import Greet from './components/greet';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      members: MEMBERS
    };
  }

  render(){
    return (
      <div className='App'>
        <Navbar color="primary">
          <div className="container" id="brand">
            <NavbarBrand>The Men Server</NavbarBrand>
          </div>
        </Navbar>
        <Greet />
        <h1>Members of Men</h1>
        <Menu members={this.state.members} />
      </div>
    );
  }
}

export default App;
