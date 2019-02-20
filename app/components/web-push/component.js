import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Push from 'Push';

export default Component.extend({
  router: service(),

  onGranted() {
    console.log('on granted', ...arguments);
  },

  onDenied() {
    console.log('on denied', ...arguments);
  },

  actions: {
    request() {
      Push.Permission.request(this.onGranted, this.onDenied);
    },

    push() {
      const router = this.get('router');
      Push.create("Hello world!", {
        body: "How's it hangin'?",
        icon: 'https://pngimage.net/wp-content/uploads/2018/05/alert-png-1.png',
        onClick: function() {
          window.focus();
          router.transitionTo('pushed');
          this.close();
        },
      });
    }
  }
});
