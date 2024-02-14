import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../models/game";

const GAME_API = 'http://localhost:8080/api/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {
  }


  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(GAME_API + '/create_game',
      game);
  }

  updateGame(gameId: number, game: Game): Observable<Game> {
    return this.http.put<Game>(GAME_API + `update_game/${gameId}`,
      {game})
  }

  deleteGame(gameId: number): Observable<any> {
    return this.http.delete<any>(GAME_API + `/delete_game/${gameId}`);
  }

  getGameById(gameId: number): Observable<Game> {
    return this.http.get<Game>(GAME_API + `/game/${gameId}`);
  }


  getAllGames(title: string): Observable<Game[]> {
    return this.http.get<Game[]>(GAME_API + '/games',
      {params: {title: title}});
  }

  getAllGamesByPlatforms(platformName: string): Observable<Game[]> {
    return this.http.get<Game[]>(GAME_API + 'games_by_platform',
      {params: {platformName: platformName}})
  }
}
