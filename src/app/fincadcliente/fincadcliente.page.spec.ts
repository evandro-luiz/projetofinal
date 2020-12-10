import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FincadclientePage } from './fincadcliente.page';

describe('FincadclientePage', () => {
  let component: FincadclientePage;
  let fixture: ComponentFixture<FincadclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FincadclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FincadclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
