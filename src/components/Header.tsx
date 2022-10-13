import React, { Component } from 'react'
import moment from 'moment'

interface HeaderProps {
  //
}

interface HeaderState {
  clock: String
}

export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      clock: moment().format('H:mm')
    };
  }

  setClock() {
    this.setState({
      clock: moment().format('H:mm')
    });
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setClock();
    }, 1000);
  }

  render(): JSX.Element {
    return (
      <div className="header ">
        <div className="flex flex-wrap mb-10">
          <img src="/virta.svg" className='order-1' alt='Virta'></img>
          <div className="text-xl font-bold ml-0 lg:ml-24 mt-20 lg:my-auto lg:basis-auto basis-full order-last lg:order-2">Buses arriving to</div>
          <div className="font-bold ml-auto text-base lg:text-5xl order-3" data-testid='clock'>
            {this.state.clock}
          </div>
        </div>
      </div>      
    )
  }
}
