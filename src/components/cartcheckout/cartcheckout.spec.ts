import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartcheckout } from './cartcheckout';

describe('Cartcheckout', () => {
  let component: Cartcheckout;
  let fixture: ComponentFixture<Cartcheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartcheckout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartcheckout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
