import {addAction} from 'core/acts-funcs.js';
import 'setjs/plugins/jquery/accordion';

addAction('switchCode', function({$el, arg}) {
  $el.siblings().removeClass('active');
  $el.add($el.siblings('.' + arg)).addClass('active');
});

setTimeout(() => {
  $('.accordion').accordion();
}, 500);