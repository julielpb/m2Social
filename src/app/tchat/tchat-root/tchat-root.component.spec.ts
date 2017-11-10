import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatRootComponent } from './tchat-root.component';

describe('TchatRootComponent', () => {
  let component: TchatRootComponent;
  let fixture: ComponentFixture<TchatRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
