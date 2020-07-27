import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Control {

        class MousePosition extends Control {
            constructor(options?: MousePositionOptions);
            options: MousePositionOptions;
        }

        interface MousePositionOptions {
            position?: ControlPosition;
            separator?: string;
            emptyString?: string;
            lngFirst?: boolean;
            numDigits?: number;
            lngFormatter?: string;
            latFormatter?: string;
            formatter?: string;
            prefix?: string;
            wrapLng?: string;
        }
    }

    namespace control {
        /**
         * Creates a mousposition control.
         */
        function mouseposition(options?: Control.MousePositionOptions): Control.MousePosition;
    }

    interface MapOptions {
        mousepositionControl?: boolean;
        MousePositionControlOptions?: Control.MousePositionOptions;
    }
}