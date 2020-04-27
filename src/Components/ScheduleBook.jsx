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
        {year: 2020, month: 7},
        {year: 2020, month: 8},
        {year: 2020, month: 9},
        {year: 2020, month: 10},
        {year: 2020, month: 11},
        {year: 2020, month: 12},
        {year: 2021, month: 1},
        {year: 2021, month: 2},
        {year: 2021, month: 3},
        {year: 2021, month: 4},
      ] 
    };
  }

  componentDidMount() {
  }

  getDaysInMonth = ({month, year}) => {
    return new Date(year, month, 0).getDate();
  };

  render() {
    const {months} = this.state;
    return (
      <div>
        {months.map(month =>
          <Month key={''+ month.year + month.month} {...month} numOfDays={this.getDaysInMonth(month)} />
        )}
      </div>
    );
  }
}


export default ScheduleBook;
