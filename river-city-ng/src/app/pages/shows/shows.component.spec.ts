import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { ShowsComponent } from './shows.component';
import { ShowService } from '../../services/show.service';

describe('ShowsComponent', () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;

  beforeEach(async () => {
    const showServiceSpy = jasmine.createSpyObj('ShowService', ['getShows']);
    showServiceSpy.getShows.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [ShowsComponent],
      providers: [
        provideRouter([]),
        { provide: ShowService, useValue: showServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
