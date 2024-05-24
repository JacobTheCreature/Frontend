import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameUpdateService {
  private gameUpdateSubject = new Subject<void>();

  gameUpdate$ = this.gameUpdateSubject.asObservable();

  emitGameUpdate(): void {
    this.gameUpdateSubject.next();
  }

  private searchQuery = new BehaviorSubject<string>('');
  currentSearchQuery = this.searchQuery.asObservable();

  updateSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  constructor() { }
}
