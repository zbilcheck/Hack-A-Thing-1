import React from 'react';
import Person from './Person';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import urie from './Urie.jpg';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hersh: false,
      urie: false,
    }
  }

  UriePress = () => {
    this.setState((prevState) => ({  urie: !prevState.urie   }));
  }
  renderUrie = () => {
    if (this.state.urie) {
      return(<Person name={"Urie Choi"} description={"I'm Urie."} image={urie}></Person>);
    }
  }

  HershPress = () => {
    this.setState((prevState) => ({  hersh: !prevState.hersh   }));
  }
  renderHersh = () => {
    if (this.state.hersh) {
      return(<Person name={"Hershel Wathore"} description={"Chilling"} image={'logo.svg'}></Person>);
    }
  }

  render() {
    return (
      <div>
        <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} onPress={this.UriePress}>Urie</AwesomeButton>
        {this.renderUrie()}
        <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} onPress={this.HershPress}>Hershel</AwesomeButton>
        {this.renderHersh()}
      </div>
    );
  }

}

export default Main;
