import { prisma } from "@/prisma/prisma-client";
import { ProfileForm } from "@/shared/components";
import { getUserSession } from "@/shared/lib";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function ProfilePage() {
  const session = await getUserSession();
  if (!session) {
    return redirect("/not-auth");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session.id),
    },
  });
  if (!user) {
    return redirect("/not-auth");
  }
  return (
    <Suspense>
      <ProfileForm data={user} />
    </Suspense>
  );
}
