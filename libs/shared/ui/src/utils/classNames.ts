type ClassValue = string | undefined | null | false;

export function classNames(
  ...classes: (ClassValue | ClassValue[] | Record<string, boolean>)[]
): string {
  return classes
    .flatMap((cls) => {
      if (typeof cls === 'string') return cls;
      if (Array.isArray(cls)) return cls.filter(Boolean);
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, condition]) => condition)
          .map(([className]) => className);
      }
      return [];
    })
    .join(' ');
}
