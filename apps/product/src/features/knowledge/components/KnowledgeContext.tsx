"use client";

import {
  Boxes,
  ChevronRight,
  Sparkles,
  Link2,
  Activity,
} from "lucide-react";

import { objects } from "@/features/objects/data";


interface KnowledgeContextProps {
  objectIds: string[];
}


export function KnowledgeContext({
  objectIds,
}: KnowledgeContextProps) {


  const linked = objects.filter((object) =>
    objectIds.includes(object.id)
  );



  return (

    <div className="flex h-full flex-col">


      {/* Header */}

      <div
        className="
          border-b
          border-white/[0.08]
          px-6
          py-5
        "
      >

        <h2
          className="
            text-sm
            font-semibold
            text-white
          "
        >
          Context
        </h2>


        <p
          className="
            mt-1
            text-sm
            text-white/40
          "
        >
          Connected information around this document.
        </p>


      </div>




      <div
        className="
          flex-1
          overflow-y-auto
          px-4
          py-5
        "
      >


        {/* Objects */}


        <section>


          <div
            className="
              mb-3
              flex
              items-center
              gap-2
            "
          >

            <Boxes
              size={15}
              className="text-white/45"
            />


            <h3
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.16em]
                text-white/35
              "
            >
              Connected Objects
            </h3>


          </div>





          {linked.length === 0 ? (

            <div
              className="
                rounded-xl
                border
                border-dashed
                border-white/[0.08]
                p-5
                text-center
              "
            >

              <Link2
                size={18}
                className="
                  mx-auto
                  text-white/25
                "
              />


              <p
                className="
                  mt-3
                  text-sm
                  text-white/40
                "
              >
                No connections yet.
              </p>


              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-white/25
                "
              >
                Link projects, data, and objects to
                give this document intelligence.
              </p>


            </div>


          ) : (


            <div className="space-y-2">


              {linked.map((object)=>(


                <button

                  key={object.id}

                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-3
                    py-3
                    transition
                    hover:bg-white/[0.04]
                  "

                >

                  <div className="text-left">


                    <p
                      className="
                        text-sm
                        font-medium
                        text-white
                      "
                    >
                      {object.title}
                    </p>


                    <p
                      className="
                        mt-1
                        text-xs
                        text-white/35
                      "
                    >
                      {object.type}
                    </p>


                  </div>



                  <ChevronRight

                    size={15}

                    className="
                      text-white/20
                      transition
                      group-hover:translate-x-0.5
                      group-hover:text-white/50
                    "

                  />


                </button>


              ))}


            </div>


          )}


        </section>





        {/* Intelligence */}

        <section
          className="
            mt-10
            border-t
            border-white/[0.08]
            pt-6
          "
        >


          <div
            className="
              mb-4
              flex
              items-center
              gap-2
            "
          >

            <Sparkles
              size={15}
              className="text-white/40"
            />


            <h3
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.16em]
                text-white/30
              "
            >
              Intelligence
            </h3>


          </div>



          <div
            className="
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.02]
              p-4
            "
          >

            <p
              className="
                text-sm
                text-white/50
              "
            >
              AI insights will appear here as Skildur
              understands your workspace.
            </p>


          </div>


        </section>





        {/* Activity */}

        <section
          className="
            mt-6
            border-t
            border-white/[0.08]
            pt-6
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.16em]
              text-white/30
            "
          >

            <Activity size={14}/>

            Activity


          </div>


          <p
            className="
              mt-3
              text-sm
              text-white/25
            "
          >
            Document history will appear here.
          </p>


        </section>



      </div>


    </div>

  );
}