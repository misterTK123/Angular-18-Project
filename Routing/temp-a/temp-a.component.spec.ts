import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempAComponent } from './temp-a.component';

describe('TempAComponent', () => {
  let component: TempAComponent;
  let fixture: ComponentFixture<TempAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
