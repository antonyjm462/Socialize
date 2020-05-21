import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveItemComponent } from './have-item.component';

describe('HaveItemComponent', () => {
  let component: HaveItemComponent;
  let fixture: ComponentFixture<HaveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
