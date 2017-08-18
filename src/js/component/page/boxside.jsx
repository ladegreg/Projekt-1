import React from "react";

export class Registration extends React.Component{
  buttonClick(e){
    alert("Przepraszamy wersja on-line jest jeszcze nie dostępna.");
  }
  render(){
    return(
      <div className='boxleft'>
        <form>
          <div className="inp">
            <label><span className="fig">&#187;</span> Login:</label>
            <div><input size="22" type="text" value="" name="login"/></div>
          </div>
          <div className="inp">
            <label><span className="fig">&#187;</span> E-mail:</label>
            <div><input size="22" type="text" value="" name="email"/></div>
          </div>
          <div className="inp">
            <label><span className="fig">&#187;</span> Twoje hasło:</label>
            <div><input size="22" type="password" value="" name="haslo1"/></div>
          </div>
          <div className="inp">
            <label><span className="fig">&#187;</span> Powtórz hasło:</label>
            <div><input size="22" type="password" value="" name="haslo2"/></div>
            </div>
          <div className="inp">
            <label><span className="fig"> &#187;</span> Akceptuję regulamin:  </label>
            <input type="checkbox" name="regulamin"/>
          </div>
          <div className="inpb">
            <button className="buttonr" onClick={(e) => this.buttonClick(e)}><span>Rejestracja</span></button>
          </div>
          </form>
        </div>
    )
  }
}
