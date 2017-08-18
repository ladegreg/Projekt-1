import React from "react";

import {ButtonMenu} from './gButton.jsx';

export class Menu extends React.Component{
  render(){

    return(
      <div className='gMenu'>
        <ButtonMenu name='00' kname='Inwestycje' menu= {this.props.menu} />
        <ButtonMenu name='01' kname='Produkcja' menu= {this.props.menu} />
        <ButtonMenu name='02' kname='Wyprawy' menu= {this.props.menu} />
        <ButtonMenu name='03' kname='Uprawy' menu= {this.props.menu} />
        <ButtonMenu name='04' kname='Załoga' menu= {this.props.menu} />
        <ButtonMenu name='10' kname='Budynki' menu= {this.props.menu} />
        <ButtonMenu name='05' kname='Generator' menu= {this.props.menu} />
        <ButtonMenu name='06' kname='Magazyny' menu= {this.props.menu} />
        <ButtonMenu name='07' kname='Wydobycie' menu= {this.props.menu} />
        <ButtonMenu name='08' kname='Handel' menu= {this.props.menu} />
        <ButtonMenu name='09' kname='Raport' menu= {this.props.menu} />
      </div>
    );
  }
}
