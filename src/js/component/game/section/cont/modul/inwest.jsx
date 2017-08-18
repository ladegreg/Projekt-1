import React from "react";

class BoxInwestPozStart extends React.Component{
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
        onClick={this.props.startBud} >Rozpocznij Budowe</button>
    );
  }
}

class BoxInwestPoz extends React.Component{
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
        <BoxInwestPozStart
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
          startBud= {this.props.startBud}/>
      </div>
    );
  }
}

class BoxInwest extends React.Component{
  render(){
    if(this.props.boxi == '001'){
      return(
        <BoxInwestPoz pr='mieszkania' kname='Mieszkania' time='30' krzemP='50' stalP='25' uranP='0' mocP='20'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startBud= {this.props.startBud}/>
      );
    } else if(this.props.boxi == '011'){
      return(
        <BoxInwestPoz pr='magazyny' kname='Magazyny' time='20' krzemP='150' stalP='100' uranP='0' mocP='20'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startBud= {this.props.startBud}/>
      );
    } else if(this.props.boxi == '021'){
      return(
        <BoxInwestPoz pr='fabryki' kname='Fabryki' time='50' krzemP='100' stalP='200' uranP='50' mocP='25'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startBud= {this.props.startBud}/>
      );
    } else if(this.props.boxi == '031'){
      return(
        <BoxInwestPoz pr='ladowiska' kname='Lądowiska' time='60' krzemP='300' stalP='80' uranP='5' mocP='30'
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
          startBud= {this.props.startBud}/>
      );
    } return(
        <div className='boxBoxIZa'>
          <p><b>Wybuduj więcej budynków by twoja kolonia się rozrastała!!</b></p>
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

class MenuInwest extends React.Component{
  render(){
    return(
      <div className='menuMenu'>
        <ButtonMenu name='001' kname='Mieszkania' menui= {this.props.menui} />
        <ButtonMenu name='011' kname='Magazyny' menui= {this.props.menui} />
        <ButtonMenu name='021' kname='Fabryki' menui= {this.props.menui} />
        <ButtonMenu name='031' kname='Lądowiska' menui= {this.props.menui} />
      </div>
    );
  }
}

export class Inwest extends React.Component{
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
    if(this.props.budowa === false){
      return(
        <div className='menuBoxI'>
          <MenuInwest menui= {this.menuBoxI} />
          <BoxInwest
            boxi ={this.state.boxI}
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            moc= {this.props.moc}
            startBud= {this.props.startBud}/>
        </div>
      );
    } return(
      <div className='boxBoxIZa'>
        <h1>trwa budowa!! </h1>
        <h3>Zakończy się za {this.props.budowaTime} dni.</h3>
      </div>
    );
  }
}
