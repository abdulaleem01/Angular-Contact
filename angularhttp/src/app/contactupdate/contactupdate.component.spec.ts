import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactupdateComponent } from './contactupdate.component';

describe('ContactupdateComponent', () => {
  let component: ContactupdateComponent;
  let fixture: ComponentFixture<ContactupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
