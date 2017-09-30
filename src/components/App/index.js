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

class ImageComponent extends React.Component{
   render(){
     return(
        <div>
          <img src={this.props.filenameProp}  alt="Smiley face" height="42" width="42"/>        
        </div>
     )
   }
   
}

class buttonsInstance extends React.Component {

  constructor() {
    super();

    this.state = {
      filename: ''
   }

    this.onItemClick = this.onItemClick.bind(this);
    this.readFile = this.readFile.bind(this);
  }
 
  
  onItemClick (event) {          
      ReactDOM.findDOMNode(this.refs.myInput).click();      
  }

  readFile (event) {     
     // this.setState({filename: event.target.value })   // upload image to cloudinary here
     this.setState({filename: "http://www.dw.com/image/40755497_303.jpg" })    
  }


      render() {
        return (
            <div>       
              <ImageComponent filenameProp={this.state.filename}/>   
              <input id="fileInput" type="file"  style={{ display:  'none'  }} onChange={(event)=> { this.readFile(event) }} ref = "myInput"/>
              <Button bsStyle="info" bsSize="large"  onClick={this.onItemClick} >Upload File </Button>
            </div> 
      );
    }

}



export default buttonsInstance;
   

/* <input type="button" value="Choose Files!" onClick="document.getElementById('fileInput').click();" /> */