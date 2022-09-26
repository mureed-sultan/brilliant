import getComp from 'setjs/template/component';
import { browseProduct, smartRange } from '../../../../data/brilliant';
import 'slick-carousel/slick/slick.js';

export default {
  templates:['site/home'],
  loaded:()=>{
    console.log($('.slider-image').slick({
      arrows:false,
      dots:true,
      dotsClass:"slick-nav"
    }))
  },
  comp:()=>{
    let page = getComp('site/home',{browseProduct, smartRange},{
      test1:()=>{
        console.log('that work');
      }
    });
    return page;
  }
};