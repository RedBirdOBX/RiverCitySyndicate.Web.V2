import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleGuideTitleComponent } from './style-guide.title.component';

describe('StyleGuideTitleComponent', () => {
  let component: StyleGuideTitleComponent;
  let fixture: ComponentFixture<StyleGuideTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleGuideTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleGuideTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
