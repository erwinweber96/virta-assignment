export interface StoptimeModel {
  scheduledArrival: number;
  arrivalDelay: number;
  trip: {
    route: {
      shortName: String;
    }
  }
}
