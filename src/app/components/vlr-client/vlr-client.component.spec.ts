import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlrClientComponent } from './vlr-client.component';

describe('VlrClientComponent', () => {
  let component: VlrClientComponent;
  let fixture: ComponentFixture<VlrClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlrClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlrClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
