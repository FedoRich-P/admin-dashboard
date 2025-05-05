export const PATH = {
  HOME: '/',
  LOGIN: '/login',
  USERS: '/users',
  PRODUCTS: '/products',
  PROFILE: '/profile',
  ERROR: '*'
} as const;

export type PathKey = keyof typeof PATH;
export type PathValue = typeof PATH[PathKey];

