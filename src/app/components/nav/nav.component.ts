import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  /** список страниц */
  public routes: {name: string, rout: string}[] = [
    {
    name: '.map',
    rout:'/map'
    },
    {
    name: 'filters',
    rout:'/filters'
    },
    {
    name: 'observable',
    rout:'/observable'
    },
  ]


  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  /** постраничный переход */
  public goTo(rout: string){
    this._router.navigate([rout]);
  }

}
