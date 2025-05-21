export function assetsHelper(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/car-finder-filter' : '';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}