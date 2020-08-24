import React from 'react';
import ReactDOM from 'react-dom';
import {EntryForm} from './EntryForm';

class App extends React.Component{
  render(){
    return (
      <div>
      <h1>Calorie Calculator</h1>
      <EntryForm />
      <footer class="footer">
        <small>© Jacob Crawley, 2020</small>
      </footer>
      </div>
    );
  }
}



export default App;
