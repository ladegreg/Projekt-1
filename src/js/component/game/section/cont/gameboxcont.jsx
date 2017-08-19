import React from "react";

import {Inwest} from './modul/inwest.jsx';
import {Produ} from './modul/produ.jsx';
import {Wyprawy} from './modul/wyprawy.jsx'
import {Budynki} from './modul/budynki.jsx';

export class GameBoxCont extends React.Component{
  render(){
    if(this.props.box == '00'){
      return(
        <div className='gameboxcont'>
        <Inwest
          krzem= {this.props.krzem}
          stal= {this.props.stal}
          uran= {this.props.uran}
          moc= {this.props.moc}
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
            moc= {this.props.moc}
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
            wyprawaWyslana= {this.props.wyprawaWyslana}/>
        </div>
      );
    } else if(this.props.box == '03'){
      return(
        <div className='gameboxcont'>
          <p>Uprawy</p>
        </div>
      );
    } else if(this.props.box == '04'){
      return(
        <div className='gameboxcont'>
          <p>Załoga</p>
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
          <p>Generator</p>
        </div>
      );
    } else if(this.props.box == '06'){
      return(
        <div className='gameboxcont'>
          <p>Magazyny</p>
        </div>
      );
    } else if(this.props.box == '07'){
      return(
        <div className='gameboxcont'>
          <p>Wydobycie</p>
        </div>
      );
    } else if(this.props.box == '08'){
      return(
        <div className='gameboxcont'>
          <p>Handel</p>
        </div>
      );
    } else if(this.props.box == '09'){
      return(
        <div className='gameboxcont'>
          <p>Raport</p>
        </div>
      );
    } return(
        <div className='gameboxcont'>
          <p><b>Star Saga</b></p>
        </div>
      );
  }
}
