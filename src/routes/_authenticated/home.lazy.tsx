import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/home')({
  component: () => <div>Hello /_authenticated/home!</div>
})