import React from "react";

class BoxWydobycieStart extends React.Component{
  render(){
    return(
      <div>
        <div>
        {this.props.children}
        </div>
      <div className="inpb">
        <button className="buttonr"
          data-krzemwydmin= {this.props.krzemWydMin}
          data-stalwydmin= {this.props.stalWydMin}
          data-uranwydmin= {this.props.uranWydMin}
          onClick= {this.props.startWydobywaj}>Wydobywaj</button>
      </div>
      </div>
    )
  }
}

export class Wydobycie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      krzemWydMin: this.props.krzemWydMin,
      stalWydMin: this.props.stalWydMin,
      uranWydMin: this.props.uranWydMin
    }
  }

  kalkKrzemWyd = e => {
    e.preventDefault();
    this.setState({
      krzemWydMin: e.target.value
    })
  }

  kalkStalWyd = e => {
    e.preventDefault();
    this.setState({
      stalWydMin: e.target.value
    })
  }

  kalkUranWyd = e => {
    e.preventDefault();
    this.setState({
      uranWydMin: e.target.value
    })
  }
  render(){
    return(
      <div className='boxBoxPod'>
        <h1>Wydobycie</h1>
        <div className='boxBoxPodBox'>
          <form>
            <BoxWydobycieStart startWydobywaj= {this.props.startWydobywaj} krzemWydMin= {this.state.krzemWydMin} stalWydMin={this.state.stalWydMin} uranWydMin={this.state.uranWydMin}>
              <label>
          <div className='boxBoxPodBoxW'>
            <p>Złoża krzemu: {this.props.krzemWyd} Ton</p>
            <p>Wydobywaj: {this.state.krzemWydMin} Ton/dzień</p>
            <input type="range" min="0" max={this.props.krzemWyd} onChange={this.kalkKrzemWyd}/>
          </div>
            </label>
          <div className='boxBoxPodBoxW'>
            <label>
            <p>Złoża stali: {this.props.stalWyd} Ton</p>
            <p>Wydobywaj: {this.state.stalWydMin} Ton/dzień</p>
            <input type="range" min="0" max={this.props.stalWyd} onChange={this.kalkStalWyd}/>
            </label>
          </div>
          <label>
          <div className='boxBoxPodBoxW'>
            <p>Złoża krzemu: {this.props.uranWyd} Ton</p>
            <p>Wydobywaj: {this.state.uranWydMin} Ton/dzień</p>
            <input type="range" min="0" max={this.props.uranWyd} onChange={this.kalkUranWyd}/>
          </div>
        </label>
      </BoxWydobycieStart>
    </form>
        </div>
      </div>
    );
  }
}
