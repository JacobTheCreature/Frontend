import { Component, EventEmitter, Output } from '@angular/core';
import { DropdownComponent } from "../../components/dropdown/dropdown.component";
import { Game } from '../../game';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [DropdownComponent]
})
export class HeaderComponent {
  @Output() gameSelected = new EventEmitter<Game>();
  @Output() add = new EventEmitter<Game>();
  @Output() edit = new EventEmitter<Game>();
  @Output() delete = new EventEmitter<Game>();

  onGameSelected($event: Game) {
    this.gameSelected.emit($event);
  }
}
