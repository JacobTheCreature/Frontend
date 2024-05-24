import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../game';
import { CommonModule, NgFor } from '@angular/common';
import { GameUpdateService } from '../../services/game-update.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']  // Fix styleUrls typo
})
export class DashboardComponent implements OnInit {

  games: Game[] = [];
  filteredList: Game[] = [];
  searchInput: string = '';

  constructor (
    private gameService: GameService,
    private gameUpdateService: GameUpdateService,
    private router: Router
  ) {}

  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => {
        this.games = games;
        this.filteredList = games; // Initialize filteredList to the full list of games
      });
  }

  updateDashboard(): void {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
      this.filteredList = games;
    });
  }

  filter(query: string): void {
    const lowerCaseQuery = query.toLowerCase();
    this.filteredList = this.games.filter(game =>
      game.title.toLowerCase().includes(lowerCaseQuery)
    );
  }

  onSelect(game: Game): void {
    this.gameService.setSelectedGame(game);
    this.gameService.emitGameChange();
    this.router.navigate([`/game-frame/${game.id}`]);
  }

  isTitleLong(title: string): boolean {
    return title.length > 20; // Adjust the threshold as needed
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(games => {
      this.games = games;
      this.filteredList = games; // Ensure filteredList is initialized with games
    });
    this.gameUpdateService.gameUpdate$.subscribe(() => {
      this.updateDashboard();
    });
    this.gameUpdateService.currentSearchQuery.subscribe(query => {
      this.filter(query);
    });
  }
}