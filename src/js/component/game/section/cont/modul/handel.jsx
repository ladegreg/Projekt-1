import React from "react";

class BoxHandelPoz extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ile: 1
    }
  }

  kalkbud = e => {
    e.preventDefault();
    this.setState({
      ile: e.target.value
    })
  }

  render(){
    return(
      <div className='boxBoxI'>
        <h1>{this.props.kname}</h1>
        <table>
          <tr>
            <td></td><td>Baza</td><td>Statek</td><td>Cena</td>
          </tr>
          <tr>
            <td>Krzem:</td><td>{this.props.krzem}</td>
          </tr>
          <tr>
            <td>Stal:</td><td>{this.props.stal}</td>
          </tr>
          <tr>
            <td>Uran:</td><td>{this.props.uran}</td>
          </tr>
          <tr>
            <td>Żywność:</td><td>{this.props.zywnosc}</td>
          </tr>
        </table>
        <label>krzem:</label>
        <input type='text' onChange={this.kalkbud}/>
        {/* <h3>Czas budowy: {this.props.time * this.state.ile} dni</h3>
        <h4>Potrzebne surowce:</h4>
          <h7>Krzem: {this.props.krzemP * this.state.ile}T<br/></h7>
          <h7>Stal: {this.props.stalP * this.state.ile}T<br/></h7>
          <h7>Uran: {this.props.uranP * this.state.ile}T<br/></h7>
          <h7>Moc: {this.props.mocP * this.state.ile}kw/dzień<br/></h7>
        <BoxInwestPozStart
          ile= {this.state.ile}
          krzemP= {this.props.krzemP}
          stalP= {this.props.stalP}
          uranP= {this.props.uranP}
          mocP= {this.props.mocP}
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          mocWolna= {this.props.mocWolna}
          kname= {this.props.kname}
          pr= {this.props.pr}
          time= {this.props.time}
          startBud= {this.props.startBud}/>*/}
      </div>
    );
  }
}

class BoxHandel extends React.Component{
  render(){
    if(this.props.boxi == '0013'){
      return(
        <BoxHandelPoz kname='Surowce'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          zywnosc= {this.props.zywnosc}
          magazynyPojemnosc= {this.props.magazynyPojemnosc}/>
      );
    } else if(this.props.boxi == '0113'){
      return(
        <BoxHandelPoz kname='Maszyny' />
      );
    } else if(this.props.boxi == '0213'){
      return(
        <BoxHandelPoz kname='Ludzie' />
      );
    } return(
        <div className='boxBoxIZa'>
          <p><b>Handluj by twoja kolonia się rozrastała!!</b></p>
        </div>
      );
  }
}

class ButtonMenu extends React.Component{
  render(){
    return(
        <button className='buttonMenuMenu' name={this.props.name} onClick={this.props.menui} >{this.props.kname}</button>
    );
  }
}

class MenuHandel extends React.Component{
  render(){
    return(
      <div className='menuMenu'>
        <ButtonMenu name='0013' kname='Surowce' menui= {this.props.menui} />
        <ButtonMenu name='0113' kname='Maszyny' menui= {this.props.menui} />
        <ButtonMenu name='0213' kname='Ludzie' menui= {this.props.menui} />
      </div>
    );
  }
}

export class Handel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      boxI: '999',
    }
  }

  menuBoxI = e =>{
    e.preventDefault();
    this.setState({
      boxI: e.target.name
    });
  }

  render(){
    if(this.props.statek === true){
      return(
        <div className='menuBoxI'>
          <MenuHandel menui= {this.menuBoxI} />
          <BoxHandel
            boxi ={this.state.boxI}
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            zywnosc= {this.props.zywnosc}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}/>
        </div>
      );
    } return(
      <div className='boxBoxIZa'>
        <h1>Brak statku na lądowisku</h1>
      </div>
    );
  }
}
