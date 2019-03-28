import { Component } from '@angular/core';
import { SelectService } from './select.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  objectTypeHandler: any;
  public mockData = [
    {
      "label": "Opcja 1",
      "objectType": "Opcja 1"
    },
    {
      "label": "Opcja 2 inna",
      "objectType": "Opcja 2 inna"
    },
    {
      "label": "Opcja 3 dłuższa",
      "objectType": "Opcja 3 dłuższa"
    },
    {
      "label": "Opcja 4 ładniejsza i najdłuższa",
      "objectType": "Opcja 4 ładniejsza i najdłuższa"
    },
    {
      "label": "Opcja 5",
      "objectType": "Opcja 5"
    },
    {
      "label": "Efekty prac badawczych",
      "objectType": "Efekty prac badawczych"
    },
    {
      "label": "Opcja 7",
      "objectType": "Opcja 7"
    }
  ]

  constructor(public selectService: SelectService) { }

  getObjectType($event) {
    this.objectTypeHandler = $event;
  }

  ngOnInit() {
  }
}
