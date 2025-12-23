"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Avatars() {
  return (
    <section className="flex justify-around gap-12 border-b p-12">
      <div className="flex flex-row flex-wrap items-center gap-12">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/sajadevo.png" alt="@sajadevo" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
          <Avatar size="sm">
            <AvatarImage
              src="https://github.com/sajadevo.png"
              alt="@sajadevo"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/wesbos.png" alt="@wesbos" />
            <AvatarFallback>WB</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-12">
        <Avatar>
          <AvatarImage src="https://github.com/sajadevo.png" alt="@sajadevo" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/sajadevo.png"
              alt="@sajadevo"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/wesbos.png" alt="@wesbos" />
            <AvatarFallback>WB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-12">
        <Avatar size="lg">
          <AvatarImage src="https://github.com/sajadevo.png" alt="@sajadevo" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-3 *:data-[slot=avatar]:ring-2">
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/sajadevo.png"
              alt="@sajadevo"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/wesbos.png" alt="@wesbos" />
            <AvatarFallback>WB</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}
