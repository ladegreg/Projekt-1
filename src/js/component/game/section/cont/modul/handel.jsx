import React from "react";

class BoxTabRBat extends React.Component{
  render(){
    if(this.props.kname === 'Surowce'){
      if(this.props.colB > 0){
        if((this.props.magazyn + this.props.ile) <= this.props.magazynyPojemnosc || this.props.ile <= this.props.colB){
          return(
            <button className='buttonMenuMenu'>{this.props.batName}</button>
          );
        } else {
          return(
            <button className='buttonMenuMenu'>Za dużo</button>
          );
        }
      } else {
        return(
          <button className='buttonMenuMenu'>{this.props.batName}</button>
        );
      }
    } else if(this.props.kname === 'Maszyny'){
    return(
      null
    );
  } else if(this.props.kname === 'Ludzie'){
  return(
    null
  );
}
  }
}


class BoxTabR extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      batName: ' '
    }
    if(this.props.kname === 'Ludzie'){
      if(this.props.colB > 0){
        this.state ={
          batName: 'Zwerbuj'
        }
      } else {
        this.state = {
          batName: 'Zwolnij'
        }
      }
    } else {
    if(this.props.colB > 0){
      this.state = {
        batName: 'Kupuj'
      }
    } else {
      this.state = {
        batName: 'Sprzedaj'
      }
    }}
  }

  render(){

    return(
      <tr>
        <td>{this.props.pozA}:</td>
        <td>{this.props.colA}</td>
        <td>{this.props.colB}</td>
        <td>{this.props.colC}</td>
        <td><input type='text' onChange={this.props.tranzakcja}/>
        <BoxTabRBat
          batName={this.state.batName}
          kname={this.props.kname}
          pozA={this.props.pozA}
          colA={this.props.colA}
          colB={this.props.colB}
          colC={this.props.colC}
          magazyn={this.props.magazyn}
          magazynyPojemnosc= {this.props.magazynyPojemnosc}
        /></td>
      </tr>
    )
  }
}

class BoxHandelPozS extends React.Component{
  render(){
    return(
      <div className='boxBoxI'>
        <h1>{this.props.kname}</h1>
        <table>
          <tbody>
          <tr>
            <td></td><td>Baza</td><td>Statek</td><td>Cena</td>
          </tr>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozA}
            colA= {this.props.krzem}
            colB={this.props.krzemStatek}
            colC={this.props.krzemStCena}
            magazyn={this.props.magazyn}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            ile={this.props.ile}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozB}
            colA= {this.props.stal}
            colB={this.props.stalStatek}
            colC={this.props.stalStCena}
            magazyn={this.props.magazyn}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            ile={this.props.ile}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozC}
            colA= {this.props.uran}
            colB={this.props.uranStatek}
            colC={this.props.uranStCena}
            magazyn={this.props.magazyn}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            ile={this.props.ile}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozD}
            colA= {this.props.zywnosc}
            colB={this.props.zywnoscStatek}
            colC={this.props.zywnoscStCena}
            magazyn={this.props.magazyn}
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
            ile={this.props.ile}/>
        </tbody>
      </table>
        {/*<label>krzem:</label>
        <input type='text' onChange={this.kalkbud}/>
         <h3>Czas budowy: {this.props.time * this.state.ile} dni</h3>
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

class BoxHandelPozM extends React.Component{
  render(){
    return(
      <div className='boxBoxI'>
        <h1>{this.props.kname}</h1>
        <table>
          <tbody>
          <tr>
            <td></td><td>Baza</td><td>Statek</td><td>Cena</td>
          </tr>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozA}
            colA= {this.props.robot1}
            colB={this.props.robot1Statek}
            colC={this.props.robot1StCena}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozB}
            colA= {this.props.robot2}
            colB={this.props.robot2Statek}
            colC={this.props.robot2StCena}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozC}
            colA= {this.props.generator}
            colB={this.props.generatorStatek}
            colC={this.props.generatorStCena}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozD}
            colA= {this.props.samolot}
            colB={this.props.samolotStatek}
            colC={this.props.samolotStCena}/>
        </tbody>
      </table>
        {/*<label>krzem:</label>
        <input type='text' onChange={this.kalkbud}/>
         <h3>Czas budowy: {this.props.time * this.state.ile} dni</h3>
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

class BoxHandelPozL extends React.Component{
  render(){
    return(
      <div className='boxBoxI'>
        <h1>{this.props.kname}</h1>
        <table>
          <tbody>
          <tr>
            <td></td><td>Baza</td><td>Statek</td><td>Cena</td>
          </tr>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozA}
            colA= {this.props.kolonisci}
            colB={this.props.kolonisciStatek}
            colC={this.props.cenaBiletu}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozB}
            colA= {this.props.naukowcy}
            colB={this.props.naukowcyStatek}
            colC={this.props.cenaBiletu}/>
          <BoxTabR
            tranzakcja= {this.props.tranzakcja}
            kname={this.props.kname}
            pozA={this.props.pozC}
            colA= {this.props.zolnierz}
            colB={this.props.zolnierzStatek}
            colC={this.props.cenaBiletu}/>
        </tbody>
      </table>
        {/*<label>krzem:</label>
        <input type='text' onChange={this.kalkbud}/>
         <h3>Czas budowy: {this.props.time * this.state.ile} dni</h3>
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
  constructor(props) {
    super(props);
    this.state = {
      ile: 0
    }
  }

  tranzakcja = e => {
    e.preventDefault();
    this.setState({
      ile: e.target.value
    })
  }
  render(){
    if(this.props.boxi == '0013'){
      return(
        <BoxHandelPozS kname='Surowce'
          pozA='Krzem' pozB='Stal' pozC='Uran' pozD='Żywność'
          tranzakcja= {this.tranzakcja}
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
          magazyn={this.props.krzem+this.props.stal+this.props.uran+this.props.zywnosc}
          magazynyPojemnosc= {this.props.magazynyPojemnosc}
          ile={this.state.ile}/>
      );
    } else if(this.props.boxi == '0113'){
      return(
        <BoxHandelPozM kname='Maszyny'
          pozA='Robot1' pozB='robot2' pozC='generator' pozD='samolot'
          tranzakcja= {this.tranzakcja}
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
          samolot= {this.props.samolot}/>
      );
    } else if(this.props.boxi == '0213'){
      return(
        <BoxHandelPozL kname='Ludzie'
          pozA='Koloniści' pozB='Naukowcy' pozC='Żolnierz'
          tranzakcja= {this.tranzakcja}
          kolonisciStatek={this.props.kolonisciStatek}
          cenaBiletu={this.props.cenaBiletu}
          naukowcyStatek={this.props.naukowcyStatek}
          zolnierzStatek={this.props.zolnierzStatek}
          kolonisci= {this.props.kolonisci}
          naukowcy= {this.props.naukowcy}
          zolnierz= {this.props.zolnierz}/>
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
        <div>
        <div className='boxBoxPod'>Statek odleci za około {this.props.statekPobyt} dni!</div>
        <div className='menuBoxI'>
          <MenuHandel menui= {this.menuBoxI} />
          <BoxHandel
            boxi ={this.state.boxI}
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
            magazynyPojemnosc= {this.props.magazynyPojemnosc}
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
            kolonisci= {this.props.kolonisci}
            naukowcy= {this.props.naukowcy}
            zolnierz= {this.props.zolnierz}/>
        </div>
      </div>
      );
    } return(
      <div className='boxBoxI'>
        <h1>Brak statku na lądowisku!</h1>
        <h2>Następny statek przyleci za około {this.props.statekZa} dni!</h2>
      </div>
    );
  }
}
