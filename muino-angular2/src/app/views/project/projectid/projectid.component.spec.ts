import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectidComponent } from './projectid.component';

describe('ProjectidComponent', () => {
  let component: ProjectidComponent;
  let fixture: ComponentFixture<ProjectidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
