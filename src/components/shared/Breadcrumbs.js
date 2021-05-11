import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const fullPath = () => {
    return [{ text: "Home", href: "/" }].concat(props.path);
  };

  const linkedNodes = () => {
    return fullPath().slice(0, fullPath().length - 1);
  };

  const finalNode = () => {
    return fullPath()[fullPath().length - 1];
  };

  return (
    <div className={"breadcrumbs"}>
      {linkedNodes().map((node) => {
        return (
          <span key={node.text}>
            <Link to={node.href} className={"breadcrumbs__item"}>
              {node.text}
            </Link>
            <span className={"breadcrumbs__delimiter"}>/</span>
          </span>
        );
      })}
      {finalNode().text}
    </div>
  );
};

export default Breadcrumbs;
