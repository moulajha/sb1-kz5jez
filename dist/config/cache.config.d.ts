import NodeCache from 'node-cache';
export declare const cacheConfig: {
    stdTTL: number;
    checkperiod: number;
    maxKeys: number;
    useClones: boolean;
};
export declare const cache: NodeCache;
