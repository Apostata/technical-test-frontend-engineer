import React, { useRef } from "react";

interface IsearchItem {
  setQuerySting: (queryString: string) => void;
}

export default function SearchItem({ setQuerySting }: IsearchItem) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setQuerySting(inputRef.current?.value ?? "");
      }}
    >
      <input ref={inputRef} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setQuerySting(inputRef.current?.value ?? "");
        }}
      >
        Pesquisar
      </button>
    </form>
  );
}
