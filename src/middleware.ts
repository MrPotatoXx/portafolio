import { defineMiddleware } from 'astro/middleware';

const SUPPORTED = ['es', 'en'] as const;

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Serve a proper favicon to avoid dynamic route warnings
  if (url.pathname === '/favicon.ico') {
    return Response.redirect(new URL('/favicon.png', url), 307);
  }

  // Language-based redirect at root path only
  if (url.pathname === '/') {
    const accept = context.request.headers.get('accept-language') ?? '';
    const langs = accept
      .split(',')
      .map((p) => p.split(';')[0].trim().toLowerCase())
      .filter(Boolean);
    const base = langs.map((l) => l.split('-')[0]);
    const choice = (base.find((l) => (SUPPORTED as readonly string[]).includes(l)) ?? 'es') as typeof SUPPORTED[number];
    return Response.redirect(new URL(`/${choice}/`, url), 307);
  }

  return next();
});
