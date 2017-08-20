import React from "react";

class BoxWyprawaStart extends React.Component{
  render(){
    return(
      <div>
        <div>
        {this.props.children}
        </div>
      <div className="inpb">
        <button className="buttonr"
          data-dniwyprawy= {this.props.dniwyprawy}
          data-kolbazz= {this.props.kolBaz}
          data-naubazz= {this.props.nauBaz}
          onClick= {this.props.startWyprawa}>Wyśli</button>
      </div>
      </div>
    )
  }
}

export class Wyprawy extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      dniwyprawy: 2,
      kolBaz: this.props.kolonisciBaza,
      nauBaz: this.props.naukowcyBaza
    }
  }

  kalkdni = e => {
    e.preventDefault();
    this.setState({
      dniwyprawy: e.target.value
    })
  }

  kalkwypkol = e => {
    e.preventDefault();
    this.setState({
      kolBaz: e.target.value
    })
  }

  kalkwypnau = e => {
    e.preventDefault();
    this.setState({
      nauBaz: e.target.value
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
                <BoxWyprawaStart dniwyprawy={this.state.dniwyprawy} kolBaz={this.state.kolBaz} nauBaz={this.state.nauBaz} startWyprawa= {this.props.startWyprawa}>
                  <div>
                    <label>Koloniści: {this.state.kolBaz} <input type="range" min="0" max={this.props.kolonisciBaza} onChange={this.kalkwypkol}/>
                    </label>
                  </div>
                  <div>
                    <label>Naukowcy: {this.state.nauBaz} <input type="range" min="0" max={this.props.naukowcyBaza} onChange={this.kalkwypnau}/>
                    </label>
                  </div>
                  <div>
                    <label>Czas trfania wyprawy: {this.state.dniwyprawy} <input type="range" min="2" max="365" onChange={this.kalkdni}/> dni
                    </label>
                  </div>
                </BoxWyprawaStart>
            </form>
            </div>
          </div>
        </div>
      );
      }
    return(
        <div className='boxBoxPod'>
          <h1>Wyprawa wróci za {this.props.wyprawaTime} dni.</h1>
        </div>
    );
  }
}
