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
      mieszkania: 1, mieszkaniaPojemnosc: 50, magazyny: 1, magazynyPojemnosc: 50000, fabryki: 0, ladowiska: 10, budowa: false, budowaTime: 0,
      //produkcja
      robot1: 5, robot2: 4, generator: 1, samolot: 3, produkcja: false, produkcjaTime: 0,
      //wyprawa
      wyprawaWyslana: false, wyprawaTime: 0, kolonisciWyprawa: 0, naukowcyWyprawa: 0, zolnierzWyprawa: 0,
      //uprawa
      uprawaWyslana: false, uprawaTime: 0, kolonisciUprawa: 0,
      //złoża
      krzemWyd: 33330, stalWyd: 33330, uranWyd: 333330, krzemWydMin: 0,stalWydMin: 0, uranWydMin: 0,
      //konto
      konto: 10000, mocWolna: 0, mocBud: 0, mocProd: 0,
      //załoga
      kolonisci: 60, naukowcy: 40, zolnierz: 5, kolonisciBaza: 60, naukowcyBaza: 40, zolnierzBaza: 5,
      //magazyn
      krzem: 2000, stal: 2255, uran: 2287, zywnosc: 2000,
      //handel
      statek: false, statekPobyt: 131, statekZa: 1,
      krzemStatek: 0, krzemStCena: 0, stalStatek: 0, stalStCena: 0, uranStatek: 0, uranStCena: 0, zywnoscStatek: 0, zywnoscStCena: 0,
      robot1Statek: 0, robot1StCena: 0, robot2Statek: 0, robot2StCena: 0, generatorStatek: 1, generatorStCena: 1, samolotStatek: 0, samolotStCena: 0,
      cenaBiletu: 0, kolonisciStatek: 0, naukowcyStatek: 0, zolnierzStatek: 0,
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
      mocBud: parseInt(e.target.dataset.mw)}
    let trok = parseInt(e.target.dataset.time)*2500;
    let troki = parseInt(e.target.dataset.ile);
    let trokiM = parseInt(e.target.dataset.um);
    let trokis =  e.target.dataset.pr;
    this.setState(state);
    setTimeout(()=>this.setState({[trokis]: this.state[trokis]+troki}), trok);
    setTimeout(()=>this.startBudMoc(), trok);
  }
  startBudMoc = e =>{
    this.setState({
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
      mocProd: 0
    });
  }

  startWyprawa = e =>{
    e.preventDefault();
    let state = {
      wyprawaTime: e.target.dataset.dniwyprawy,
      wyprawaWyslana: !this.state.wyprawaWyslana,
      kolonisciBaza: this.state.kolonisciBaza - e.target.dataset.kolbazz,
      kolonisciWyprawa: parseInt(e.target.dataset.kolbazz),
      naukowcyBaza: this.state.naukowcyBaza - e.target.dataset.naubazz,
      naukowcyWyprawa: parseInt(e.target.dataset.naubazz)
    }
    this.setState(state);
    let trok = parseInt(e.target.dataset.dniwyprawy)*2500;
    let kolBazlet = parseInt(e.target.dataset.kolbazz);
    let nauBazlet = parseInt(e.target.dataset.naubazz);
    setTimeout(()=>this.startWyprBaz(), trok);
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
  startWyprBaz = e =>{
    this.setState({
      kolonisciBaza: this.state.kolonisciBaza + this.state.kolonisciWyprawa,
      kolonisciWyprawa: 0,
      naukowcyBaza: this.state.naukowcyBaza + this.state.naukowcyWyprawa,
      naukowcyWyprawa: 0
    });
  }

  startUprawa = e =>{
    e.preventDefault();
    let state = {
      uprawaTime: e.target.dataset.dniuprawy,
      uprawaWyslana: !this.state.uprawaWyslana,
      kolonisciBaza: this.state.kolonisciBaza - e.target.dataset.kolbazz,
      kolonisciUprawa: parseInt(e.target.dataset.kolbazz)
    }
    this.setState(state);
    let trok = parseInt(e.target.dataset.dniuprawy)*2500;
    let kolBazlet = parseInt(e.target.dataset.kolbazz);
    setTimeout(()=>this.startWyprBaz(), trok);
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
    } else setTimeout(()=>this.setState({
      zywnosc: this.state.zywnosc + Math.floor(Math.random()*ggg*100)
    }), trok);
  }
  startUpraBaz = e =>{
    this.setState({
      kkolonisciBaza: this.state.kolonisciBaza + this.state.kolonisciUprawa,
      kolonisciUprawa: 0
    });
  }

  startWydobywaj = e =>{
    e.preventDefault();
    let state = {
      krzemWydMin: parseInt(e.target.dataset.krzemwydmin),
      stalWydMin: parseInt(e.target.dataset.stalwydmin),
      uranWydMin: parseInt(e.target.dataset.uranwydmin)}
    this.setState(state);
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
  this.intervalId = setInterval((e) => {
    if(this.state.krzemWyd < this.state.krzemWydMin){
      this.setState({
        krzemWydMin:  Math.round(this.state.krzemWydMin/2)
    });
  } else if(this.state.krzemWydMin > 0 && this.state.krzemWyd > 0){
      let gg = {
        krzem: this.state.krzem + this.state.krzemWydMin,
        krzemWyd: this.state.krzemWyd - this.state.krzemWydMin
      }
      this.setState(gg);
    }
  }, 2500);
  this.intervalId = setInterval((e) => {
    if(this.state.stalWyd < this.state.stalWydMin){
      this.setState({
        stalWydMin:  Math.round(this.state.stalWydMin/2)
    });
  } else if(this.state.stalWydMin > 0 && this.state.stalWyd > 0){
      let gg = {
        stal: this.state.stal + this.state.stalWydMin,
        stalWyd: this.state.stalWyd - this.state.stalWydMin
      }
      this.setState(gg);
    }
  }, 2500);
  this.intervalId = setInterval((e) => {
    if(this.state.uranWyd < this.state.uranWydMin){
      this.setState({
        uranWydMin:  Math.round(this.state.uranWydMin/2)
    });
  } else if(this.state.uranWydMin > 0 && this.state.uranWyd > 0){
      let gg = {
        uran: this.state.uran + this.state.uranWydMin,
        uranWyd: this.state.uranWyd - this.state.uranWydMin
      }
      this.setState(gg);
    }
  }, 2500);
  // przylot statku
  this.intervalId = setInterval((e) => {
    if(this.state.statek === false){
      this.setState({
        statekZa: this.state.statekZa - 1
      });
      if(this.state.statekZa === 0){
        let gg = {
          statekZa: Math.floor(Math.random()*(365-20)) + 20,
          krzemStatek: Math.floor(Math.random()*250*(this.state.ladowiska+Math.random()) - 125*(this.state.ladowiska+Math.random())),
          krzemStCena: Math.floor(Math.random()*10) + 15,
          stalStatek: Math.floor(Math.random()*126*(this.state.ladowiska+Math.random()) - 63*(this.state.ladowiska+Math.random())),
          stalStCena: Math.floor(Math.random()*15) + 20,
          uranStatek: Math.floor(Math.random()*64*(this.state.ladowiska+Math.random()) - 32*(this.state.ladowiska+Math.random())),
          uranStCena: Math.floor(Math.random()*120) + 85,
          zywnoscStatek: Math.floor(Math.random()*250*(this.state.ladowiska+Math.random()) - 125*(this.state.ladowiska+Math.random())),
          zywnoscStCena: Math.floor(Math.random()*20) + 10,
          robot1Statek: Math.floor(Math.random()*12*(this.state.ladowiska+Math.random()) - 6*(this.state.ladowiska+Math.random())),
          robot1StCena: Math.floor(Math.random()*(1200-799)) + 799,
          robot2Statek: Math.floor(Math.random()*18*(this.state.ladowiska+Math.random()) - 8*(this.state.ladowiska+Math.random())),
          robot2StCena: Math.floor(Math.random()*(1990-980)) + 980,
          generatorStatek: Math.floor(Math.random()*12*(this.state.ladowiska+Math.random()) - 6*(this.state.ladowiska+Math.random())),
          generatorStCena: Math.floor(Math.random()*(6800-4500)) + 4500,
          samolotStatek: Math.floor(Math.random()*10*(this.state.ladowiska+Math.random()) - 5*(this.state.ladowiska+Math.random())),
          samolotStCena: Math.floor(Math.random()*(5400-2700)) + 2700,
          kolonisciStatek: Math.floor(Math.random()*12*(this.state.ladowiska+Math.random()) - 6*(this.state.ladowiska+Math.random())),
          naukowcyStatek: Math.floor(Math.random()*9*(this.state.ladowiska+Math.random()) - 5*(this.state.ladowiska+Math.random())),
          zolnierzStatek: Math.floor(Math.random()*5*(this.state.ladowiska+Math.random()) - 3*(this.state.ladowiska+Math.random())),
          cenaBiletu: Math.floor(Math.random()*(26-22)) + 22,
          statek: true
        }
        this.setState(gg);
      }
    } else {
      // console.log(Math.floor(Math.random()*3000*(this.state.ladowiska+Math.random()) - 1500*(this.state.ladowiska+Math.random())));
      this.setState({
        statekPobyt: this.state.statekPobyt - 1
      });
      if(this.state.statekPobyt === 0){
        let gg = {
          statekPobyt: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
          statek: false
        }
        this.setState(gg);
      }
    }
    }, 2500);
  }

  render(){
    return(
      <Contyner
        statek= {this.state.statek}
        statekPobyt= {this.state.statekPobyt}
        statekZa= {this.state.statekZa}
        krzemStatek={this.state.krzemStatek}
        krzemStCena={this.state.krzemStCena}
        stalStatek={this.state.stalStatek}
        stalStCena={this.state.stalStCena}
        uranStatek={this.state.uranStatek}
        uranStCena={this.state.uranStCena}
        zywnoscStatek={this.state.zywnoscStatek}
        zywnoscStCena={this.state.zywnoscStCena}
        robot1Statek={this.state.robot1Statek}
        robot1StCena={this.state.robot1StCena}
        robot2Statek={this.state.robot2Statek}
        robot2StCena={this.state.robot2StCena}
        generatorStatek={this.state.generatorStatek}
        generatorStCena={this.state.generatorStCena}
        samolotStatek={this.state.samolotStatek}
        samolotStCena={this.state.samolotStCena}
        kolonisciStatek={this.state.kolonisciStatek}
        cenaBiletu={this.state.cenaBiletu}
        naukowcyStatek={this.state.naukowcyStatek}
        zolnierzStatek={this.state.zolnierzStatek}
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
        zaloga= {this.state.kolonisci+this.state.naukowcy+this.state.zolnierz}
        krzem= {this.state.krzem}
        stal= {this.state.stal}
        uran= {this.state.uran}
        zywnosc= {this.state.zywnosc}
        robot1= {this.state.robot1}
        robot2= {this.state.robot2}
        generator= {this.state.generator}
        samolot= {this.state.samolot}
        moc= {this.state.generator*2000}
        mocWolna= {(this.state.generator*2000)-this.state.mocBud-this.state.mocProd}
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
        generator= {this.state.generator}
        startWydobywaj= {this.startWydobywaj}
        krzemWydMin= {this.state.krzemWydMin}
        stalWydMin= {this.state.stalWydMin}
        uranWydMin={this.state.uranWydMin}/>
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
            statek= {this.props.statek}
            statekPobyt= {this.props.statekPobyt}
            statekZa= {this.props.statekZa}
            krzemStatek={this.props.krzemStatek}
            krzemStCena={this.props.krzemStCena}
            stalStatek={this.props.stalStatek}
            stalStCena={this.props.stalStCena}
            uranStatek={this.props.uranStatek}
            uranStCena={this.props.uranStCena}
            zywnoscStatek={this.props.zywnoscStatek}
            zywnoscStCena={this.props.zywnoscStCena}
            robot1Statek={this.props.robot1Statek}
            robot1StCena={this.props.robot1StCena}
            robot2Statek={this.props.robot2Statek}
            robot2StCena={this.props.robot2StCena}
            generatorStatek={this.props.generatorStatek}
            generatorStCena={this.props.generatorStCena}
            samolotStatek={this.props.samolotStatek}
            samolotStCena={this.props.samolotStCena}
            robot1= {this.props.robot1}
            robot2= {this.props.robot2}
            generator= {this.props.generator}
            samolot= {this.props.samolot}
            kolonisciStatek={this.props.kolonisciStatek}
            cenaBiletu={this.props.cenaBiletu}
            naukowcyStatek={this.props.naukowcyStatek}
            zolnierzStatek={this.props.zolnierzStatek}
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
            zywnosc= {this.props.zywnosc}
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
            startUprawa= {this.props.startUprawa}
            generator= {this.props.generator}
            startWydobywaj= {this.props.startWydobywaj}
            krzemWydMin= {this.props.krzemWydMin}
            stalWydMin= {this.props.stalWydMin}
            uranWydMin={this.props.uranWydMin}/>
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
