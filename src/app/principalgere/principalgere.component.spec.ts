import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalgereComponent } from './principalgere.component';

describe('PrincipalgereComponent', () => {
  let component: PrincipalgereComponent;
  let fixture: ComponentFixture<PrincipalgereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalgereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalgereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
