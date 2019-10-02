import React, { Component } from 'react';  
import pop from './pop';  
import './App.css';

class App extends Component {  

constructor(props){  
super(props);  
this.state = { showpop: false };  
}  

togglepop() {  this.setState({  
     showpop: !this.state.showpop
});  
 }  

  render() {  

return (  
<div>  

<h1> Zakkary Smith | Popup Component </h1>  
<p>Popups are a useful tool for placing information, conducting form, and engaging website visitors along their user journey.</p>

<button onClick={this.togglepop.bind(this)}> 
Click Popup
</button>  

{this.state.showpop ? <pop text='Click to Close' closepop={this.togglepop.bind(this)} />  : null }  

</div>  

);  }  }  

export default App;