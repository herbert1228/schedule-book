import React from 'react';
import Day from './Day';
import '../App.css';

class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { month, year, numOfDays } = this.props;
    return (
      <div className='month'>
        <div className='month-header'>
          {month} - {year}
        </div>

        <div className='day-grid-panel'>
          {[...Array(numOfDays)].map((e, i) => <Day key={i+1} day={i+1} />)}
        </div>

        <div className='month-footer'>
        </div>
      </div>
    );
  }
}


export default Month;
