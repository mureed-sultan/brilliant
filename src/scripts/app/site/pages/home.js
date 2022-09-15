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
const smartRange={
  item1:{
    img:'/images/brilliant/brilliant16.jpg',
    desc:'Air Movement'
  },  
  item2:{
    img:'/images/brilliant/brilliant17.jpg',
    desc:'Cameras'
  },  
  item3:{
  //   img:'/images/brilliant/brilliant20.jpg',
  vid:'video/mov_bbb.mp4',
    desc:'Gateways'
  },  
  item4:{
    img:'/images/brilliant/brilliant18.jpg',
    desc:'Globes'
  },  
  item5:{
    img:'/images/brilliant/brilliant19.jpg',
    desc:'Indoor Lightning'
  },  
  item6:{
    img:'/images/brilliant/brilliant20.jpg',
    desc:'Outdoor Lightning'
  },  
  item7:{
    img:'/images/brilliant/brilliant21.jpg',
    desc:'Plugs and Powerboards'
  },  
  item8:{
    img:'/images/brilliant/brilliant22.jpg',
    desc:'Security'
  },  
  item9:{
    img:'/images/brilliant/brilliant23.jpg',
    desc:'Switches'
  },
};
export default {
  templates:['site/home'],
  comp:()=>{
    let page = getComp('site/home',{browseProduct, smartRange});
    return page;
  }
};