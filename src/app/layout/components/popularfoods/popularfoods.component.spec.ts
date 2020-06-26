import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularfoodsComponent } from './popularfoods.component';

describe('PopularfoodsComponent', () => {
  let component: PopularfoodsComponent;
  let fixture: ComponentFixture<PopularfoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularfoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularfoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
