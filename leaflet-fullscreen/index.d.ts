import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {
        class Fullscreen extends Control {
            constructor(options?: FullscreenOptions);
            options: FullscreenOptions;
        }

        interface FullscreenOptions {
            content?: string;
            position?: ControlPosition;
            title?: {
                false?: string;
                true?: string;
            };
            titleCancel?: string;
            forceSeparateButton?: boolean;
            forcePseudoFullscreen?: boolean;
            pseudoFullscreen?: boolean;
            fullscreenElement?: false | HTMLElement;
        }
    }

    namespace control {
        /**
         * Creates a fullscreen control.
         */
        function fullscreen(options?: Control.FullscreenOptions): Control.Fullscreen;
    }

    interface MapOptions {
        fullscreenControl?: boolean;
        fullscreenControlOptions?: Control.FullscreenOptions;
    }

    interface Map {
        toggleFullScreen(): void;
    }
}