import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastropodologoPage } from './cadastropodologo.page';

describe('CadastropodologoPage', () => {
  let component: CadastropodologoPage;
  let fixture: ComponentFixture<CadastropodologoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastropodologoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastropodologoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
