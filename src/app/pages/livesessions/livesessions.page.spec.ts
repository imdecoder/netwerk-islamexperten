import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivesessionsPage } from './livesessions.page';

describe('LivesessionsPage', () => {
  let component: LivesessionsPage;
  let fixture: ComponentFixture<LivesessionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivesessionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivesessionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
