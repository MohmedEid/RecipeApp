import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecpieDetailsComponent } from './recpie-details.component';

describe('RecpieDetailsComponent', () => {
  let component: RecpieDetailsComponent;
  let fixture: ComponentFixture<RecpieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecpieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecpieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
