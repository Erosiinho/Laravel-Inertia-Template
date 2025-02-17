import {App} from "vue";
import Lang from 'lang.js';
import messages from '../lang/messages.json'

export enum TransMode {
    Unchanged = 0,
    FirstToUpper = 1,
    FirstToLower = 2,
}

export interface TransReplacements {
    [p: string]: string
}

type WithPrefix<T extends string> = `${T}.${string}`;

export type TransKey = WithPrefix<'strings' | 'trx' | 'validation' | 'auth'>

export interface Translate {
    (key: TransKey, replacements?: TransReplacements, mode?: TransMode): string
}

export default {

    install: (app : App) => {

        const lang : Lang = new Lang({
            messages,
            locale: 'fr',
            fallback: 'en'
        });

        const checkExistence : Function = (key: string) => {
            if (import.meta.env.DEV && lang.trans(key) === key) {
                console.warn(`Trans : Key '${lang.getLocale()}.${key}' does not exist in localization files.`)
            }
        }

        const trans : Translate = (key: TransKey, replacements?: TransReplacements, mode: TransMode = TransMode.Unchanged) : string => {
            checkExistence(key);
            if (mode === TransMode.Unchanged) {
                return lang.trans(key, replacements);
            }
            else {
                let Value : String = lang.trans(key, replacements);
                if (mode === TransMode.FirstToUpper) {
                    return `${Value.charAt(0).toUpperCase()}${Value.slice(1)}`
                }
                else if (mode === TransMode.FirstToLower) {
                    return `${Value.charAt(0).toLowerCase()}${Value.slice(1)}`
                }
            }
            return key;
        }

        Object.defineProperty(app.config.globalProperties, '$lang', { get: () => lang})
        Object.defineProperty(app.config.globalProperties, '$trans', { get: () => trans})

        app.provide('lang', lang)
        app.provide('trans', trans)
    }
}

