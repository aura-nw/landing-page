import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuraCardComponent } from './aura-card.component';

describe('AuraCardComponent', () => {
  let component: AuraCardComponent;
  let fixture: ComponentFixture<AuraCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuraCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuraCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
