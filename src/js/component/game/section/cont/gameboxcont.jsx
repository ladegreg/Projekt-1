import React from "react";

import {Inwest} from './modul/inwest.jsx';
import {Produ} from './modul/produ.jsx';
import {Wyprawy} from './modul/wyprawy.jsx'
import {Budynki} from './modul/budynki.jsx';
import {Zaloga} from './modul/zaloga.jsx';
import {Wydobycie} from './modul/wydobycie.jsx';
import {Uprawy} from './modul/uprawy.jsx';
import {Generator} from './modul/generator.jsx';
import {Magazyny} from './modul/magazyny.jsx';
import {Raport} from './modul/raport.jsx';
import {Handel} from './modul/handel.jsx';

export class GameBoxCont extends React.Component{
  render(){
    if(this.props.box == '00'){
      return(
        <div className='gameboxcont'>
        <Inwest
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          mocWolna= {this.props.mocWolna}
          budowa={this.props.budowa}
          budowaTime={this.props.budowaTime}
          startBud= {this.props.startBud}/>
        </div>
      );
    } else if(this.props.box == '01'){
      return(
        <div className='gameboxcont'>
          <Produ
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            mocWolna= {this.props.mocWolna}
            produkcja={this.props.produkcja}
            produkcjaTime={this.props.produkcjaTime}
            startProd= {this.props.startProd}/>
        </div>
      );
    } else if(this.props.box == '02'){
      return(
        <div className='gameboxcont'>
          <Wyprawy
            kolonisciBaza= {this.props.kolonisciBaza}
            naukowcyBaza= {this.props.naukowcyBaza}
            zolnierzBaza= {this.props.zolnierzBaza}
            wyprawaWyslana= {this.props.wyprawaWyslana}
            startWyprawa= {this.props.startWyprawa}
            wyprawaTime= {this.props.wyprawaTime}/>
        </div>
      );
    } else if(this.props.box == '03'){
      return(
        <div className='gameboxcont'>
          <Uprawy
            kolonisciBaza= {this.props.kolonisciBaza}
            uprawaWyslana= {this.props.uprawaWyslana}
            uprawaTime= {this.props.uprawaTime}
            startUprawa= {this.props.startUprawa}/>
        </div>
      );
    } else if(this.props.box == '04'){
      return(
        <div className='gameboxcont'>
          <Zaloga
            kolonisci= {this.props.kolonisci}
            kolonisciBaza= {this.props.kolonisciBaza}
            kolonisciWyprawa= {this.props.kolonisciWyprawa}
            kolonisciUprawa= {this.props.kolonisciUprawa}
            naukowcy= {this.props.naukowcy}
            naukowcyBaza= {this.props.naukowcyBaza}
            naukowcyWyprawa= {this.props.naukowcyWyprawa}
            zolnierz= {this.props.zolnierz}
            zolnierzBaza= {this.props.zolnierzBaza}
            zolnierzWyprawa= {this.props.zolnierzWyprawa}/>
        </div>
      );
    } else if(this.props.box == '10'){
      return(
        <div className='gameboxcont'>
          <Budynki
            mieszkania= {this.props.mieszkania}
            mieszkaniaPojemnosc= {this.props.mieszkaniaPojemnosc}
            magazyny= {this.props.magazyny}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            fabryki= {this.props.fabryki}
            ladowiska= {this.props.ladowiska}/>
        </div>
      );
    } else if(this.props.box == '05'){
      return(
        <div className='gameboxcont'>
          <Generator
            generator= {this.props.generator}
            mocWolna= {this.props.mocWolna}/>
        </div>
      );
    } else if(this.props.box == '06'){
      return(
        <div className='gameboxcont'>
          <Magazyny
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            zywnosc= {this.props.zywnosc}
            magazyny= {this.props.magazyny}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            />
        </div>
      );
    } else if(this.props.box == '07'){
      return(
        <div className='gameboxcont'>
        <Wydobycie
          krzemWyd= {this.props.krzemWyd}
          stalWyd= {this.props.stalWyd}
          uranWyd= {this.props.uranWyd}
          startWydobywaj= {this.props.startWydobywaj}
          krzemWydMin= {this.props.krzemWydMin}
          stalWydMin= {this.props.stalWydMin}
          uranWydMin={this.props.uranWydMin}/>
        </div>
      );
    } else if(this.props.box == '08'){
      return(
        <div className='gameboxcont'>
          <Handel
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
            krzem= {this.props.krzem}
            stal= {this.props.stal}
            uran= {this.props.uran}
            zywnosc= {this.props.zywnosc}
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
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            kolonisciStatek={this.props.kolonisciStatek}
            cenaBiletu={this.props.cenaBiletu}
            naukowcyStatek={this.props.naukowcyStatek}
            zolnierzStatek={this.props.zolnierzStatek}
            kolonisci= {this.props.kolonisci}
            naukowcy= {this.props.naukowcy}
            zolnierz= {this.props.zolnierz}/>
        </div>
      );
    } else if(this.props.box == '09'){
      return(
        <div className='gameboxcont'>
          <Raport
            budowa={this.props.budowa}
            budowaTime={this.props.budowaTime}
            produkcja={this.props.produkcja}
            produkcjaTime={this.props.produkcjaTime}
            wyprawaWyslana= {this.props.wyprawaWyslana}
            wyprawaTime= {this.props.wyprawaTime}
            uprawaWyslana= {this.props.uprawaWyslana}
            uprawaTime= {this.props.uprawaTime}/>
        </div>
      );
    } return(
        <div className='gameboxcont'>
          <p><b>Star Saga</b></p>
        </div>
      );
  }
}
