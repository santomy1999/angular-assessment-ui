import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagFieldMaintanenceComponent } from './pag-field-maintanence.component';

describe('PagFieldMaintanenceComponent', () => {
  let component: PagFieldMaintanenceComponent;
  let fixture: ComponentFixture<PagFieldMaintanenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagFieldMaintanenceComponent]
    });
    fixture = TestBed.createComponent(PagFieldMaintanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
