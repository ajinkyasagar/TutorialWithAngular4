import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytopicComponent } from './displaytopic.component';

describe('DisplaytopicComponent', () => {
  let component: DisplaytopicComponent;
  let fixture: ComponentFixture<DisplaytopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaytopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
