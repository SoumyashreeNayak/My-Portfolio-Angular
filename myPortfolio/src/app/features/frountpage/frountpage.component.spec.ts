import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrountpageComponent } from './frountpage.component';

describe('FrountpageComponent', () => {
  let component: FrountpageComponent;
  let fixture: ComponentFixture<FrountpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrountpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrountpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
