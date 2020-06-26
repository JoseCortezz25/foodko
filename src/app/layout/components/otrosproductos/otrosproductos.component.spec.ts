import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosproductosComponent } from './otrosproductos.component';

describe('OtrosproductosComponent', () => {
  let component: OtrosproductosComponent;
  let fixture: ComponentFixture<OtrosproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
