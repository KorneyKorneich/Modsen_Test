declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
