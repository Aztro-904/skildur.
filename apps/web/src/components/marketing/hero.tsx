"use client";

import Link from "next/link";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


export function Hero() {
  return (
    <section className="relative overflow-hidden pt-44">

      {/* Atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-200px]
          -z-10
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/20
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          border
          border-indigo-400/10
          opacity-50
        "
      />


      <div className="mx-auto max-w-7xl px-6 text-center">


        <div className="mx-auto max-w-5xl">


          <p
            className="
              mb-8
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-indigo-400
            "
          >
            The Intelligent Workspace
          </p>


          <h1
  className="
    text-5xl
    font-semibold
    leading-[1.05]
    tracking-[-0.06em]
    text-white
    md:text-7xl
  "
>
  <AnimatedHeading
    hero
    text="Your work,"
    
    className="inline"
  />

  <br />

  <span className="text-indigo-400">
    <AnimatedHeading
      hero
      text="connected."
      
      className="inline"
    />
  </span>
</h1>


          <div
            className="
              mt-10
              flex
              justify-center
              gap-4
            "
          >

            <Link
              href="/signup"
              className="
                rounded-full
                bg-indigo-500
                px-7
                py-3
                font-medium
                text-white
                shadow-[0_0_50px_rgba(99,102,241,0.35)]
                transition
                hover:-translate-y-0.5
                hover:bg-indigo-400
              "
            >
              Get Started
            </Link>


            <Link
              href="#product"
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-7
                py-3
                font-medium
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/[0.08]
              "
            >
              Explore Skildur
            </Link>

          </div>

        </div>



        {/* Product frame preview */}
        <div
          className="
            relative
            mt-24
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-4
            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
            backdrop-blur-xl
          "
        >

          <div
            className="
              absolute
              inset-0
              rounded-3xl
              bg-gradient-to-b
              from-indigo-500/10
              via-transparent
              to-transparent
            "
          />


          <div
            className="
              relative
              aspect-video
              rounded-2xl
              border
              border-white/10
              bg-black/50
            "
          >

            <div
              className="
                flex
                h-full
                items-center
                justify-center
                text-zinc-600
              "
            >
              Skildur Workspace
            </div>

          </div>

        </div>


      </div>

    </section>
  );
}