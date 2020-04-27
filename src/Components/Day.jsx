import React from 'react';
import '../App.css';
import classNames from 'classnames';

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: {
        'day-header': true,
        'holiday': this.props.holiday
      }
    };
  }

  componentDidMount() {
  }

  render() {
    const {day} = this.props;
    const {headerClass} = this.state;
    return (
      <div className='day'>
        <div className={classNames(headerClass)}>{day}</div>
      </div>
    );
  }
}


export default Day;
