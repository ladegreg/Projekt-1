import React from "react";

export class Wyprawy extends React.Component{
  render(){
    if(this.props.wyprawaWyslana === false){
      return(
        <div className='boxBoxPod'>
          <h1>Wyprawy</h1>
          <div className='boxBoxPodBox'>
            <div className='boxBoxPod'>
              <form>
                <div>
                  <label>Koloniści: <input type="range" min="0" max={this.props.kolonisci} name="login"/>
                  </label>
                </div>
                <div>
                  <label>Nałukowcy <input type="range" min="0" max="10" name="login"/>
                  </label>
                </div>
                <div>
                  <label>Czas trfania wyprawy <input type="range" min="0" max="10" name="login"/>
                  </label>
                </div>
                <div className="inpb">
                  <button className="buttonr"><span>Wyśli</span></button>
                </div>
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
