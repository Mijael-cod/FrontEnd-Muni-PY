import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalgrComponent } from './principalgr.component';

describe('PrincipalgrComponent', () => {
  let component: PrincipalgrComponent;
  let fixture: ComponentFixture<PrincipalgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
