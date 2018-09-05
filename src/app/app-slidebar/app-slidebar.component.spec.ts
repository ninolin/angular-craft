import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSlidebarComponent } from './app-slidebar.component';

describe('AppSlidebarComponent', () => {
  let component: AppSlidebarComponent;
  let fixture: ComponentFixture<AppSlidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSlidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
