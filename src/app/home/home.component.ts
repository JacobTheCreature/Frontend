import { Component, Input } from '@angular/core';
import { GameframeComponent } from "../components/gameframe/gameframe.component";
import { HeaderComponent } from "../layout/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [GameframeComponent, HeaderComponent]
})
export class HomeComponent {
}
