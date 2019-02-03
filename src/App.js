import React, { Component } from 'react';
import Header from './Components/Header';
import Jumbotron from './Components/Jumbotron';
import Thumbnails from './Components/Thumbnails';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnails: [
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
        {
          cardText: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
          image: 'http://www.w3.org/2000/svg'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App" id="top">
        <Header />
        <main role="main">
          <Jumbotron />
          <div className="album py-5 bg-light">
            <div className="container">
              <Thumbnails thumbnails={this.state.thumbnails}/>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
