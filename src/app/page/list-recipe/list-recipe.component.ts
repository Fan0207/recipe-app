import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss'],
})
export class ListRecipeComponent implements OnInit {
  currentCar: string = 'Renault';
  allowed;
  constructor() {}

  ngOnInit(): void {
    this.currentCar = 'Ren+';

    setTimeout(() => {
      this.allowed = true;
    }, 3000);
  }
}
