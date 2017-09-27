import React from 'react';
import PropTypes from 'prop-types';

import 'src/assets/stylesheets/base.scss';


class App extends React.Component {

   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Initial data...'
      }

      this.updateState = this.updateState.bind(this);

   };

   updateState() {
      this.setState({data: 'Data updated...'})
   }

   render() {
      return (
         <div>
            <button onClick = {this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default App;
