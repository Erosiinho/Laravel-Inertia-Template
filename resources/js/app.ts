import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h, DefineComponent, Plugin } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import {InertiaApp, InertiaAppProps} from "@inertiajs/vue3/types/app";
import lang from "@/Plugins/lang";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ) as Promise<DefineComponent>,
    setup({ el, App, props, plugin } : {
        el: Element;
        App: InertiaApp;
        props: InertiaAppProps;
        plugin: Plugin;

    }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(lang)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
