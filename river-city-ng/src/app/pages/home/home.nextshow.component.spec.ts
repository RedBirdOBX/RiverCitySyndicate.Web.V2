import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNextshowComponent } from './home.nextshow.component';

describe('HomeNextshowComponent', () => {
  let component: HomeNextshowComponent;
  let fixture: ComponentFixture<HomeNextshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNextshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeNextshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
