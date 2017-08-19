import React from "react";

class BoxWyprawaStart extends React.Component{
  render(){
    return(
      <div className="inpb">
        <button className="buttonr"><span>Wyśli</span></button>
      </div>
    )
  }
}
  <div className="inpb">
    <button className="buttonr"><span>Wyśli</span></button>
  </div>

class Ling extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ile: this.props.Baza
    }
  }
  kalkwyp = e => {
    e.preventDefault();
    this.setState({
      ile: e.target.value
    })
  }
  render(){
    return(
      <div>
        <label>{this.props.name + this.state.ile}</label>
        <input type="range" min="0" max={this.props.Baza} onChange={this.kalkwyp}/>
      </div>
    )
  }
}

export class Wyprawy extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ile: 1
    }
  }
  kalkdni = e => {
    e.preventDefault();
    this.setState({
      ile: e.target.value
    })
  }
  render(){
    if(this.props.wyprawaWyslana === false){
      return(
        <div className='boxBoxPod'>
          <h1>Wyprawy</h1>
          <div className='boxBoxPodBox'>
            <div className='boxBoxPod'>
              <form>
                <div>
                  <Ling name="Koloniści: " Baza={this.props.kolonisciBaza}/>
                </div>
                <div>
                  <Ling name="Nałukowcy: " Baza={this.props.naukowcyBaza}/>
                </div>
                <div>
                  <label>Czas trfania wyprawy {this.state.ile} <input type="range" min="0" max="365" onChange={this.kalkdni}/> dni
                  </label>
                </div>
                <BoxWyprawaStart dni={this.state.ile}/>
            </form>
            </div>
          </div>
        </div>
      );
      }
    return(
        <div className='boxBoxPod'>
          <h1>Wyprawa wróci za x dni.</h1>
        </div>
    );
  }
}
