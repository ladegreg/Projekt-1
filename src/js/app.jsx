import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/style.scss';

import {StarSaga} from './component/page/appr.jsx';
import {StarGra} from './component/game/appg.jsx';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  gracz: 'Bolek',
  start: true
  // gracz: NaN,
  // start: false
  }
}

graczLogo = e => {
  e.preventDefault();
  this.setState({
    gracz: e.target.value
  })
}

gameStart = e => {
  e.preventDefault();
  this.setState({
    start: !this.state.start
  })
}

  render(){
    if(this.state.start == false){
      return(
        <StarSaga
          gracz={this.state.gracz}
          loginn= {this.graczLogo}
          startGame= {this.gameStart}/>
      );
    } else {
      return(
        <StarGra gracz= {this.state.gracz} />
      );
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
