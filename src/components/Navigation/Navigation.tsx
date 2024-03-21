import React from "react";
import { Link } from "react-router-dom";
import { Irout } from "../../data/router/router";

interface IProp {
  items: Irout[];
}

export default function Navigation({ items }: IProp) {
  return (
    <nav>
      <ul>
        {items.map(({ title, path, id }) => (
          <li key={id}>
            <Link to={`${path}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
