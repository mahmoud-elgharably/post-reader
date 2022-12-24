import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-zoo-animal',
  templateUrl: './zoo-animal.component.html',
  styleUrls: ['./zoo-animal.component.css']
})
export class ZooAnimalComponent {
  @Input() animal: Animal;
  @Output() liked: EventEmitter<Animal> = new EventEmitter();

  constructor() {
    this.animal = {
      id: 0,
      name: '',
      fed: false
    }
  }


}
