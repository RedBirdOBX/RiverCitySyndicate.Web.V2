import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { PressKitTitleComponent } from './press-kit.title.component';

describe('PressKitTitleComponent', () => {
  let component: PressKitTitleComponent;
  let fixture: ComponentFixture<PressKitTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressKitTitleComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressKitTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
