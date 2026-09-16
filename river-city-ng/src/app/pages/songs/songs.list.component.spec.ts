import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SongsListComponent } from './songs.list.component';
import { SongService } from '../../services/song.service';

describe('SongsListComponent', () => {
  let component: SongsListComponent;
  let fixture: ComponentFixture<SongsListComponent>;

  beforeEach(async () => {
    const songServiceSpy = jasmine.createSpyObj('SongService', ['getSongs']);
    songServiceSpy.getSongs.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [SongsListComponent],
      providers: [
        { provide: SongService, useValue: songServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
