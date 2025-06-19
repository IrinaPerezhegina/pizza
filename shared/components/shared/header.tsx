"use client";

import { cn } from "@/shared/lib/utils";
import { User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import * as React from "react";
import toast from "react-hot-toast";
import { Button } from "../ui";
import { CartButton } from "./cart-button";
import { Container } from "./container";
import { SearchInput } from "./search-input";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  hasCart = true,
  hasSearch = true,
  className,
}) => {
  const { data: session } = useSession();
  console.log(session);

  const searchParams = useSearchParams();
  React.useEffect(() => {
    if (searchParams.has("paid")) {
      setTimeout(() => {
        toast.success("Заказ успешно оплачен! Информация отправлена на почту.");
      }, 500);
    }
  }, []);

  return (
    <header className={cn("border-b ", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image
              alt="logo"
              src={"/assets/images/logo.png"}
              width={35}
              height={35}
            />
            <div className="">
              <h1 className="text-2xl uppercase font-black"> Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда{" "}
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}
        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() =>
              signIn("github", { callbackUrl: "/", redirect: true })
            }
            variant={"outline"}
            className="flex items-center gap-1"
          >
            <User size={16} />
            Войти
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
