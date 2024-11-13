import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempBComponent } from './temp-b.component';

describe('TempBComponent', () => {
  let component: TempBComponent;
  let fixture: ComponentFixture<TempBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
