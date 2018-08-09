import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadscreenComponent } from './downloadscreen.component';

describe('DownloadscreenComponent', () => {
  let component: DownloadscreenComponent;
  let fixture: ComponentFixture<DownloadscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
