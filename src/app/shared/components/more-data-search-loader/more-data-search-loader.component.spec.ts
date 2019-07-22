import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDataSearchLoaderComponent } from './more-data-search-loader.component';

describe('MoreDataSearchLoaderComponent', () => {
  let component: MoreDataSearchLoaderComponent;
  let fixture: ComponentFixture<MoreDataSearchLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDataSearchLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDataSearchLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
