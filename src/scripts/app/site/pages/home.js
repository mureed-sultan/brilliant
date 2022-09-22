import getComp from 'setjs/template/component';
import { browseProduct, smartRange } from '../../../../data/brilliant';

export default {
  templates:['site/home'],
  comp:()=>{
    let page = getComp('site/home',{browseProduct, smartRange},{
      test1:()=>{
        console.log('that work');
      }
    });
    return page;
  }
};