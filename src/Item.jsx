import React from "react";

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{
          color: "red",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          fontSize: "30px",
        }}
      >
        <i className="fas fa-times"></i>
      </button>
    </li>
  );
}

export default Item;
