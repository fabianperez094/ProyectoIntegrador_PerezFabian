import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeSocialesComponent } from './rede-sociales.component';

describe('RedeSocialesComponent', () => {
  let component: RedeSocialesComponent;
  let fixture: ComponentFixture<RedeSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedeSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
