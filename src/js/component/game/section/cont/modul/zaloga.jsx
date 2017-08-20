import React from "react";

export class Zaloga extends React.Component{
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Załoga</h1>
        <div className='boxBoxPodBox'>
          <div className='boxBoxPodBoxW'>
            <p>Kolonisci: {this.props.kolonisci} ludzi</p>
            <p>W Bazie: {this.props.kolonisciBaza} ludzi</p>
            <p>Na wyprawie {this.props.kolonisciWyprawa} ludzi</p>
            <p>Na Polu {this.props.kolonisciUprawa} ludzi</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Naukowcy: {this.props.naukowcy} ludzi</p>
            <p>W Bazie: {this.props.naukowcyBaza} ludzi</p>
            <p>Na wyprawie {this.props.naukowcyWyprawa} ludzi</p>
          </div>
          <div className='boxBoxPodBoxW'>
            <p>Żołnierzy: {this.props.zolnierz} ludzi</p>
            <p>W Bazie: {this.props.zolnierzBaza} ludzi</p>
            <p>Na wyprawie {this.props.zolnierzWyprawa} ludzi</p>
          </div>
        </div>
      </div>
    );
  }
}
