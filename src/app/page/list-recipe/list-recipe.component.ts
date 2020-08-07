import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.scss'],
})
export class ListRecipeComponent implements OnInit {
  allowed: boolean = false;
  currentCar: string;
  cars: string[] = ['car', 'ffff', 'fgggg', 'ggggg'];
  constructor() {}
  ngOnInit(): void {
    this.currentCar = 'Ren+';
    setTimeout(() => {
      this.allowed = true;
    }, 3000);
  }
  activate() {
    alert('Activé');
  }
}
