import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsTitleComponent } from './songs.title.component';

describe('SongsTitleComponent', () => {
  let component: SongsTitleComponent;
  let fixture: ComponentFixture<SongsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
