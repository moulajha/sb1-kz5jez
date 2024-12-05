import NodeCache from 'node-cache';

export const cacheConfig = {
  stdTTL: 600, // 10 minutes
  checkperiod: 120, // Cleanup every 2 minutes
  maxKeys: 1000,
  useClones: false
};

export const cache = new NodeCache(cacheConfig);