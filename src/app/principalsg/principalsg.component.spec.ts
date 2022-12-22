import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalsgComponent } from './principalsg.component';

describe('PrincipalsgComponent', () => {
  let component: PrincipalsgComponent;
  let fixture: ComponentFixture<PrincipalsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
