import React from "react";

import {Logo} from './header/header.jsx';
import {BoxCont} from './boxcont.jsx';
import {Registration} from './boxside.jsx';
import {Log} from './log.jsx';

export class StarSaga extends React.Component{
  render(){
    return(
      <Contyner
        gracz= {this.props.gracz}
        loginn= {this.props.loginn}
        startGame= {this.props.startGame}/>
    );
  }
}

class Contyner extends React.Component{
  render(){
    return(
      <div className='container'>
        <header>
          <Logo />
          <Log
            gracz= {this.props.gracz}
            loginn= {this.props.loginn}
            startGame= {this.props.startGame}/>
        </header>
        <section className='sections'>
          <Registration />
          <BoxCont />
        </section>
      </div>
    );
  }
}
