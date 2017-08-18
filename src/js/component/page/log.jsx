import React from "react";

export class Log extends React.Component {
  constructor(props) {
  super(props);
  this.defaultState = {
  clicked: false,
}
this.state = this.defaultState
}

  buttonClick(e){
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
      if(this.state.clicked === true) {
        return(
              <div className='logbat'>
                <button className='buttonr' onClick={(e) => this.buttonClick(e)}><span>Zwiń</span></button>
                <div className='test'>
                <div className='boxleft loggbox'>
                  <form>
                    <div className='inp'>
                      <label><span className='fig'>&#187;</span> Login:</label>
                      <div><input type='text' name='login' onChange={this.props.loginn}/></div>
                    </div>
                    {/* <div className='inp'>
                      <label><span className='fig'>&#187;</span> Hasło:</label>
                      <div><input type='password' name='haslo'/></div>
                    </div> */}
                    <div className="inpb">
                    <button className='buttonr' onClick={this.props.startGame} ref={(login) => this.login = login}><span>Gram</span></button>
                    </div>
                	</form>
                  </div>
                </div>
              </div>
            )
      } else {
        return(
          <div className='logbat'>
            <button className="buttonr" onClick={(e) => this.buttonClick(e)}><span>Gra Single</span></button>
          </div>
        )
      }
  }
}
