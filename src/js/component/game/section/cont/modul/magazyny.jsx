import React from "react";

export class Magazyny extends React.Component{
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Magazyny</h1>
        <div className='boxBoxPodBox'>
          <div className='boxBoxPodBoxW'>
            <p>Pojemność magazynów: {this.props.magazyny * this.props.magazynyPojemnosc} Ton</p>
            <p>Stan magazynów: {this.props.krzem + this.props.stal + this.props.uran + this.props.zywnosc} Ton</p>
            <p>Krzem: {this.props.krzem} Ton</p>
            <p>Stal: {this.props.stal} Ton</p>
            <p>Uran: {this.props.uran} Ton</p>
            <p>Zywność: {this.props.zywnosc} Ton</p>
          </div>
        </div>ść
      </div>
    );
  }
}
