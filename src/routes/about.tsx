import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/features";

export const Route = createFileRoute("/about")({
  component: About,
});
