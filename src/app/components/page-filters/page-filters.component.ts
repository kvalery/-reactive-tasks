import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { distinct, filter, map, skip, Subject, take } from 'rxjs';

@Component({
  selector: 'app-page-filters',
  templateUrl: './page-filters.component.html',
  styleUrls: ['./page-filters.component.scss']
})
export class PageFiltersComponent implements OnInit {

  // новый Subject
  private _sbj$ = new Subject<Array<number>>();

  // новый Subject
  private _distinctSbj$ = new Subject<Array<number>>();

  constructor(
    private _router: ActivatedRoute,
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    // arrOfNums будем предавать
    const arrOfNums = [0];

    // регистрируем подписку
    //  take(7) - берет первые 7 ( не видим 7,8,9,10 )
    //  skip(4) - пропускает первые 4 ( не видим массивы [0,1]-[0,1,2,3] )
    //  filter - отфильтровывааем массив длинной до 5
    this._sbj$.pipe(
      take(7),
      skip(4),
      filter(sbj => sbj.length > 5)
    ).subscribe((vl) => console.log( vl ));

    const distinctArrOfNums = [4,4,4,4,4,4];

    this._distinctSbj$.pipe(
      distinct(sub => sub.length)
    ).subscribe(
      sub => console.log('отработал distinct, не пропустил провторяющийся по длине сообщение', sub)
    )

    this._distinctSbj$.next(distinctArrOfNums);
    this._distinctSbj$.next(distinctArrOfNums);
    this._distinctSbj$.next(distinctArrOfNums);


    // эмитим события
    // не используем эти события
    this._sbj$.next(arrOfNums);
    arrOfNums.push(1)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(2)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(3)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(4)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(5)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(6)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(7)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(8)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(9)
    this._sbj$.next(arrOfNums);
    arrOfNums.push(10)

  }
}
