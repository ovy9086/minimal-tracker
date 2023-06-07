import { Suspense } from "react";
import { Greeting } from "../components/Greeting";
import { GreetingsSkeleton } from "../components/GreetingSkeleton";
import { getUserFromCookie } from "@/lib/auth";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import Link from "next/link";
import { ProjectCard } from "../components/ProjectCard";
import { delay } from "@/lib/async";
import { TaskCardList } from "../components/TaskCardList";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const projects = await db.project.findMany({
    where: { ownerId: user?.id },
    include: {
      tasks: true,
    },
  });
  return { projects };
};

export default async function Page() {
  const { projects } = await getData();

  return (
    <div className="h-full w-full overflow-y-auto pr-6">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-column">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map((project) => (
            <div className="w-1/3 p-3" key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className="w-1/3 p-3">{/* new project here */}</div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <TaskCardList title="Upcoming" />
          </div>
        </div>
      </div>
    </div>
  );
}
