import {User} from "./user";

export class Comment {
  id: number;
  opinion: string;
  score: number;
  opinionDate: Date;
  user: User;
}
