import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/features";

export const Route = createFileRoute("/")({
  component: Home,
});
