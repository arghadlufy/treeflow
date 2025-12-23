import { caller } from "@/trpc/server";
import Client from "./client";

export default async function Home() {
  const users = await caller.getUsers();

  return (
    <div>
      {JSON.stringify(users)}
      <Client />
    </div>
  );
}
