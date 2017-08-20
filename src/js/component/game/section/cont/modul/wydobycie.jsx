import React from "react";

export class Wydobycie extends React.Component{
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Wydobycie</h1>
        <div className='boxBoxPodBox'>
          <div className='boxBoxPodBoxW'>
            <p>Złoża krzemu: {this.props.krzemWyd} Ton</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Złoża stali: {this.props.stalWyd} Ton</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Złoża krzemu: {this.props.uranWyd} Ton</p>
          </div>
        </div>
      </div>
    );
  }
}
