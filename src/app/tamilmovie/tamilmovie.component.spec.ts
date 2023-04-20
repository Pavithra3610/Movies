import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilmovieComponent } from './tamilmovie.component';

describe('TamilmovieComponent', () => {
  let component: TamilmovieComponent;
  let fixture: ComponentFixture<TamilmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamilmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamilmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
