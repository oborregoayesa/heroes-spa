import { Component, OnInit } from '@angular/core';
import {HeroeService, Heroe} from '../../services/heroe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'

})
export class HeroesComponent implements OnInit {

 heroes: Heroe[] = [];
  constructor(private _heroeService: HeroeService) { }
  private _router: Router;
  ngOnInit() {

  }

viewHeroe (index: number) {
    this._router.navigate(['/heroe', index]);
}
}
