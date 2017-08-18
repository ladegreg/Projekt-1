import React from "react";

export class ButtonMenu extends React.Component{
  render(){
    return(
        <button className='buttonMenu' name={this.props.name} onClick={this.props.menu} >{this.props.kname}</button>
    );
  }
}
