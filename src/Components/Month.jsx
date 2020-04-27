import React from 'react';
import Day from './Day';
import '../App.css';
import classNames from 'classnames';

class Month extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daysOfWeek: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
      daysBeforeMth: (new Date(this.props.year, this.props.month-1, 1)).getDay(),
      daysAfterMth: null,
    };
  }

  componentDidMount() {
    this.setState({daysAfterMth: 7 * 6 - this.props.numOfDays - this.state.daysBeforeMth}, () => 
      console.log(this.props, this.state)
      // console.log()
    );
  }

  intToArr(i) {
    return [...Array(i)]
  }

  isHoliday(year, month, day) {
    if ((new Date(year, month-1, day).getDay() === 6)) return true;

    return false;
  }

  render() {
    const { month, year, numOfDays } = this.props;
    const { daysOfWeek, daysBeforeMth, daysAfterMth } = this.state;

    return (
      <div className='month'>
        <div className='month-info-panel'>
          <div className='month-header'>
            {month} - {year}
          </div>
          <div>
            ToDo
          </div>
        </div>

        <div className='day-grid-panel'>
          {daysOfWeek.map(dayOfWeek => 
            <div className={classNames({'day-of-week': true, 'sunday': dayOfWeek === 'sun'})} key={'dayOfWeek'+dayOfWeek}>{dayOfWeek}</div>)
          }
          {this.intToArr(daysBeforeMth).map((e, i) => <div key={'empty'+i+1} className='day'></div>)}
          {this.intToArr(numOfDays).map((e, i) => <Day key={i+1} day={i+1} holiday={this.isHoliday(year, month, i)} />)}
          {this.intToArr(daysAfterMth).map((e, i) => <div key={'empty'+i+1} className='day'></div>)}
        </div>

        <div className='month-footer'>
        </div>
      </div>
    );
  }
}


export default Month;
