import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})

export class PageMapComponent  implements OnInit {

  constructor(
    private _router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this)
  }

}
