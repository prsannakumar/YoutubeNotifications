import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendTelegramComponent } from './send-telegram.component';

describe('SendTelegramComponent', () => {
  let component: SendTelegramComponent;
  let fixture: ComponentFixture<SendTelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendTelegramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
