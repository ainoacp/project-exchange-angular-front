import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignexchangesComponent } from './foreignexchanges.component';

describe('ForeignexchangesComponent', () => {
  let component: ForeignexchangesComponent;
  let fixture: ComponentFixture<ForeignexchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignexchangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignexchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
