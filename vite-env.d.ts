/// <reference types="vite/client" />


declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

declare module '*?responsive' {
    import type { ResponsiveImageAsset } from './src/utils/responsiveImages'
    const image: ResponsiveImageAsset
    export default image
}

interface ImportMeta {
    glob(pattern: string): Record<string, () => Promise<any>>;
}

