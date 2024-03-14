import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordBuilderPageComponent } from './crossword-builder-page.component';

describe('CrosswordBuilderPageComponent', () => {
  let component: CrosswordBuilderPageComponent;
  let fixture: ComponentFixture<CrosswordBuilderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrosswordBuilderPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrosswordBuilderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
