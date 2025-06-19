import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import * as React from "react";
import { Button } from "../ui";

interface Props {
  text: string;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ text, className }) => {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {!session ? (
        <Button variant={"outline"} className="flex items-center gap-1">
          <User size={16} />
          Войти
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};
// 20:10:23
