import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsTitleComponent } from './shows.title.component';

describe('ShowsTitleComponent', () => {
  let component: ShowsTitleComponent;
  let fixture: ComponentFixture<ShowsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
