import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpieItemComponent } from './recpie-item.component';

describe('RecpieItemComponent', () => {
  let component: RecpieItemComponent;
  let fixture: ComponentFixture<RecpieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecpieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
