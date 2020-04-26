import React from 'react';
import Month from './Month';
import '../App.css';

class ScheduleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      months: [
        {year: 2020, month: 4},
        {year: 2020, month: 5},
        {year: 2020, month: 6},
      ] 
    };
  }

  componentDidMount() {
  }

  getDaysInMonth = ({month, year}) => {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
  };

  render() {
    const {months} = this.state;
    return (
      <div>
        {months.map(month =>
          <Month key={month.year + month.month} {...month} numOfDays={this.getDaysInMonth(month)} />
        )}
      </div>
    );
  }
}


export default ScheduleBook;
