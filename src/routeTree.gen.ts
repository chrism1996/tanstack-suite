/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as authAuthLoginImport } from './routes/(auth)/auth.login'

// Create Virtual Routes

const AuthenticatedIndexLazyImport = createFileRoute('/_authenticated/')()
const AuthenticatedHomeLazyImport = createFileRoute('/_authenticated/home')()
const authAuthForgotPasswordLazyImport = createFileRoute(
  '/(auth)/auth/forgot-password',
)()
const authAuthConfirmPasswordLazyImport = createFileRoute(
  '/(auth)/auth/confirm-password',
)()

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated.index.lazy').then((d) => d.Route),
)

const AuthenticatedHomeLazyRoute = AuthenticatedHomeLazyImport.update({
  path: '/home',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./routes/_authenticated/home.lazy').then((d) => d.Route),
)

const authAuthForgotPasswordLazyRoute = authAuthForgotPasswordLazyImport
  .update({
    path: '/auth/forgot-password',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(auth)/auth.forgot-password.lazy').then((d) => d.Route),
  )

const authAuthConfirmPasswordLazyRoute = authAuthConfirmPasswordLazyImport
  .update({
    path: '/auth/confirm-password',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() =>
    import('./routes/(auth)/auth.confirm-password.lazy').then((d) => d.Route),
  )

const authAuthLoginRoute = authAuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/home': {
      id: '/_authenticated/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AuthenticatedHomeLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/(auth)/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof authAuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/auth/confirm-password': {
      id: '/auth/confirm-password'
      path: '/auth/confirm-password'
      fullPath: '/auth/confirm-password'
      preLoaderRoute: typeof authAuthConfirmPasswordLazyImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/auth/forgot-password': {
      id: '/auth/forgot-password'
      path: '/auth/forgot-password'
      fullPath: '/auth/forgot-password'
      preLoaderRoute: typeof authAuthForgotPasswordLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedHomeLazyRoute,
    AuthenticatedIndexLazyRoute,
  }),
  authAuthLoginRoute,
  authAuthConfirmPasswordLazyRoute,
  authAuthForgotPasswordLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/auth/login",
        "/auth/confirm-password",
        "/auth/forgot-password"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/home",
        "/_authenticated/"
      ]
    },
    "/_authenticated/home": {
      "filePath": "_authenticated/home.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated.index.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/auth/login": {
      "filePath": "(auth)/auth.login.tsx"
    },
    "/auth/confirm-password": {
      "filePath": "(auth)/auth.confirm-password.lazy.tsx"
    },
    "/auth/forgot-password": {
      "filePath": "(auth)/auth.forgot-password.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
