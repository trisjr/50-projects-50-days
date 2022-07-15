import React, { ChangeEvent, useState } from "react";
import { useTitle } from "../hooks/useTitle";
import { MdClose, MdEditNote } from "react-icons/md";

const Note = ({
  value = "",
  setValue = () => {},
  action = () => {},
}: {
  value: string;
  setValue?: (value: string) => void;
  action?: () => void;
}) => {
  const [submit, setSubmit] = useState<boolean>(true);
  const handleSetSubmit = () => {
    setSubmit(!submit);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    return setValue(event.target.value);
  };

  return (
    <div
      className={
        "bg-white my-[30px] mx-[20px] h-[400px] w-[400px] rounded overflow-hidden"
      }
    >
      <div className={"bg-blue-900 flex justify-end p-2"}>
        <button
          className={"text-2xl text-white ml-2"}
          type={"button"}
          onClick={handleSetSubmit}
        >
          <MdEditNote />
        </button>
        <button
          className={"text-2xl text-white ml-2"}
          type={"button"}
          onClick={action}
        >
          <MdClose />
        </button>
      </div>
      {submit ? (
        <textarea
          value={value}
          onChange={handleChangeValue}
          className={
            "p-8 active:outline-none focus:outline-none w-full h-[360px] overflow-"
          }
        />
      ) : (
        <div className={"p-8 w-full h-full italic min-w-full"}>{value}</div>
      )}
    </div>
  );
};

function NotesApp() {
  useTitle("Notes App");
  const [notes, setNotes] = useState<any[]>([]);
  const handleCreateNote = () => {
    setNotes([...notes, ""]);
  };
  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((_, index) => index !== id));
  };

  return (
    <div
      className={"bg-sky-100 flex flex-wrap pt-[66px] min-h-screen w-screen"}
    >
      <button
        className={
          "text-white bg-blue-900 shadow-lg font-bold fixed top-20 right-4 rounded py-2 px-4 active:scale-95"
        }
        type={"button"}
        onClick={handleCreateNote}
      >
        Add note
      </button>
      {notes.map((item, index) => (
        <Note
          key={index}
          value={item}
          setValue={(value: string) => {
            setNotes(
              notes.map((note, num) => {
                if (num === index) {
                  return value;
                } else {
                  return note;
                }
              })
            );
          }}
          action={() => {
            handleDeleteNote(index);
          }}
        />
      ))}
    </div>
  );
}

export default NotesApp;
