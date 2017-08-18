import React from "react";

export class Foot extends React.Component{
  render(){
    return(
      <div className='footerBox'>
        <div className='footBoxEl'>Czas gry:  {this.props.g}:{this.props.m<10 ? '0' + this.props.m : this.props.m}:{this.props.s<10 ? '0' + this.props.s : this.props.s}</div>
        <div className='footBoxEl'>Gubernator: {this.props.gracz}</div>
        <div className='footBoxEl'>Konto: {this.props.konto} $</div>
        <div className='footBoxEl'>Data: {this.props.rok}-{this.props.mies<10 ? '0' + this.props.mies : this.props.mies}-{this.props.dni<10 ? '0' + this.props.dni : this.props.dni}</div>
      </div>
    );
  }
}
