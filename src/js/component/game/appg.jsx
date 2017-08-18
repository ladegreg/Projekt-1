import React from "react";

import {Info} from './header/info.jsx';
import {GameBoxCont} from './section/cont/gameboxcont.jsx';
import {Menu} from './section/menu/menu.jsx';
import {Foot} from './footer/gFoot.jsx';


export class StarGra extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      gracz: this.props.gracz,
      //czas gry
      box: '02', s: 1, m: 0, g: 0,
      //data gry
      dni: 1, dniii: 0, mies: 1, rok: 2053,
      // inwestycje
      mieszkania: 1, mieszkaniaPojemnosc: 50, magazyny: 1, magazynyPojemnosc: 500, fabryki: 0, ladowiska: 0, budowa: false, budowaTime: 0,
      //produkcja
      robot1: 0, robot2: 0, generator: 1, samolot: 0, produkcja: false, produkcjaTime: 0,
      //wyprawa
      wyprawaWyslana: false, kolonisciWyprawa: 0, naukowcyWyprawa: 0,
      //konto
      konto: 10000,
      //załoga
      kolonisci: 30,
      naukowcy: 10,
      zolnierz: 5,
      kolonisciBaza: 0,
      naukowcyBaza: 0,
      zolnierzBaza: 0,
      zaloga: 0,
      //magazyn
      krzem: 2000, stal: 2255, uran: 2287, moc: 2000,
    };
  }

  menuBox = e =>{
    e.preventDefault();
    this.setState({
      box: e.target.name
    });
  }

  startBud = e =>{
    let state = {
      budowaTime: e.target.dataset.time,
      budowa: !this.state.budowa,
      krzem: this.state.krzem - e.target.dataset.km,
      stal: this.state.stal - e.target.dataset.sm,
      uran: this.state.uran - e.target.dataset.um}
    let trok = parseInt(e.target.dataset.time)*2500;
    let troki = parseInt(e.target.dataset.ile);
    let trokis =  e.target.dataset.pr;
    this.setState(state);
    setTimeout(()=>this.setState({[trokis]: this.state[trokis]+troki}), trok);
  }

  startProd = e =>{
    e.preventDefault();
    let state = {
      produkcjaTime: e.target.dataset.time,
      produkcja: !this.state.produkcja,
      krzem: this.state.krzem - e.target.dataset.km,
      stal: this.state.stal - e.target.dataset.sm,
      uran: this.state.uran - e.target.dataset.um}
    let trok = parseInt(e.target.dataset.time)*2500;
    let troki = parseInt(e.target.dataset.ile);
    let trokis =  e.target.dataset.pr;
    this.setState(state);
    setTimeout(()=>this.setState({[trokis]: this.state[trokis]+troki}), trok);
  }



componentDidMount(t){
// czas gry
  this.intervalId = setInterval(() => {
    if(this.state.m == 59){
      this.setState({
        g: this.state.g + 1,
        m: this.statem = 0
      });
    }
    if(this.state.s == 59){
      this.setState({
        m: this.state.m + 1,
      });
    }
    this.setState({
      s: this.state.s < 59 ? this.state.s + 1 : 0
    });
  }, 1000);
// Zmiana daty
  this.intervalId = setInterval(() => {
    this.setState({
      dniii: 28,
    });
    if(this.state.mies === 1 || this.state.mies === 3 || this.state.mies === 5 || this.state.mies === 7 || this.state.mies === 8 || this.state.mies === 10 || this.state.mies === 12){
      this.setState({
        dniii: 31,
      });
    }
    if (this.state.mies == 4 || this.state.mies == 6 || this.state.mies == 9 || this.state.mies == 11){
      this.setState({
        dniii: 30,
      });
    }
    if(this.state.mies == 2 && this.state.rok % 4 == 0 ){
      this.setState({
        dniii: 29,
      });
    }
      if(this.state.mies == 12){
          this.setState({
            rok: this.state.rok + 1,
            mies: this.state.mies = 1
          });
        }
        if(this.state.dni == this.state.dniii){
          this.setState({
            mies: this.state.mies + 1,
          });
        }
    this.setState({
      dni: this.state.dni < this.state.dniii ? this.state.dni + 1 : 1
    });
  }, 2500);

  this.intervalId = setInterval((z) => {
    if(this.state.budowa === true){
      this.setState({
        budowaTime: this.state.budowaTime === 0 ? this.state.budowa = false : this.state.budowaTime - 1
      });
    }
  }, 2500);

  this.intervalId = setInterval((w) => {
    if(this.state.produkcja === true){
      this.setState({
        produkcjaTime: this.state.produkcjaTime === 1 ? this.state.produkcja = false : this.state.produkcjaTime - 1
      });
    }
  }, 2500);
}

  render(){
    return(
      <Contyner
        gracz= {this.state.gracz}
        box= {this.state.box}
        konto= {this.state.konto}
        mieszkania= {this.state.mieszkania}
        mieszkaniaPojemnosc= {this.state.mieszkaniaPojemnosc}
        magazyny= {this.state.magazyny}
        magazynyPojemnosc= {this.state.magazynyPojemnosc}
        fabryki= {this.state.fabryki}
        ladowiska= {this.state.ladowiska}
        s= {this.state.s}
        m= {this.state.m}
        g= {this.state.g}
        dni= {this.state.dni}
        mies= {this.state.mies}
        rok= {this.state.rok}
        zaloga= {this.state.zaloga}
        krzem= {this.state.krzem}
        stal= {this.state.stal}
        uran= {this.state.uran}
        moc= {this.state.moc}
        budowa={this.state.budowa}
        budowaTime={this.state.budowaTime}
        menu= {this.menuBox}
        startBud= {this.startBud}
        produkcja={this.state.produkcja}
        produkcjaTime={this.state.produkcjaTime}
        startProd= {this.startProd}
        wyprawaWyslana= {this.state.wyprawaWyslana}
        kolonisci= {this.state.kolonisci}/>
    );
  }
}

class Contyner extends React.Component{
  render(){
    return(
      <div className='container'>
        <header>
          <Info
            zaloga= {this.props.zaloga}
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            moc= {this.props.moc}/>
        </header>
        <section className='sections'>
          <Menu menu= {this.props.menu} />
          <GameBoxCont
            box ={this.props.box}
            mieszkania= {this.props.mieszkania}
            mieszkaniaPojemnosc= {this.props.mieszkaniaPojemnosc}
            magazyny= {this.props.magazyny}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            fabryki= {this.props.fabryki}
            ladowiska= {this.props.ladowiska}
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            moc= {this.props.moc}
            budowa={this.props.budowa}
            budowaTime={this.props.budowaTime}
            startBud= {this.props.startBud}
            produkcja={this.props.produkcja}
            produkcjaTime={this.props.produkcjaTime}
            startProd= {this.props.startProd}
            kolonisci= {this.props.kolonisci}
            wyprawaWyslana= {this.props.wyprawaWyslana}/>
        </section>
        <footer>
          <Foot
            gracz= {this.props.gracz}
            konto= {this.props.konto}
            s= {this.props.s}
            m= {this.props.m}
            g= {this.props.g}
            dni= {this.props.dni}
            mies= {this.props.mies}
            rok= {this.props.rok}/>
        </footer>
      </div>
    );
  }
}
