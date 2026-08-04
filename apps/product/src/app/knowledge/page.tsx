"use client";

import { useEffect, useMemo, useState } from "react";

import { knowledgeItems as initialItems } from "@/features/knowledge/data";
import type { KnowledgeItem } from "@/features/knowledge/types";

import { KnowledgeWorkspace } from "@/features/knowledge/components/KnowledgeWorkspace";
import { KnowledgeSidebar } from "@/features/knowledge/components/KnowledgeSidebar";
import { KnowledgeHeader } from "@/features/knowledge/components/KnowledgeHeader";
import { KnowledgeContext } from "@/features/knowledge/components/KnowledgeContext";
import { Editor } from "@/features/knowledge/components/Editor";
import { LinkObjectButton } from "@/features/knowledge/components/LinkButton";
import { DocumentMenu } from "@/features/knowledge/components/DocumentMenu";


const STORAGE_KEY = "skildur-knowledge";


export default function KnowledgePage() {

  const [items, setItems] = useState<KnowledgeItem[]>(initialItems);

  const [selectedId, setSelectedId] = useState(
    initialItems[0]?.id ?? ""
  );


  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const parsed = JSON.parse(saved);

      setItems(parsed);
      setSelectedId(parsed[0]?.id ?? "");
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);



  const selected = useMemo(
    () =>
      items.find(
        (item) => item.id === selectedId
      ),
    [items, selectedId]
  );



  function createDocument() {

    const document: KnowledgeItem = {
      id: crypto.randomUUID(),
      title: "Untitled",
      type: "document",
      content: "",
      linkedObjects: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };


    setItems((current) => [
      ...current,
      document,
    ]);

    setSelectedId(document.id);
  }



  function renameDocument(id: string) {

    const document = items.find(
      (item) => item.id === id
    );

    if (!document) return;


    const title = prompt(
      "Rename document",
      document.title
    );


    if (!title?.trim()) return;


    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              title: title.trim(),
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  }



  function duplicateDocumentById(id: string) {

    const document = items.find(
      (item) => item.id === id
    );

    if (!document) return;


    const copy: KnowledgeItem = {
      ...document,
      id: crypto.randomUUID(),
      title: `${document.title} Copy`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };


    setItems((current) => [
      ...current,
      copy,
    ]);

    setSelectedId(copy.id);
  }



  function deleteDocumentById(id: string) {

    const remaining = items.filter(
      (item) => item.id !== id
    );


    setItems(remaining);


    if (selectedId === id) {

      setSelectedId(
        remaining[0]?.id ?? ""
      );

    }
  }



  function updateDocument(
    changes: Partial<KnowledgeItem>
  ) {

    if (!selected) return;


    setItems((current) =>
      current.map((item) =>
        item.id === selected.id
          ? {
              ...item,
              ...changes,
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  }



  function updateLinks(id: string) {

    if (!selected) return;


    updateDocument({
      linkedObjects:
        selected.linkedObjects.includes(id)
          ? selected.linkedObjects.filter(
              (item) => item !== id
            )
          : [
              ...selected.linkedObjects,
              id,
            ],
    });
  }



  if (!selected) {

    return (
      <KnowledgeWorkspace

        sidebar={
          <KnowledgeSidebar
            items={items}
            selectedId=""
            onSelect={setSelectedId}
            onCreate={createDocument}
            onRename={renameDocument}
            onDuplicate={duplicateDocumentById}
            onDelete={deleteDocumentById}
          />
        }

        context={
          <KnowledgeContext
            objectIds={[]}
          />
        }

      >

        <div className="flex h-full items-center justify-center">

          <div className="text-center">

            <h2 className="text-xl font-semibold text-white">
              No documents yet
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Create a document to start building your knowledge base.
            </p>

            <button
              onClick={createDocument}
              className="
                mt-6
                rounded-xl
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-black
              "
            >
              Create Document
            </button>

          </div>

        </div>

      </KnowledgeWorkspace>
    );
  }



  return (

    <KnowledgeWorkspace

      sidebar={
        <KnowledgeSidebar

          items={items}

          selectedId={selected.id}

          onSelect={setSelectedId}

          onCreate={createDocument}

          onRename={renameDocument}

          onDuplicate={duplicateDocumentById}

          onDelete={deleteDocumentById}

        />
      }


      context={
        <KnowledgeContext
          objectIds={selected.linkedObjects}
        />
      }

    >

      <div className="flex h-full flex-col">


        <KnowledgeHeader

          title={selected.title}

          content={selected.content}

          updatedAt={selected.updatedAt}

          onTitleChange={(title) =>
            updateDocument({
              title,
            })
          }


          menu={
            <DocumentMenu
              onRename={() =>
                renameDocument(selected.id)
              }
              onDuplicate={() =>
                duplicateDocumentById(selected.id)
              }
              onDelete={() =>
                deleteDocumentById(selected.id)
              }
            />
          }

        />



        <div className="flex-1 overflow-y-auto">

          <div className="mx-auto w-full max-w-4xl px-12">

            <div className="py-5">

              <LinkObjectButton

                linkedObjects={selected.linkedObjects}

                onLink={updateLinks}

              />

            </div>


            <Editor

              item={selected}

              onChange={(content) =>
                updateDocument({
                  content,
                })
              }

            />

          </div>

        </div>


      </div>


    </KnowledgeWorkspace>

  );
}