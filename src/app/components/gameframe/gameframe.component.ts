import { Component, Input } from '@angular/core';
import { Game } from '../../game';
import { GameService } from '../../services/game.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-gameframe',
  standalone: true,
  imports: [],
  templateUrl: './gameframe.component.html',
  styleUrl: './gameframe.component.css'
})
export class GameframeComponent {
  @Input() game?: Game;

  constructor(public gameService: GameService, private sanitizer: DomSanitizer) {}

  getSanitizedUrl(url: string | undefined): SafeResourceUrl | undefined {
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : undefined;
  }
}
