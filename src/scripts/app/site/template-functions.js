import {addAction} from 'core/acts-funcs.js';
import 'setjs/plugins/jquery/accordion';

addAction('switchCode', function({$el, arg}) {
  $el.siblings().removeClass('active');
  $el.add($el.siblings('.' + arg)).addClass('active');
});

$('.accordion').accordion();

addAction('test1',()=>{
  alert('test1 work');
});