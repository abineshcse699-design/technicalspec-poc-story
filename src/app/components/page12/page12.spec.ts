import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page12 } from './page12';

describe('Page12', () => {
  let component: Page12;
  let fixture: ComponentFixture<Page12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
