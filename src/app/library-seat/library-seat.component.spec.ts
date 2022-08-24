import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarySeatComponent } from './library-seat.component';

describe('LibrarySeatComponent', () => {
  let component: LibrarySeatComponent;
  let fixture: ComponentFixture<LibrarySeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarySeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrarySeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
