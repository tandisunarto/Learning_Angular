import { TestBed, async } from '@angular/core/testing';

import { RecipeBookComponent } from './recipe-book.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipeBookComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RecipeBookComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'rb works!'`, async(() => {
    const fixture = TestBed.createComponent(RecipeBookComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('rb works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(RecipeBookComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('rb works!');
  }));
});
