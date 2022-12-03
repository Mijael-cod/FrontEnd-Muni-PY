import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenexpComponent } from './genexp.component';

describe('GenexpComponent', () => {
  let component: GenexpComponent;
  let fixture: ComponentFixture<GenexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
