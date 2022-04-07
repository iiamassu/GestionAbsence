import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterenseignantComponent } from './ajouterenseignant.component';

describe('AjouterenseignantComponent', () => {
  let component: AjouterenseignantComponent;
  let fixture: ComponentFixture<AjouterenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterenseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
