import {Comment} from "./comment";
import {Platform} from "./platform";

export class Game {
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
