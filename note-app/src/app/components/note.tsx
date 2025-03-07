"use client";

import { useEffect, useRef, useState } from "react";

interface INote {
  id: number;
  note: string;
  date: string;
}

function NoteApp() {
  const [notes, setNotes] = useState<INote[]>([]);
  const [textnotes, settextnotes] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // for saved data
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  // for storing notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  const addnote = () => {
    if (textnotes.trim() === "") return;
    const newNotes: INote = {
      id: Date.now(),
      note: textnotes,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNotes]);
    settextnotes("");
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase text-center">
          Notes
        </h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            ref={inputRef}
            onChange={(e) => settextnotes(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a note"
          />
          <button
            onClick={addnote}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add Note
          </button>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
        {notes.map((note) => (
          <li key={note.id.toString()} className="py-4">
            <div className=" items-center ">
              <div className="flex justify-between">
                <p>{note.note}</p>

                <button
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 text-white text-sm py-1 px-2 rounded"
                  onClick={() => deleteNote(note.id)}
                >
                  delete Note
                </button>
              </div>
              <small className="text-gray-500 mr-2">{note.date}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteApp;
