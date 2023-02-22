import React from "react";

export default function DragArea(props) {
  

  const dragEnterHandler = (e) => {
    e.preventDefault();
    // setIsDraggedOver(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    // setIsDraggedOver(false);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragDropHandler = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) {
      props.addFile(file);
    }
  };

  //onDrop

  return (
    <div
      className="drag-area"
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dragDropHandler}
      onDragOver={dragOverHandler}
    >
      Drag your files here
    </div>
  );
}