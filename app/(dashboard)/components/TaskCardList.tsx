import { Button } from "@/components/Button";
import Card from "@/components/Card";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { TASK_STATUS, Task } from "@prisma/client";
import { cookies } from "next/headers";

const getData = async () => {
  const user = await getUserFromCookie(cookies());
  const tasks = await db.task.findMany({
    where: {
      ownerId: user?.id,
      NOT: {
        status: TASK_STATUS.COMPLETED,
        deleted: false,
      },
    },
    take: 5,
    orderBy: { due: "asc" },
  });
  return tasks;
};

export const TaskCardList = async ({ title, tasks }: { title: string; tasks?: Task[] }) => {
  const data = tasks || (await getData());

  return (
    <Card>
      <div className="flex justify-between">
        <div>
          <span className="text-3xl text-gray-600">{title}</span>
        </div>
        <div>
          <Button intent="text" className="text-violet-600">
            + Create New
          </Button>
        </div>
      </div>
      {data.map((task) => (
        <div key={task.id} className="py-2">
          <div>
            <span className="text-gray-800">{task.name}</span>
          </div>
          <div>
            <span className="text-gray-400 text-sm">{task.description}</span>
          </div>
        </div>
      ))}
    </Card>
  );
};
