import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalmpComponent } from './principalmp.component';

describe('PrincipalmpComponent', () => {
  let component: PrincipalmpComponent;
  let fixture: ComponentFixture<PrincipalmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
