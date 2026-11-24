import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressKitSongsComponent } from './press-kit.songs.component';

describe('PressKitSongsComponent', () => {
  let component: PressKitSongsComponent;
  let fixture: ComponentFixture<PressKitSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PressKitSongsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressKitSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
