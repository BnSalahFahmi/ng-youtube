import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelItemComponent } from './channel-item.component';

describe('ChannelItemComponent', () => {
  let component: ChannelItemComponent;
  let fixture: ComponentFixture<ChannelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
