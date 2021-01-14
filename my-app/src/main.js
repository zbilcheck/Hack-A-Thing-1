import React from 'react';
import Person from './Person';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import tophat_urie from "./tophat_urie.jpg";
import Hershel from "./Hershel.jpg";
import urie from './Urie.jpg';
import tophat_urie from "./tophat_urie.jpg"


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hersh: false,
      urie: false,
      zach: false,
    }
  }

  UriePress = () => {
    this.setState((prevState) => ({  urie: !prevState.urie   }));
  }
  renderUrie = () => {
    if (this.state.urie) {
      return(<Person name={"Urie Choi"} description={"I'm Urie."} image={urie}></Person>);    }
  }

  HershPress = () => {
    this.setState((prevState) => ({  hersh: !prevState.hersh   }));
  }
  renderHersh = () => {
    if (this.state.hersh) {
      return(<Person name={"Hershel Wathore"} description={"Chilling"} image={Hershel}></Person>);
    }
  }

  ZachPress = () => {
    this.setState((prevState) => ({  zach: !prevState.zach   }));
  }
  renderZach = () => {
    if (this.state.zach) {
      return(<Person name={"Zachary Bilcheck"} description={"I'm Urie with a tophat."} image={tophat_urie}></Person>);
    }
  }

  render() {
    return (
      <div>
        <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} onPress={this.UriePress}>Urie</AwesomeButton>
        {this.renderUrie()}
        <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} onPress={this.HershPress}>Hershel</AwesomeButton>
        {this.renderHersh()}
        <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} onPress={this.ZachPress}>Zach</AwesomeButton>
        {this.renderZach()}
      </div>
    );
  }

}

export default Main;
