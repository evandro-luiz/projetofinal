import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfenviosenhaPage } from './confenviosenha.page';

describe('ConfenviosenhaPage', () => {
  let component: ConfenviosenhaPage;
  let fixture: ComponentFixture<ConfenviosenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfenviosenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfenviosenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
