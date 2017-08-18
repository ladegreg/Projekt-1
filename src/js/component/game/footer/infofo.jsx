import React from "react";

export class Info extends React.Component{
  state = {
  piple: this.props.piple,
  stal: this.props.stal,
  uran: this.props.uran
  }
  render(){
    return(
      <div className='infofo'>
        <div className='infofoPoz'>| Piple: {this.state.piple} |</div>
        <div className='infofoPoz'>| stal: {this.state.stal} |</div>
        <div className='infofoPoz'>| uran: {this.state.uran} |</div>
      </div>
    );
  }
}
