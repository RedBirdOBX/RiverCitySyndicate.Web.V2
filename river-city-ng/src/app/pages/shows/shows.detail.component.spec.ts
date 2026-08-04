import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

import { ShowsDetailComponent } from './shows.detail.component';
import { ShowService } from '../../services/show.service';
import { Show } from '../../models/show';

describe('ShowsDetailComponent', () => {
  let component: ShowsDetailComponent;
  let fixture: ComponentFixture<ShowsDetailComponent>;

  const mockShow: Show = {
    id: 1,
    slug: 'feb-1-2026-kindred-spirit-brewing',
    title: 'Kindred Spirit Brewing',
    location: 'Kindred Spirit Brewing',
    date: '2026-02-01',
    time: '8:00 PM',
    description: 'A great show',
    image: 'show.jpg',
    url: '',
    mapUrl: '',
    active: true,
    added: '2025-01-01',
    _links: []
  };

  function setup(slug: string | null, showServiceSpy: jasmine.SpyObj<ShowService>): void {
    TestBed.configureTestingModule({
      imports: [ShowsDetailComponent],
      providers: [
        provideRouter([]),
        { provide: ShowService, useValue: showServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap(slug ? { slug } : {}) } }
        }
      ]
    });

    fixture = TestBed.createComponent(ShowsDetailComponent);
    component = fixture.componentInstance;
  }

  it('should load a show by slug and populate `show`', () => {
    const showServiceSpy = jasmine.createSpyObj('ShowService', ['getShowBySlug']);
    showServiceSpy.getShowBySlug.and.returnValue(of(mockShow));

    setup(mockShow.slug, showServiceSpy);
    fixture.detectChanges();

    expect(showServiceSpy.getShowBySlug).toHaveBeenCalledWith(mockShow.slug);
    expect(component.show).toEqual(mockShow);
    expect(component.errorMessage).toBe('');
    expect(TestBed.inject(Title).getTitle()).toBe(`${mockShow.title} - River City Syndicate`);
  });

  it('should set errorMessage when the slug lookup fails (e.g. old numeric /shows/1 link)', () => {
    const showServiceSpy = jasmine.createSpyObj('ShowService', ['getShowBySlug']);
    showServiceSpy.getShowBySlug.and.returnValue(
      throwError(() => new Error('Failed to load show. Please try again later.'))
    );

    setup('1', showServiceSpy);
    fixture.detectChanges();

    expect(component.show).toBeNull();
    expect(component.errorMessage).toBe('Failed to load show. Please try again later.');
  });

  it('should set errorMessage and skip the service call when no slug param is present', () => {
    const showServiceSpy = jasmine.createSpyObj('ShowService', ['getShowBySlug']);

    setup(null, showServiceSpy);
    fixture.detectChanges();

    expect(showServiceSpy.getShowBySlug).not.toHaveBeenCalled();
    expect(component.errorMessage).toBe('Failed to load show. Please try again later.');
  });
});
