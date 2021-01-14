import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <a>{this.props.name}</a>
        <a>{this.props.description}</a>
        <img src={this.props.image} height={200} width={200}/>
      </div>
    );
  }
}

export default Person;
