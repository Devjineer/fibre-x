import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/home/nav";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Nav />
    </>
  );
}
