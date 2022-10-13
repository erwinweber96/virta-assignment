import { StoptimeModel } from "./StoptimeModel";

export interface StopModel {
  name: String;
  stoptimesWithoutPatterns: Array<StoptimeModel>;
}
