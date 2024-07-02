import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosFormComponent } from './alumnos-form.component';

describe('AlumnosFormComponent', () => {
  let component: AlumnosFormComponent;
  let fixture: ComponentFixture<AlumnosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
