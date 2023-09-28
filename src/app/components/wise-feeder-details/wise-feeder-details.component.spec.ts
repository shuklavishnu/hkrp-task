import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiseFeederDetailsComponent } from './wise-feeder-details.component';

describe('WiseFeederDetailsComponent', () => {
  let component: WiseFeederDetailsComponent;
  let fixture: ComponentFixture<WiseFeederDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WiseFeederDetailsComponent]
    });
    fixture = TestBed.createComponent(WiseFeederDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
