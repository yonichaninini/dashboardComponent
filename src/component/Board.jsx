import React from "react";

const Board = ({ id, children, className, title }) => {
  const onDrop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    e.target.appendChild(card);
  };
  const onDragOver = e => {
    e.preventDefault();
  };

  return (
    <>
      <div
        id={id}
        className={className}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {children}
      </div>
    </>
  );
};

export default Board;
