import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import 'src/assets/stylesheets/base.scss';

class App extends React.Component {
  render() {
     return (
        <div>
           <Header/>
           <FileUploader/>
        </div>
     );
  }
}

class Header extends React.Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}

class FileUploader extends React.Component {
  render() {
     return (
        <div>            
          <ReactBootstrap.Button  className="btn btn-primary">
          Something
          </ReactBootstrap.Button>
        </div>
     );
  }
}



class buttonsInstance extends React.Component {

  constructor() {
    super();
    this.onItemClick = this.onItemClick.bind(this);
  }
 
  
  onItemClick (event) {    
    //this.inputElement.click();    
      ReactDOM.findDOMNode(this.refs.myInput).click();      
    }

  render() {
     return (
        <div>          
           <input id="fileInput" type="file"  style={{ display:  'none'  }}  ref = "myInput"/>
           <Button bsStyle="info" bsSize="large"  onClick={this.onItemClick} >Upload File </Button>
        </div> 
  );
}
}



export default buttonsInstance;
   

/* <input type="button" value="Choose Files!" onClick="document.getElementById('fileInput').click();" /> */