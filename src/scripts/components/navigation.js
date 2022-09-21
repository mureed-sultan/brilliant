import getComp from 'setjs/template/component.js';
import eventManager, {eventTypes} from 'setjs/kernel/event-manager.js';

/**
* Initializes the nav
*/
export default function() {
  const navFunction = {
    toggleProduct:()=>{
     $('.menu-dropdown').slideToggle('slow')
    
    }}

  var comp = getComp('common/navigation',{},navFunction);
  $('#nav-placeholder').replaceWith(comp.$root);
  eventManager.addListener(eventTypes.route, 'nav', comp.update, null);
}
