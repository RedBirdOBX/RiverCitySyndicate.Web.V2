import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ShowsDetailTitleComponent } from './shows.detail.title.component';

describe('ShowsDetailTitleComponent', () => {
  let component: ShowsDetailTitleComponent;
  let fixture: ComponentFixture<ShowsDetailTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsDetailTitleComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsDetailTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fall back to a generic heading when no show title is set', () => {
    const heading: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toContain('Show Details');
  });

  it('should render the show title in the heading and breadcrumb once set', () => {
    component.showTitle = 'Kindred Spirit Brewing';
    fixture.detectChanges();

    const heading: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(heading.textContent).toContain('Kindred Spirit Brewing');
  });
});
