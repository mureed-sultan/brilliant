import getComp from 'setjs/template/component';
import { newsItem } from '../../../../data/brilliant';
export default {
    templates: ['site/news'],
    comp: () => {
        let page = getComp('site/news', { newsItem });
        return page;
    }
};