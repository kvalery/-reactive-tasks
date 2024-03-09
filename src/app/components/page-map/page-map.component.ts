import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss']
})

export class PageMapComponent  implements OnInit {

  constructor(
    private _router: ActivatedRoute,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this.action()
  }

  /** пример работы оператора map, поправляем отвер  */
  public action(): void{

    this._http.get('https://randomuser.me/api/')
      .pipe( map(res => {
        let newResponse = Object.assign(res)
          newResponse['name'] = 'name';
        return newResponse
      } ))
      .subscribe(
        (res: unknown) => {
          console.log('', res)
          // логин введен верно
        },
        (err) => {
          console.log('', err)
          // обработка ошибки
        }
      );
  }

}
