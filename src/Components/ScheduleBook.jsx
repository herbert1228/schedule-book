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
      ],
      events: [
        {desc: 'hb', start: this.getDate(2020, 5, 18), end: this.getDate(2020, 5, 18)},
      ],
      dayEventMap: {
        [this.getDate(2020, 12, 28)]: 'hhb'
      },
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://www.1823.gov.hk/common/ical/tc.json"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(json => {
        const events = json.vcalendar[0].vevent.map(e => {
          // {dtstart: Array(2), dtend: Array(2), summary: "一月一日"}
          const desc = e.summary;
          const start = this.getDate(e.dtstart[0].substring(0, 4), e.dtstart[0].substring(4, 6), e.dtstart[0].substring(6, 8));
          const end = this.getDate(e.dtend[0].substring(0, 4), e.dtend[0].substring(4, 6), e.dtend[0].substring(6, 8));
          return {desc, start, end};
        })
        this.setState({events: [...this.state.events, ...events]}, () => {
            const dayEventMap = this.state.dayEventMap;
            this.state.events.forEach(evt => {
              for (let d = evt.start; d <= evt.end; d.setDate(d.getDate() + 1)) {
                if (!dayEventMap[d]) dayEventMap[d] = {};
                if (!dayEventMap[d].event) dayEventMap[d].event = [];
                dayEventMap[d].event = [...dayEventMap[d].event, {desc: evt.desc}]
              }
            });
            this.setState({dayEventMap}, () => console.log(this.state));
          }
        );
      })
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  getDate(year, month, day) {
    return new Date(year, month-1, day);
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
