import {I18n} from 'i18n-js';
import en from '../assets/localization/en';

export enum LanguageType {
  EN = 'en',
}

export const i18n = new I18n({[LanguageType.EN]: en});
i18n.defaultLocale = LanguageType.EN;
