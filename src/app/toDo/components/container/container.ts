import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [CommonModule],
  templateUrl: './container.html',
  styleUrl: './container.scss'
})
export class Container {

  @Input() maxWidth = 1920
}
