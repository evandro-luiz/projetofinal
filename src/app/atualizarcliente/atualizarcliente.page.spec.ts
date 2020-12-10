import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtualizarclientePage } from './atualizarcliente.page';

describe('AtualizarclientePage', () => {
  let component: AtualizarclientePage;
  let fixture: ComponentFixture<AtualizarclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizarclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
