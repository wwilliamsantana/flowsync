import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FlowSync",
    short_name: "FlowSync",
    description: "Modern SaaS platform for project management.",
    start_url: "/",
    display: "standalone",
    background_color: "#18181B",
  };
}
