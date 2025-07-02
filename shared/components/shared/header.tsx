"use client";

import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import toast from "react-hot-toast";
import { CartButton } from "./cart-button";
import { Container } from "./container";
import { AuthModal } from "./modals";
import { ProfileButton } from "./profile-button";
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
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  React.useEffect(() => {
    let toastMessage = "";
    if (searchParams.has("paid")) {
      toastMessage = "Заказ успешно оплачен! Информация отправлена на почту.";
    }

    if (searchParams.has("verified")) {
      toastMessage = "Пoчта успешно подтверждена!";
    }
    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
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
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
