import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Info">
        <a className="Name">{this.props.name}</a>
        <a className="Description">{this.props.description}</a>
        <img src={this.props.image} height={200} width={200}/>
      </div>
    );
  }
}

export default Person;
