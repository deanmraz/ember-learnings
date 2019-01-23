import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';
import { action } from '@storybook/addon-actions';

storiesOf('Demo', module)
  .add('heading', () => hbs`<h1>Hello World</h1>`)
  .add('button', () => {
    return {
      template: hbs`<button {{action onClick}}>
        Hello Button
      </button>`,
      context: {
        onClick: action('clicked')
      }
    }
  })
  .add('component', () => {
    return {
      template: hbs`{{foo-bar
        name=name
        click=onClick
      }}`,
      context: {
        name: 'FOO BAR',
        onClick: (e) => console.log(e)
      }
    }
  });
