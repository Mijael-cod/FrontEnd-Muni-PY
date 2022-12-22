import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarcontraComponent } from './olvidarcontra.component';

describe('OlvidarcontraComponent', () => {
  let component: OlvidarcontraComponent;
  let fixture: ComponentFixture<OlvidarcontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidarcontraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlvidarcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
