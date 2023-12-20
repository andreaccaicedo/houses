import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseComponent } from './house.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

describe('HouseComponent', () => {
  let component: HouseComponent;
  let fixture: ComponentFixture<HouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseComponent, HousingLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
