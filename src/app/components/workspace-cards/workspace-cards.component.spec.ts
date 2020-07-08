import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceCardsComponent } from './workspace-cards.component';

describe('WorkspaceCardsComponent', () => {
  let component: WorkspaceCardsComponent;
  let fixture: ComponentFixture<WorkspaceCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
