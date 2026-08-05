"use client";

import {
  ChevronUp,
  Settings,
  LogOut,
  User,
} from "lucide-react";


export function UserMenu() {

  return (
    <div
      className="
        relative
      "
    >

      <button
        className="
          flex
          w-full
          items-center
          gap-3

          rounded-xl

          border
          border-[var(--white-06)]

          bg-[var(--white-03)]

          px-3
          py-2.5

          transition

          hover:bg-[var(--white-06)]
        "
      >

        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-lg

            bg-[var(--accent-soft)]

            text-xs

            font-semibold

            text-[color:var(--accent-text)]
          "
        >
          A
        </div>



        <div
          className="
            flex-1
            text-left
          "
        >

          <p
            className="
              text-sm
              font-medium
              text-[color:var(--foreground)]
            "
          >
            Azlan
          </p>


          <p
            className="
              text-[11px]
              text-[color:var(--white-35)]
            "
          >
            Free Plan
          </p>

        </div>



        <ChevronUp
          size={15}
          className="
            text-[color:var(--white-40)]
          "
        />

      </button>



      <div
        className="
          absolute
          bottom-14
          left-0

          hidden

          w-full

          rounded-xl

          border
          border-[var(--white-08)]

          bg-[var(--surface-deep)]

          p-1

          shadow-2xl
        "
      >

        <button
          className="
            flex
            w-full
            items-center
            gap-3

            rounded-lg

            px-3
            py-2

            text-sm

            text-[color:var(--white-60)]

            hover:bg-[var(--white-05)]
            hover:text-[color:var(--foreground)]
          "
        >

          <User size={15}/>

          Profile

        </button>



        <button
          className="
            flex
            w-full
            items-center
            gap-3

            rounded-lg

            px-3
            py-2

            text-sm

            text-[color:var(--white-60)]

            hover:bg-[var(--white-05)]
            hover:text-[color:var(--foreground)]
          "
        >

          <Settings size={15}/>

          Settings

        </button>



        <div
          className="
            my-1
            h-px
            bg-[var(--white-08)]
          "
        />



        <button
          className="
            flex
            w-full
            items-center
            gap-3

            rounded-lg

            px-3
            py-2

            text-sm

            text-red-400

            hover:bg-red-500/10
          "
        >

          <LogOut size={15}/>

          Sign out

        </button>


      </div>


    </div>
  );
}