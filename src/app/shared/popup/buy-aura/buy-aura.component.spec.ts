import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAuraComponent } from './buy-aura.component';

describe('BuyAuraComponent', () => {
  let component: BuyAuraComponent;
  let fixture: ComponentFixture<BuyAuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
