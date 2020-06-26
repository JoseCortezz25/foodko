import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversecundarioComponent } from './coversecundario.component';

describe('CoversecundarioComponent', () => {
  let component: CoversecundarioComponent;
  let fixture: ComponentFixture<CoversecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoversecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
