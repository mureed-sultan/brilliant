import getComp from 'setjs/template/component.js';
import eventManager, { eventTypes } from 'setjs/kernel/event-manager.js';

/**
* Initializes the nav
*/
export default function () {
  const navFunction = {
    toggleProduct: () => {
      $('.solution-dropdown').slideUp('slow');
        $('.menu-dropdown').slideToggle('slow', () => {
        $('.dropdown a').on('click', () => {
          $('.menu-dropdown').slideUp();
        });
      });
    },
    toggleSolution: () => {
      $('.menu-dropdown').slideUp('slow');
      $('.solution-dropdown').slideToggle('slow');
    },
    toggleMenu:()=>{
      $('.menu-list').slideToggle('slow');
      $('.menu-button').toggleClass('change');
    }

  };

  var comp = getComp('common/navigation', {}, navFunction);
  $('#nav-placeholder').replaceWith(comp.$root);
  eventManager.addListener(eventTypes.route, 'nav', comp.update, null);
}
