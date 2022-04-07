import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencesenseiComponent } from './absencesensei.component';

describe('AbsencesenseiComponent', () => {
  let component: AbsencesenseiComponent;
  let fixture: ComponentFixture<AbsencesenseiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsencesenseiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencesenseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
