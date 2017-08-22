import React from "react";

export class Generator extends React.Component{
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Generatory</h1>
        <div className='boxBoxPodBox'>
          <div className='boxBoxPodBoxW'>
            <p>Liczba generatorów: {this.props.generator} sztuk</p>
            <p>Moc {this.props.generator * 2000} kw/dzień</p>
            <p>Dostępna Moc: {this.props.mocWolna} kw/dzień</p>
          </div>
        </div>
      </div>
    );
  }
}
