import React from 'react';
 import PropTypes from 'prop-types';
 import FileUploader from './parts/FileUploader';

import 'src/assets/stylesheets/base.scss';

class App extends React.Component {
  render() {
     return (
        <div>          
           <FileUploader/>          
        </div>
     );
  }
} 



export default App;
   

/* <input type="button" value="Choose Files!" onClick="document.getElementById('fileInput').click();" /> */