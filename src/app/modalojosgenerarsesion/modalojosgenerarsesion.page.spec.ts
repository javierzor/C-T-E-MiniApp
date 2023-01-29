import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalojosgenerarsesionPage } from './modalojosgenerarsesion.page';

describe('ModalojosgenerarsesionPage', () => {
  let component: ModalojosgenerarsesionPage;
  let fixture: ComponentFixture<ModalojosgenerarsesionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalojosgenerarsesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalojosgenerarsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
