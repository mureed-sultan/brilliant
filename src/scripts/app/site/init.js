import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
import home from './pages/home.js';
import news from './pages/news.js';

export default function() {
  addPage('', home);
  addPage('news', news);
  addPaths('site', [
    'catalogues',
    'products/air-movement',
    'products/air-movement/celling-fan-with-light',
    'docs/pages',
    'docs/architecture',
    'docs/samples',
    'docs/questions'
  ]);
}
