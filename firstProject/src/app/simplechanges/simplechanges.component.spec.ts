import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplechangesComponent } from './simplechanges.component';

describe('SimplechangesComponent', () => {
  let component: SimplechangesComponent;
  let fixture: ComponentFixture<SimplechangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplechangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplechangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
