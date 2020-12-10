import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcarconsultaPage } from './marcarconsulta.page';

describe('MarcarconsultaPage', () => {
  let component: MarcarconsultaPage;
  let fixture: ComponentFixture<MarcarconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcarconsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcarconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
