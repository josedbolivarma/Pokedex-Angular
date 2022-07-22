import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexScreenComponent } from './pokedex-screen.component';

describe('PokedexScreenComponent', () => {
  let component: PokedexScreenComponent;
  let fixture: ComponentFixture<PokedexScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
