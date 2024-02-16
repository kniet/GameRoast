import {Comment} from "./comment";
import {Platform} from "./platform";

export interface Game {
  id: number;
  title: string;
  details: string;
  releaseDate: Date;
  overallScore: number;
  fileName: string;
  developer: string;
  genre: string;
  comments: Comment[];
  platforms: Platform[];
}

