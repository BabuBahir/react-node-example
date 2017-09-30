import React from 'react';
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
  render() {
     return (
        <div>          
           <input id="fileInput" type="file"  style={{ display:  'none'  }}/>
           <Button bsStyle="info" bsSize="large" >Upload File </Button>
        </div> 
  );
}
}



export default buttonsInstance;
   

/* <input type="button" value="Choose Files!" onClick="document.getElementById('fileInput').click();" /> */