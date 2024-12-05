export const formatMemoryUsage = (bytes: number): string => {
  return `${Math.round(bytes / 1024 / 1024)}MB`;
};

export const isMemoryThresholdExceeded = (
  used: NodeJS.MemoryUsage,
  threshold: number
): boolean => {
  return used.heapUsed > threshold;
};