import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ShowsListComponent } from './shows.list.component';
import { ShowService } from '../../services/show.service';

describe('ShowsListComponent', () => {
  let component: ShowsListComponent;
  let fixture: ComponentFixture<ShowsListComponent>;

  beforeEach(async () => {
    const showServiceSpy = jasmine.createSpyObj('ShowService', ['getShows']);
    showServiceSpy.getShows.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [ShowsListComponent],
      providers: [
        provideRouter([]),
        { provide: ShowService, useValue: showServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
