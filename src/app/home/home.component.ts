import { Component, Input } from '@angular/core';
import { GameframeComponent } from "../components/gameframe/gameframe.component";
import { HeaderComponent } from "../layout/header/header.component";
import { GameService } from '.././services/game.service';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [GameframeComponent, HeaderComponent, DashboardComponent]
})
export class HomeComponent {
    constructor(private gameService: GameService) {}
}
