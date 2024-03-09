import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-page-observable',
  templateUrl: './page-observable.component.html',
  styleUrls: ['./page-observable.component.scss']
})
export class PageObservableComponent implements OnInit {

  /** Observable */
  private _obs$ = new Observable<string>((sub)=>{
    sub.next('событие Observable 1');
    sub.next('событие Observable 2');
  });

  /** определяем Subject */
  private _sbj$ = new Subject<string>();

  constructor() {
  }

  ngOnInit(): void {

    // получаем все события сразу после подписки
    this._obs$.subscribe(obs => console.log('подписка на _obs$--', obs ) )
    this._obs$.subscribe(obs => console.log('подписка на _obs$--', obs ) )

    // Subject получаем после подписки, сообщения по подписки не получаем
    this._sbj$.next('сообщение1')
    this._sbj$.subscribe(sub => console.log('подписка на _sbj$--', sub))
    this._sbj$.next('сообщение2')





  }

}
