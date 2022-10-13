import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_BUS_STOPS } from '../graphql/Queries'
import { StopModel } from '../models/StopModel';
import { StoptimeModel } from '../models/StoptimeModel';
import StopTime from './StopTime';

interface BusStopData {
    stop: StopModel
}

const defaultBusStopId = "HSL:1201110";

export default function BusStops(): JSX.Element {
    const {data, startPolling} = useQuery<BusStopData>(GET_BUS_STOPS, {
      variables: {
        busStopId: defaultBusStopId
      },
      notifyOnNetworkStatusChange: true
    });

    useEffect(() => {
      startPolling(10000);
    });

    if (!data) {
      return (<></>);
    }
  
    return (
      <div className='mx-0 lg:mx-44 mt-0 lg:mt-16'>
        <div className="text-5xl font-bold mb-12">{data.stop.name}</div>
        <div data-testid='stoptimes'>
          {
            data.stop.stoptimesWithoutPatterns.map((stoptime: StoptimeModel, i: number) => {
              return <StopTime stoptime={stoptime} key={i}></StopTime>
            })
          }
        </div>
      </div>
    )
}
