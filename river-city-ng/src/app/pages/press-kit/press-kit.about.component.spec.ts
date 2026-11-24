import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitAboutComponent } from './press-kit.about.component';

describe('PressKitAboutComponent', () => {
  let component: PressKitAboutComponent;
  let fixture: ComponentFixture<PressKitAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressKitAboutComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressKitAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
