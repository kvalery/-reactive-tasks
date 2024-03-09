import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageObservableComponent } from './page-observable.component';

describe('PageObservableComponent', () => {
  let component: PageObservableComponent;
  let fixture: ComponentFixture<PageObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
