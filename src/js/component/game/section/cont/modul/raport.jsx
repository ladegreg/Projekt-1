import React from "react";

class InwestRap extends React.Component{
  render(){
    if(this.props.budowa == true){
      return(
        <div>
          <h1>trwa budowa!! </h1>
          <h3>Zakończy się za {this.props.budowaTime} dni.</h3>
        </div>
      );
    } else {
      return(
        <h1>Brak zgłoszenia rozpoczęcia budowy</h1>
      );
    }
  }
}

class ProduRap extends React.Component{
  render(){
    if(this.props.produkcja == true){
      return(
        <div>
          <h1>trwa produkcja!! </h1>
          <h3>Zakończy się za {this.props.produkcjaTime} dni.</h3>
        </div>
      );
    } else {
      return(
        <h1>Brak zgłoszenia rozpoczęcia produkcji</h1>
      );
    }
  }
}

class WyprawaRap extends React.Component{
  render(){
    if(this.props.wyprawaWyslana == true){
      return(
        <div>
          <h1>trwa wyprawa!! </h1>
          <h3>Zakończy się za {this.props.wyprawaTime} dni.</h3>
        </div>
      );
    } else {
      return(
          <h1>Brak zgłoszenia rozpoczęcia wyprawy</h1>
      );
    }
  }
}

class UprawaRap extends React.Component{
  render(){
    if(this.props.uprawaWyslana == true){
      return(
        <div>
          <h1>Praze w polu trwają!! </h1>
          <h3>Zakończą się za {this.props.uprawaTime} dni.</h3>
        </div>
      );
    } else {
      return(
          <h1>Brak zgłoszenia rozpoczęcia prac w polu</h1>
      );
    }
  }
}

export class Raport extends React.Component{
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Raport</h1>
        <div className='boxBoxPodBox'>
          <InwestRap
            budowa= {this.props.budowa}
            budowaTime= {this.props.budowaTime}/>
        </div>
        <div className='boxBoxPodBox'>
          <ProduRap
            produkcja= {this.props.produkcja}
            produkcjaTime= {this.props.produkcjaTime}/>
        </div>
        <div className='boxBoxPodBox'>
          <WyprawaRap
            wyprawaWyslana= {this.props.wyprawaWyslana}
            wyprawaTime= {this.props.wyprawaTime}/>
        </div>
        <div className='boxBoxPodBox'>
          <UprawaRap
            uprawaWyslana= {this.props.uprawaWyslana}
            uprawaTime= {this.props.uprawaTime}/>
        </div>
      </div>
    );
  }
}
