import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencesetudComponent } from './absencesetud.component';

describe('AbsencesetudComponent', () => {
  let component: AbsencesetudComponent;
  let fixture: ComponentFixture<AbsencesetudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsencesetudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencesetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
