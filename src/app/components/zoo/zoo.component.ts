import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { ZooService } from 'src/app/services/zoo.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent {
  animalList: Animal[] = [];
  //animalList: object[] = [];

  constructor(private zooService: ZooService) {}

  ngOnInit(): void {
    this.animalList = this.zooService.getAnimals();

/*     this.animalList = [
      {
        id: 1,
        name: "Panda",
        fed: true
      },
      {
        id: 2,
        name: "Elephant",
        fed: true
      },
      {
        id: 3,
        name: "Lion",
        fed: false
      }
    ]
 */
  }

  onLike(animal: Animal): void {
    window.alert(`I like the ${animal.name}`);
  }
}
