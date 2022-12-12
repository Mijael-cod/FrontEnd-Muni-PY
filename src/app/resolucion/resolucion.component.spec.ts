import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolucionComponent } from './resolucion.component';

describe('ResolucionComponent', () => {
  let component: ResolucionComponent;
  let fixture: ComponentFixture<ResolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolucionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
