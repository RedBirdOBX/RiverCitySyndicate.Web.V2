import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosTitleComponent } from './videos.title.component';

describe('VideosTitleComponent', () => {
  let component: VideosTitleComponent;
  let fixture: ComponentFixture<VideosTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
