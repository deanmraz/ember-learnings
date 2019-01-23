import hbs from 'htmlbars-inline-precompile';
import { storiesOf } from '@storybook/ember';

storiesOf('Blog Post', module)
  .add('Demo 1', () => {
    return {
      template: hbs`
{{#blog-post title=post.title}}
  {{post.body}}
{{/blog-post}}
`,
      context: {
        post: {
          title: 'Demo 1',
          body: 'This is body 1',
        },
        onClick: (e) => console.log(e)
      }
    }
  }, {
    notes: {
      markdown: `
# Markdown!
> Notes can be done via markdown,
`
    }
  })
  .add('Emojis', () => {
    return {
      template: hbs`
{{#blog-post title=post.title}}
  {{post.body}}
{{/blog-post}}
`,
      context: {
        post: {
          title: 'Emojis',
          body: '🤔😳😯😮😄😩😓😱🤓😑😶😊',
        },
        onClick: (e) => console.log(e)
      }
    }
  })
