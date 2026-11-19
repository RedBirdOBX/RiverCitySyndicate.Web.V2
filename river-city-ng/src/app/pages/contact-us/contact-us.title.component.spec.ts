import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsTitleComponent } from './contact-us.title.component';

describe('ContactUsTitleComponent', () => {
  let component: ContactUsTitleComponent;
  let fixture: ComponentFixture<ContactUsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
