import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemparatureGameComponent } from './temparature-game.component';

describe('TemparatureGameComponent', () => {
  let component: TemparatureGameComponent;
  let fixture: ComponentFixture<TemparatureGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemparatureGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemparatureGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
