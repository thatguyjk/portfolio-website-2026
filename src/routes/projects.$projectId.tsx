import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  loader: ({ params }) => { return params; },
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams();

  return <div>This is project {projectId}!</div>
}
