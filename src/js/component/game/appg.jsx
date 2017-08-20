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
      box: '09', s: 1, m: 0, g: 0,
      //data gry
      dni: 1, dniii: 0, mies: 1, rok: 2053,
      // inwestycje
      mieszkania: 1, mieszkaniaPojemnosc: 50, magazyny: 1, magazynyPojemnosc: 500, fabryki: 0, ladowiska: 0, budowa: false, budowaTime: 0,
      //produkcja
      robot1: 0, robot2: 0, generator: 1, samolot: 0, produkcja: false, produkcjaTime: 0,
      //wyprawa
      wyprawaWyslana: false, wyprawaTime: 0, kolonisciWyprawa: 0, naukowcyWyprawa: 0, zolnierzWyprawa: 0,
      //uprawa
      uprawaWyslana: false, uprawaTime: 0, kolonisciUprawa: 0,
      //złoża
      krzemWyd: 0, stalWyd: 0, uranWyd: 0,
      //konto
      konto: 10000, mocWolna: 2000, mocBud: 0, mocProd: 0,
      //załoga
      kolonisci: 60, naukowcy: 40, zolnierz: 5, kolonisciBaza: 60, naukowcyBaza: 40, zolnierzBaza: 5, zaloga: 45,
      //magazyn
      krzem: 2000, stal: 2255, uran: 2287, zywnosc: 2000
    };
  }

  menuBox = e =>{
    e.preventDefault();
    this.setState({
      box: e.target.name
    });
  }

  startBud = e =>{
    e.preventDefault();
    let state = {
      budowaTime: e.target.dataset.time,
      budowa: !this.state.budowa,
      krzem: this.state.krzem - e.target.dataset.km,
      stal: this.state.stal - e.target.dataset.sm,
      uran: this.state.uran - e.target.dataset.um,
      mocWolna: this.state.mocWolna - e.target.dataset.mw,
      mocBud: parseInt(e.target.dataset.mw)}
    let trok = parseInt(e.target.dataset.time)*2500;
    let troki = parseInt(e.target.dataset.ile);
    let trokiM = parseInt(e.target.dataset.um);
    let trokis =  e.target.dataset.pr;
    this.setState(state);
    setTimeout(()=>this.setState({[trokis]: this.state[trokis]+troki}), trok);
    setTimeout(()=>this.startBudMoc(  ), trok);
  }
  startBudMoc = e =>{
    this.setState({
      mocWolna: this.state.mocWolna + this.state.mocBud,
      mocBud: 0
    });
  }

  startProd = e =>{
    e.preventDefault();
    let state = {
      produkcjaTime: e.target.dataset.time,
      produkcja: !this.state.produkcja,
      krzem: this.state.krzem - e.target.dataset.km,
      stal: this.state.stal - e.target.dataset.sm,
      uran: this.state.uran - e.target.dataset.um,
      mocWolna: this.state.mocWolna - e.target.dataset.mw,
      mocProd: parseInt(e.target.dataset.mw)}
    let trok = parseInt(e.target.dataset.time)*2500;
    let troki = parseInt(e.target.dataset.ile);
    let trokiM = parseInt(e.target.dataset.um);
    let trokis =  e.target.dataset.pr;
    this.setState(state);
    setTimeout(()=>this.setState({[trokis]: this.state[trokis]+troki}), trok);
    setTimeout(()=>this.startProdMoc(), trok);
  }
  startProdMoc = e =>{
    this.setState({
      mocWolna: this.state.mocWolna + this.state.mocProd,
      mocProd: 0
    });
  }

  startWyprawa = e =>{
    e.preventDefault();
    let state = {
      wyprawaTime: e.target.dataset.dniwyprawy,
      wyprawaWyslana: !this.state.wyprawaWyslana,
      kolonisciBaza: this.state.kolonisciBaza - e.target.dataset.kolbazz,
      kolonisciWyprawa: e.target.dataset.kolbazz,
      naukowcyBaza: this.state.naukowcyBaza - e.target.dataset.naubazz,
      naukowcyWyprawa: e.target.dataset.naubazz
    }
    this.setState(state);
    let trok = parseInt(e.target.dataset.dniwyprawy)*2500;
    let kolBazlet = parseInt(e.target.dataset.kolbazz);
    let nauBazlet = parseInt(e.target.dataset.naubazz);
    let statez = {
      kolonisciBaza: this.state.kolonisciBaza,
      kolonisciWyprawa: 0,
      naukowcyBaza: this.state.naukowcyBaza,
      naukowcyWyprawa: 0
    }
    setTimeout(()=>this.setState(statez), trok);
    let ggg = ((kolBazlet*0.003)+(nauBazlet*0.009)*(trok/4000));
    if(ggg> 2.4){
      setTimeout(()=>this.setState({
        krzemWyd: this.state.krzemWyd + Math.floor(Math.random()*ggg*100000),
        stalWyd: this.state.stalWyd + Math.floor(Math.random()*ggg*10000),
        uranWyd: this.state.uranWyd + Math.floor(Math.random()*ggg*1000)
      }), trok);
    }else if(ggg>1.2){
      setTimeout(()=>this.setState({
        krzemWyd: this.state.krzemWyd + Math.floor(Math.random()*ggg*10000),
        stalWyd: this.state.stalWyd + Math.floor(Math.random()*ggg*1000)
      }), trok);
    } else if(ggg>0.6){
      setTimeout(()=>this.setState({
        krzemWyd: this.state.krzemWyd + Math.floor(Math.random()*ggg*1000)
      }), trok);
    }
  }

  startUprawa = e =>{
    e.preventDefault();
    let state = {
      uprawaTime: e.target.dataset.dniuprawy,
      uprawaWyslana: !this.state.uprawaWyslana,
      kolonisciBaza: this.state.kolonisciBaza - e.target.dataset.kolbazz,
      kolonisciUprawa: e.target.dataset.kolbazz
    }
    this.setState(state);
    let trok = parseInt(e.target.dataset.dniuprawy)*2500;
    let kolBazlet = parseInt(e.target.dataset.kolbazz);
    let statez = {
      kolonisciBaza: this.state.kolonisciBaza,
      kolonisciUprawa: 0
    }
    setTimeout(()=>this.setState(statez), trok);
    let ggg = ((kolBazlet*0.003)*(trok/2500));
    if(ggg> 2.4){
      setTimeout(()=>this.setState({
        zywnosc: this.state.zywnosc + Math.floor(Math.random()*ggg*300)
      }), trok);
    }else if(ggg>1.2){
      setTimeout(()=>this.setState({
        zywnosc: this.state.zywnosc + Math.floor(Math.random()*ggg*200)
      }), trok);
    } else if(ggg>0.6){
      setTimeout(()=>this.setState({
        zywnosc: this.state.zywnosc + Math.floor(Math.random()*ggg*100)
      }), trok);
    }
    console.log(ggg*1000);
    console.log(this.state.zywnosc);
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

  this.intervalId = setInterval((e) => {
    if(this.state.budowa === true){
      this.setState({
        budowaTime: this.state.budowaTime === 0 ? this.state.budowa = false : this.state.budowaTime - 1
      });
    }
  }, 2500);

  this.intervalId = setInterval((e) => {
    if(this.state.produkcja === true){
      this.setState({
        produkcjaTime: this.state.produkcjaTime === 1 ? this.state.produkcja = false : this.state.produkcjaTime - 1
      });
    }
  }, 2500);
  this.intervalId = setInterval((e) => {
    if(this.state.wyprawaWyslana === true){
      this.setState({
        wyprawaTime: this.state.wyprawaTime === 1 ? this.state.wyprawaWyslana = false : this.state.wyprawaTime - 1
      });
    }
  }, 2500);
  this.intervalId = setInterval((e) => {
    if(this.state.uprawaWyslana === true){
      this.setState({
        uprawaTime: this.state.uprawaTime === 1 ? this.state.uprawaWyslana = false : this.state.uprawaTime - 1
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
        zywnosc= {this.state.zywnosc}
        moc= {this.state.generator*2000}
        mocWolna= {this.state.mocWolna}
        budowa={this.state.budowa}
        budowaTime={this.state.budowaTime}
        menu= {this.menuBox}
        startBud= {this.startBud}
        produkcja={this.state.produkcja}
        produkcjaTime={this.state.produkcjaTime}
        startProd= {this.startProd}
        wyprawaWyslana= {this.state.wyprawaWyslana}
        kolonisci= {this.state.kolonisci}
        kolonisciBaza= {this.state.kolonisciBaza}
        kolonisciWyprawa= {this.state.kolonisciWyprawa}
        naukowcy= {this.state.naukowcy}
        naukowcyBaza= {this.state.naukowcyBaza}
        naukowcyWyprawa= {this.state.naukowcyWyprawa}
        zolnierz= {this.state.zolnierz}
        zolnierzBaza= {this.state.zolnierzBaza}
        zolnierzWyprawa= {this.state.zolnierzWyprawa}
        naukowcyBaza= {this.state.naukowcyBaza}
        zolnierzBaza= {this.state.zolnierzBaza}
        startWyprawa= {this.startWyprawa}
        wyprawaTime= {this.state.wyprawaTime}
        krzemWyd= {this.state.krzemWyd}
        stalWyd= {this.state.stalWyd}
        uranWyd= {this.state.uranWyd}
        uprawaWyslana= {this.state.uprawaWyslana}
        uprawaTime= {this.state.uprawaTime}
        kolonisciUprawa= {this.state.kolonisciUprawa}
        startUprawa= {this.startUprawa}
        />
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
            zywnosc= {this.props.zywnosc}
            moc= {this.props.mocWolna}/>
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
            mocWolna= {this.props.mocWolna}
            budowa={this.props.budowa}
            budowaTime={this.props.budowaTime}
            startBud= {this.props.startBud}
            produkcja={this.props.produkcja}
            produkcjaTime={this.props.produkcjaTime}
            startProd= {this.props.startProd}
            kolonisciBaza= {this.props.kolonisciBaza}
            naukowcyBaza= {this.props.naukowcyBaza}
            zolnierzBaza= {this.props.zolnierzBaza}
            wyprawaWyslana= {this.props.wyprawaWyslana}
            startWyprawa= {this.props.startWyprawa}
            wyprawaTime= {this.props.wyprawaTime}
            kolonisci= {this.props.kolonisci}
            kolonisciBaza= {this.props.kolonisciBaza}
            kolonisciWyprawa= {this.props.kolonisciWyprawa}
            naukowcy= {this.props.naukowcy}
            naukowcyBaza= {this.props.naukowcyBaza}
            naukowcyWyprawa= {this.props.naukowcyWyprawa}
            zolnierz= {this.props.zolnierz}
            zolnierzBaza= {this.props.zolnierzBaza}
            zolnierzWyprawa= {this.props.zolnierzWyprawa}
            krzemWyd= {this.props.krzemWyd}
            stalWyd= {this.props.stalWyd}
            uranWyd= {this.props.uranWyd}
            uprawaWyslana= {this.props.uprawaWyslana}
            uprawaTime= {this.props.uprawaTime}
            kolonisciUprawa= {this.props.kolonisciUprawa}
            startUprawa= {this.props.startUprawa}/>
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