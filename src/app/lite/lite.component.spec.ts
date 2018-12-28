import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteComponent } from './lite.component';

describe('LiteComponent', () => {
  let component: LiteComponent;
  let fixture: ComponentFixture<LiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
