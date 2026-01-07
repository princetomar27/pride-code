"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const projects = useQuery(api.projects.get);

  const createProject = useMutation(api.projects.create);

  return (
    <div className="">
      <h1>Home</h1>
      <Button onClick={() => createProject({ name: "Project 1" })}>
        Add New Project
      </Button>

      <div>
        {projects?.map((project) => (
          <div key={project._id}>
            {project.name} {project.importStatus} {project.ownerId}
          </div>
        ))}
      </div>
    </div>
  );
}
