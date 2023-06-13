import { Component, Input } from '@angular/core';
import { Story } from './stories.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public storyArray: Story[] = [
    {
      text: 'Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial.',
    },
    {
      text: 'Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.',
    },
    { text: 'El héroe decidió atravesar la puerta que le llevaba a casa' },
    {
      text: 'Mientras tanto, otras heroes no tuvieron tanta suerte en su elección...',
    },
  ];

  mostrarEscena : boolean = false


  
}
