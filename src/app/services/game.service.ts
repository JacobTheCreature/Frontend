import { Injectable } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-games';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  selectedGame: Game | undefined;

  constructor() { }

  getGames(): Observable<Game[]> {
    const games = of(GAMES);
    return games;
  }

  getGame(game: Game): void {
    this.selectedGame = game;
  }
}
