"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Link2,
  Search,
  X,
} from "lucide-react";

import { objects } from "@/features/objects/data";


interface LinkObjectButtonProps {
  linkedObjects?: string[];
  onLink?: (id: string) => void;
}


export function LinkObjectButton({
  linkedObjects = [],
  onLink,
}: LinkObjectButtonProps) {


  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");



  useEffect(() => {

    function handleClick(event: MouseEvent) {

      const target = event.target as HTMLElement;

      if (!target.closest("[data-link-picker]")) {
        setOpen(false);
      }

    }


    document.addEventListener(
      "mousedown",
      handleClick
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClick
      );

    };

  }, []);




  const filtered = objects.filter((object) =>
    object.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );



  return (

    <div
      data-link-picker
      className="relative"
    >


      <button

        onClick={() => setOpen((value)=>!value)}

        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/[0.08]
          bg-white/[0.03]
          px-3
          py-2
          text-sm
          text-white/70
          transition
          hover:bg-white/[0.06]
          hover:text-white
        "

      >

        <Link2 size={15}/>

        Link Object


      </button>





      {open && (

        <div

          className="
            absolute
            left-0
            top-12
            z-50
            w-80
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.1]
            bg-[#101012]
            shadow-2xl
          "

        >



          {/* Search */}


          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-white/[0.08]
              px-3
              py-3
            "
          >


            <Search
              size={15}
              className="text-white/35"
            />



            <input

              autoFocus

              value={query}

              onChange={(e)=>
                setQuery(e.target.value)
              }

              placeholder="Search objects..."

              className="
                flex-1
                bg-transparent
                text-sm
                text-white
                outline-none
                placeholder:text-white/30
              "

            />



            <button

              onClick={()=>{
                setQuery("");
                setOpen(false);
              }}

              className="
                text-white/30
                hover:text-white
              "

            >

              <X size={14}/>

            </button>



          </div>






          {/* Results */}


          <div
            className="
              max-h-80
              overflow-y-auto
              p-2
            "
          >


            {filtered.length === 0 ? (

              <p
                className="
                  px-3
                  py-5
                  text-center
                  text-sm
                  text-white/35
                "
              >
                No objects found
              </p>


            ) : (


              filtered.map((object)=>{


                const selected =
                  linkedObjects.includes(object.id);



                return (


                  <button

                    key={object.id}

                    onClick={()=>{
                      onLink?.(object.id);
                    }}

                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-3
                      py-3
                      text-left
                      transition
                      hover:bg-white/[0.05]
                    "

                  >


                    <div>

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




                    {selected && (

                      <Check
                        size={15}
                        className="text-white/60"
                      />

                    )}



                  </button>


                );


              })

            )}


          </div>



        </div>

      )}


    </div>

  );
}