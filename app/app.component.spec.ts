import {byTextContent, createComponentFactory, Spectator, SpectatorFactory} from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent: SpectatorFactory<AppComponent> = createComponentFactory({
    component: AppComponent
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('show text after button clicked', () => {
    const button = spectator.query('.show-btn') as HTMLButtonElement;

    button.click();
    spectator.detectChanges();

    const paragraph = spectator.query('p');
    expect(paragraph).toHaveText('Test');
  });

  it('do not show text after button clicked when text is visible', () => {
    spectator.component.textVisible = true;
    spectator.detectChanges();
    const button = spectator.query('.show-btn') as HTMLButtonElement;

    button.click();
    spectator.detectChanges();

    const paragraph = spectator.query('p');
    expect(paragraph).toBeFalsy();
  });

  // it('querying specific button', () => {
  //   const button = spectator.query('.buttons-div .btn-1');
  //
  //   expect(button).toHaveText('Btn 1');
  // });

  it('querying buttons with the same class', () => {
    const button = spectator.query(byTextContent('Btn 2', {selector: '.buttons-div .show-btn'}));

    expect(button).toHaveText('Btn 2')
  });
});
