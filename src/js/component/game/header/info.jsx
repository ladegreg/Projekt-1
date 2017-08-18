import React from "react";

export class Info extends React.Component{
  render(){
    return(

      <div className='info'>
        <div className='infoPoz'>| Załoga: {this.props.zaloga} |</div>
        <div className='infoPoz'>| Krzem: {this.props.krzem} |</div>
        <div className='infoPoz'>| Stal: {this.props.stal} |</div>
        <div className='infoPoz'>| Uran: {this.props.uran} |</div>
        <div className='infoPoz'>| Moc: {this.props.moc} |</div>
      </div>
    );
  }
}
