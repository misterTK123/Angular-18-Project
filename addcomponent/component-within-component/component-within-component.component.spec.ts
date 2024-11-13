import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithinComponentComponent } from './component-within-component.component';

describe('ComponentWithinComponentComponent', () => {
  let component: ComponentWithinComponentComponent;
  let fixture: ComponentFixture<ComponentWithinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentWithinComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentWithinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
