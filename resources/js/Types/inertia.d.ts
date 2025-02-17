import Lang from "lang.js";
import { TransMode, TransReplacements, TransKey } from "@/Plugins/lang"
export {};
import { route as ziggyRoute} from 'ziggy-js';

declare global {
    /* eslint-disable no-var */
    var route: typeof ziggyRoute;

    export namespace inertia {
        export interface Props {
            user: {
                id: number;
                name: string;
                email: string;
                admin: boolean;
                organization_id: number;
                created_at: Date;
                updated_at: Date;
            };
            ziggy: {
                [key: string]: boolean;
            };
        }
    }

    var $trans: (
        key: TransKey,
        replacements?: TransReplacements,
        mode?: TransMode,
    ) => string;
}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $lang: Lang
        $trans: (key: TransKey, replacements?: TransReplacements, mode?: TransMode) => string,
        route: typeof ziggyRoute;
    }
}
