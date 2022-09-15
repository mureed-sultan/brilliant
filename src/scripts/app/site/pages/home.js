import getComp from 'setjs/template/component';

const browseProduct = {
  product1:{
    img:'images/brilliant/brilliant06.jpeg',
    desc:'Air Movement'
  },
    product2:{
    img:'images/brilliant/brilliant07.jpg',
    desc:'Commercial'
  },    product3:{
    img:'images/brilliant/brilliant08.jpg',
    desc:'Electricial'
  }, product4:{
    img:'images/brilliant/brilliant09.jpg',
    desc:'Indoor Lighning'
  },product5:{
    img:'images/brilliant/brilliant10.jpg',
    desc:'Outdoor Lighting'
  },product6:{
    img:'images/brilliant/brilliant11.jpg',
    desc:'Security'
  },product7:{
    img:'images/brilliant/brilliant02.jpg',
    desc:'Smart Home'
  },
  product8:{
    img:'images/brilliant/brilliant03.jpg',
    desc:'Specifier Range'
  },
};

export default {
  templates:['site/home'],
  comp:()=>{
    let page = getComp('site/home',{browseProduct});
    return page;
  }
};