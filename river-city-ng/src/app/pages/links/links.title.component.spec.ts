import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksTitleComponent } from './links.title.component';

describe('LinksTitleComponent', () => {
  let component: LinksTitleComponent;
  let fixture: ComponentFixture<LinksTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
