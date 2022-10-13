import React, { Component } from 'react'
import { StoptimeModel } from '../models/StoptimeModel'
import moment from 'moment'

interface PropsType {
  stoptime: StoptimeModel
}

interface ReadableTimeObject {
  minutes: number,
  hours: number,
  minutesString: String
}

export default class StopTime extends Component<PropsType> {
  render(): JSX.Element {
    return (
      <div className='bg-white my-2 py-1 w-full lg:w-3/4'>
        <div className={(this.isLate() ? 'border-l-red-500' : 'border-l-green-600') + ' border-y-transparent border-r-transparent border-4 rounded px-2'}>
          <div className='flex flex-row py-2'>
            <div className='my-auto pr-4 pl-1'>
              <img src='/bus.svg' alt='Bus'></img>
            </div>  

            <div className='flex flex-col lg:flex-row w-full'>
              <div>
                <div>
                  {this.getBusNumber()}
                  {this.isLate() ? ` (${Math.ceil(this.getArrivalDelay() / 60)} minutes late)` : ''}
                </div>
              </div>

              <div className='flex mr-auto lg:ml-auto lg:mr-0'>
                <div className='bus-time-estimation text-sm font-bold text-gray-400'>
                  In {this.getRelativeTime()} / {this.getReadeableTime().hours}:{this.getReadeableTime().minutesString}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

  isLate(): boolean {
    return this.props.stoptime.arrivalDelay > 0;
  }

  getBusNumber(): String {
    return this.props.stoptime.trip.route.shortName;
  }

  getScheduleArrival(): number {
    return this.props.stoptime.scheduledArrival;
  }

  getArrivalDelay(): number {
    return this.props.stoptime.arrivalDelay;
  }

  getReadeableTime(): ReadableTimeObject {
    const secondsInDay = 86400;

    let seconds = this.props.stoptime.scheduledArrival % secondsInDay;
    let hours   = Math.floor(seconds / 60 / 60);
    let minutes = Math.floor((seconds - hours * 60 * 60) / 60);
  
    let minutesString: String;

    if( minutes < 10 ){
      minutesString = '0' + minutes
    } else {
      minutesString = minutes.toString();
    }
    
    return {hours, minutes, minutesString};
  }

  getRelativeTime(): String {
    return moment()
      .hours(this.getReadeableTime().hours)
      .minutes(this.getReadeableTime().minutes)
      .fromNow(true);
  }
}
