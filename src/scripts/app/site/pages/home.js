import getComp from 'setjs/template/component';
import { browseProduct, smartRange } from '../../../../data/brilliant';
import 'slick-carousel/slick/slick.js';

export default {
  templates:['site/home'],
  loaded:()=>{
    $('.slider-image').slick({
      arrows:false,
      dots:true,
      dotsClass:'slick-nav',
    });   
     $('.range-slider').slick({
       arrows:true,
       
      });
      $('.range-slider button:first-child').html("<img src='https://toppng.com/uploads/preview/arrow-left-to-right-11550125569m6ffhoapdb.png' alt='no img found'>") 
       $('.range-slider button:last-child').html("<img src='https://freepngimg.com/thumb/web_design/24684-5-right-arrow-transparent-picture.png' alt='no img found'>")
    
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