import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarexpeComponent } from './verificarexpe.component';

describe('VerificarexpeComponent', () => {
  let component: VerificarexpeComponent;
  let fixture: ComponentFixture<VerificarexpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarexpeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarexpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
