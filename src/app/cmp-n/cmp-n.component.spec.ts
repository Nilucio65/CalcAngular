



import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpNComponent } from './cmp-n.component';

describe('CmpNComponent', () => {
  let component: CmpNComponent;
  let fixture: ComponentFixture<CmpNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmpNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
