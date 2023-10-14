import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTabComponent } from './third-tab.component';

describe('ThirdTabComponent', () => {
  let component: ThirdTabComponent;
  let fixture: ComponentFixture<ThirdTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdTabComponent]
    });
    fixture = TestBed.createComponent(ThirdTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
