import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosTitleComponent } from './photos.title.component';

describe('PhotosTitleComponent', () => {
  let component: PhotosTitleComponent;
  let fixture: ComponentFixture<PhotosTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
