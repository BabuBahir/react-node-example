import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


class FileImage extends React.Component{
  render(){
    return(
       <div>
         <img src={this.props.filenameProp}  alt="Smiley face"   width="100"/>        
       </div>
    )
  }
  
}


class FileUploader extends React.Component {
    
      constructor() {
        super();
    
        this.state = {
          filename: '',
          numChildren :0
       }
    
        this.onItemClick = this.onItemClick.bind(this);
        this.readFile = this.readFile.bind(this);
     
      }
     

      onItemClick (event) {          
          ReactDOM.findDOMNode(this.refs.myInput).click();      
          this.props.addChild();
      }
    
      readFile (event) {     
         // this.setState({filename: event.target.value })   // upload image to cloudinary here
         this.setState({filename: "http://www.dw.com/image/40755497_303.jpg" })    
      }
    
    
          render() {
            return (
                <div>       
                  <FileImage filenameProp={this.state.filename}/>   
                  <input id="fileInput" type="file"  style={{ display:  'none'  }} onChange={(event)=> { this.readFile(event) }} ref = "myInput"/>
                  <Button bsStyle="info" bsSize="large"  onClick={this.onItemClick} >Upload File </Button>
                </div> 
          );
        }
    
    }
    
 class FileComponent extends React.Component {
  constructor() {
    super();    
    this.state = {
      numChildren :1
   }
   this.addChild = this.addChild.bind(this);
  }

  
  addChild() {
    var numChildren = (this.state.numChildren) +1;
    this.setState({numChildren :numChildren}) 
    console.log(71)      
 }


 render() {
  const arr = [];
  for (var i = 0; i < this.state.numChildren; i += 1) {
      arr.push(<FileUploader key={i} addChild={this.addChild}/>);
  }
  return (<div>{arr}</div>);
}


 }

    
export default FileComponent;