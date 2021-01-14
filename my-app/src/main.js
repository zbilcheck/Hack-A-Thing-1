import React from 'react';
import Person from './Person';
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hersh: false,
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
        <AwesomeButton type="primary" cssModule={AwesomeButtonStyles} onPress={this.HershPress}>Hershel</AwesomeButton>
        {this.renderHersh()}
      </div>
    );
  }

}

export default Main;
