import {User} from "./user";
import {Game} from "./game";

export class Comment {
  id: number;
  opinion: string;
  score: number;
  opinionDate: Date;
  user: User;
  game: Game;
}
