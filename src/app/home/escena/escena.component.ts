import { Component, Input } from '@angular/core';
import { Story } from '../stories.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent {
  @Input() storyArray: Story[] = [];

  /*   someProperty = true;
  anotherProperty = true; */

  selectedIndex: number = -1

  currentSentence: number = 0;
  prev(): void {
    if (this.currentSentence > 0) {
      this.currentSentence--;
    }
  }

  next(): void {
    if (this.currentSentence < this.storyArray.length - 1) {
      this.currentSentence++;
    }
  }
}
