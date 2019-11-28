import React from "react";
import PropTypes from "prop-types";

const Content = ({ id, children, className, draggable }) => {
  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";
  const onDragStart = e => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
    const selectContentHeight = getComputedStyle(
      document.querySelector("#" + target.id)
    ).height;
  };

  const onDrag = e => {
    const dragTarget = e.target;
    const positionY = e.clientY;
  };

  const onDragOver = e => {
    e.stopPropagation();
    const dragOverTarget = e.target;
    dragOverTarget.parentNode.insertBefore(placeholder, dragOverTarget);
    console.log(dragOverTarget);
  };

  const onDragEnd = e => {
    const DragEndTarget = e.target;
    DragEndTarget.style.display = "block";
    console.log(DragEndTarget.parentNode.childNodes);
    //DragEndTarget.parentNode.removeChild(placeholder);
  };

  return (
    <div
      id={id}
      className={className}
      draggable={draggable}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {children}
    </div>
  );
};
Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  draggable: PropTypes.bool
};
Content.defaultProps = {
  className: "myContent",
  draggable: true
};

export default Content;
