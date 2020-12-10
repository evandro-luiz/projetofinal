import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FincadpodologoPage } from './fincadpodologo.page';

describe('FincadpodologoPage', () => {
  let component: FincadpodologoPage;
  let fixture: ComponentFixture<FincadpodologoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FincadpodologoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FincadpodologoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
