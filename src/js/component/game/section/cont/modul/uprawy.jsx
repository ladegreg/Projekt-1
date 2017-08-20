import React from "react";

class BoxUprawaStart extends React.Component{
  render(){
    return(
      <div>
        <div>
        {this.props.children}
        </div>
      <div className="inpb">
        <button className="buttonr"
          data-dniuprawy= {this.props.dniuprawy}
          data-kolbazz= {this.props.kolBaz}
          onClick= {this.props.startUprawa}>Wyśli</button>
      </div>
      </div>
    )
  }
}

export class Uprawy extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dniuprawy: 70,
      kolBaz: this.props.kolonisciBaza
    }
  }

  kalkdni = e => {
    e.preventDefault();
    this.setState({
      dniuprawy: e.target.value
    })
  }

  kalkwypkol = e => {
    e.preventDefault();
    this.setState({
      kolBaz: e.target.value
    })
  }

  render(){
    if(this.props.uprawaWyslana === false){
      return(
        <div className='boxBoxPod'>
          <h1>Uprawy</h1>
          <div className='boxBoxPodBox'>
            <div className='boxBoxPod'>
              <form>
                <BoxUprawaStart dniuprawy={this.state.dniuprawy} kolBaz={this.state.kolBaz} startUprawa= {this.props.startUprawa}>
                  <div>
                    <label>Koloniści: {this.state.kolBaz} <input type="range" min="1" max={this.props.kolonisciBaza} onChange={this.kalkwypkol}/>
                    </label>
                  </div>
                  <div>
                    <label>Czas trfania uprawy: {this.state.dniuprawy} <input type="range" min="70" max="365" onChange={this.kalkdni}/> dni
                    </label>
                  </div>
                </BoxUprawaStart>
            </form>
            </div>
          </div>
        </div>
      );
      }
    return(
        <div className='boxBoxPod'>
          <h1>Uprawy będą zebrane za {this.props.uprawaTime} dni.</h1>
        </div>
    );
  }
}
