import { gql } from "@apollo/client";

export const GET_BUS_STOPS = gql`
query ($busStopId: String!) {
  stop(id: $busStopId) {
    name
    stoptimesWithoutPatterns {
      scheduledArrival
      arrivalDelay
      trip {
        route {
          shortName
        }
      }
    }
  }  
}
`