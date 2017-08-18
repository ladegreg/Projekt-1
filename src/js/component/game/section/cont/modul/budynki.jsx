import React from "react";

export class Budynki extends React.Component{
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Dostępne Budynki</h1>
        <div className='boxBoxPodBox'>
          <div className='boxBoxPodBoxW'>
            <p>Mieszkania: {this.props.mieszkania} sztuk</p>
            <p>Pojemność: {this.props.mieszkania * this.props.mieszkaniaPojemnosc} ludzi</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Magazyny: {this.props.magazyny} sztuk</p>
            <p>Pojemność: {this.props.magazyny * this.props.magazynyPojemnosc} Ton</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Fabryki: {this.props.mieszkania} sztuk</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Lądowiska: {this.props.magazyny} sztuk</p>
          </div>
        </div>
      </div>
    );
  }
}
