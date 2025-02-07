/// <reference types="vite/client" />


declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';

interface ImportMeta {
    glob(pattern: string): Record<string, () => Promise<any>>;
}

