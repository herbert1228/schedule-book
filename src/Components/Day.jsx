import React from 'react';
import '../App.css';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }

  componentDidMount() {
  }

  render() {
    const {day} = this.props;
    return (
      <div className='day'>
        {day}
      </div>
    );
  }
}


export default Day;
