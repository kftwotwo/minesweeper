/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeginnerComponent } from './beginner.component';

describe('BeginnerComponent', () => {
  let component: BeginnerComponent;
  let fixture: ComponentFixture<BeginnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});