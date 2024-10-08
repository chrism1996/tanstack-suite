/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CImport } from './routes/c'
import { Route as BImport } from './routes/b'
import { Route as AImport } from './routes/a'
import { Route as AuthImport } from './routes/_auth'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgotPasswordImport } from './routes/auth/forgot-password'
import { Route as AuthConfirmPasswordImport } from './routes/auth/confirm-password'

// Create Virtual Routes

const UsersLazyImport = createFileRoute('/users')()
const AuthHomeLazyImport = createFileRoute('/_auth/home')()

// Create/Update Routes

const UsersLazyRoute = UsersLazyImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/users.lazy').then((d) => d.Route))

const CRoute = CImport.update({
  path: '/c',
  getParentRoute: () => rootRoute,
} as any)

const BRoute = BImport.update({
  path: '/b',
  getParentRoute: () => rootRoute,
} as any)

const ARoute = AImport.update({
  path: '/a',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AuthHomeLazyRoute = AuthHomeLazyImport.update({
  path: '/home',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/home.lazy').then((d) => d.Route))

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  path: '/auth/forgot-password',
  getParentRoute: () => rootRoute,
} as any)

const AuthConfirmPasswordRoute = AuthConfirmPasswordImport.update({
  path: '/auth/confirm-password',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/a': {
      id: '/a'
      path: '/a'
      fullPath: '/a'
      preLoaderRoute: typeof AImport
      parentRoute: typeof rootRoute
    }
    '/b': {
      id: '/b'
      path: '/b'
      fullPath: '/b'
      preLoaderRoute: typeof BImport
      parentRoute: typeof rootRoute
    }
    '/c': {
      id: '/c'
      path: '/c'
      fullPath: '/c'
      preLoaderRoute: typeof CImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersLazyImport
      parentRoute: typeof rootRoute
    }
    '/auth/confirm-password': {
      id: '/auth/confirm-password'
      path: '/auth/confirm-password'
      fullPath: '/auth/confirm-password'
      preLoaderRoute: typeof AuthConfirmPasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/forgot-password': {
      id: '/auth/forgot-password'
      path: '/auth/forgot-password'
      fullPath: '/auth/forgot-password'
      preLoaderRoute: typeof AuthForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/home': {
      id: '/_auth/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AuthHomeLazyImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AuthRoute: AuthRoute.addChildren({ AuthHomeLazyRoute }),
  ARoute,
  BRoute,
  CRoute,
  UsersLazyRoute,
  AuthConfirmPasswordRoute,
  AuthForgotPasswordRoute,
  AuthLoginRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/a",
        "/b",
        "/c",
        "/users",
        "/auth/confirm-password",
        "/auth/forgot-password",
        "/auth/login"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/home"
      ]
    },
    "/a": {
      "filePath": "a.tsx"
    },
    "/b": {
      "filePath": "b.tsx"
    },
    "/c": {
      "filePath": "c.tsx"
    },
    "/users": {
      "filePath": "users.lazy.tsx"
    },
    "/auth/confirm-password": {
      "filePath": "auth/confirm-password.tsx"
    },
    "/auth/forgot-password": {
      "filePath": "auth/forgot-password.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/_auth/home": {
      "filePath": "_auth/home.lazy.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
