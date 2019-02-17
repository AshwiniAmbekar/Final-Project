import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyinsuranceComponent } from './buyinsurance.component';

describe('BuyinsuranceComponent', () => {
  let component: BuyinsuranceComponent;
  let fixture: ComponentFixture<BuyinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
