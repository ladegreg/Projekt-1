import React from "react";

class BoxProduPozStart extends React.Component{
  render(){
    if(this.props.krzem < this.props.krzemP * this.props.ile || this.props.stal < this.props.stalP * this.props.ile || this.props.uran < this.props.uranP * this.props.ile){
      return(
        <button className='buttonMenuMenu'>Nie przesadzaj</button>
      );
    } return(
      <button className='buttonMenuMenu'
        data-km={this.props.krzemP * this.props.ile}
        data-sm={this.props.stalP * this.props.ile}
        data-um={this.props.uranP * this.props.ile}
        data-pr= {this.props.pr}
        data-ile={this.props.ile}
        data-time={this.props.time * this.props.ile}
        onClick={this.props.startProd} >Rozpocznij Produkcję</button>
    );
  }
}

class BoxProduPoz extends React.Component{
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
      <div className='boxBoxI' name='50'>
        <h1>{this.props.kname}</h1>
        <label>Planowana ilość:</label>
        <input type='text' value={this.state.ile} onChange={this.kalkbud}/>
        <h3>Czas budowy: {this.props.time * this.state.ile} dni</h3>
        <h4>Potrzebne surowce:</h4>
          <h7>Krzem: {this.props.krzemP * this.state.ile}T<br/></h7>
          <h7>Stal: {this.props.stalP * this.state.ile}T<br/></h7>
          <h7>Uran: {this.props.uranP * this.state.ile}T<br/></h7>
          <h7>Moc: {this.props.mocP * this.state.ile}kw<br/></h7>
        <BoxProduPozStart
          ile= {this.state.ile}
          krzemP= {this.props.krzemP}
          stalP= {this.props.stalP}
          uranP= {this.props.uranP}
          mocP= {this.props.mocP}
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          kname= {this.props.kname}
          pr= {this.props.pr}
          time= {this.props.time}
          startProd= {this.props.startProd}/>
      </div>
    );
  }
}

class BoxProdu extends React.Component{
  render(){
    if(this.props.boxi == '0012'){
      return(
        <BoxProduPoz pr='robot1' kname='Robot-1' time='5' krzemP='50' stalP='25' uranP='1' mocP='20'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startProd= {this.props.startProd}/>
      );
    } else if(this.props.boxi == '0112'){
      return(
        <BoxProduPoz pr='robot2' kname='Robot-2' time='15' krzemP='150' stalP='100' uranP='20' mocP='20'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startProd= {this.props.startProd}/>
      );
    } else if(this.props.boxi == '0212'){
      return(
        <BoxProduPoz pr='generator' kname='Generator' time='60' krzemP='100' stalP='200' uranP='150' mocP='25'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startProd= {this.props.startProd}/>
      );
    } else if(this.props.boxi == '0312'){
      return(
        <BoxProduPoz pr='samolot' kname='Samolot' time='30' krzemP='40' stalP='80' uranP='5' mocP='30'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startProd= {this.props.startProd}/>
      );
    } return(
        <div className='boxBoxIZa'>
          <p><b>Wybuduj więcej sprzętu by twoja kolonia się rozrastała!!</b></p>
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

class MenuProdu extends React.Component{
  render(){
    return(
      <div className='menuMenu'>
        <ButtonMenu name='0012' kname='Robot-1' menui= {this.props.menui} />
        <ButtonMenu name='0112' kname='Robot-2' menui= {this.props.menui} />
        <ButtonMenu name='0212' kname='Generator' menui= {this.props.menui} />
        <ButtonMenu name='0312' kname='Samolot' menui= {this.props.menui} />
      </div>
    );
  }
}

export class Produ extends React.Component{
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
    if(this.props.produkcja === false){
      return(
        <div className='menuBoxI'>
          <MenuProdu menui= {this.menuBoxI} />
          <BoxProdu
            boxi ={this.state.boxI}
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            moc= {this.props.moc}
            startProd= {this.props.startProd}/>
        </div>
      );
    } return(
      <div className='boxBoxIZa'>
        <h1>trwa produkcja!! </h1>
        <h3>Zakończy się za {this.props.produkcjaTime} dni.</h3>
      </div>
    );
  }
}
