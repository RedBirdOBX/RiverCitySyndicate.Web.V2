import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitComponent } from './press-kit.component';

describe('PressKitComponent', () => {
  let component: PressKitComponent;
  let fixture: ComponentFixture<PressKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressKitComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
