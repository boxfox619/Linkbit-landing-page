import { observable, action, computed } from 'mobx';
import * as i18n from '../util/locale';

export default class LocaleStore {
    @observable locale: string = 'en';

    @action toggleLocale = () => {
        if (this.locale === 'en') {
            this.locale = 'ko';
        } else {
            this.locale = 'en';
        }
    }

    @computed get i18n() {
        if (this.locale === 'en') {
            return i18n.en;
        }
        return i18n.ko;
    }

    @computed get localeName() {
        if (this.locale === 'en') {
            return 'ENGLISH';
        }
        return '한국어';
    }
}