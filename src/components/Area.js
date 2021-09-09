import React from "react";
import "../stylesheets/Area.css";

const humanize = (str) => {
  let i,
    frags = str.split("_");
  for (i = 0; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join(" ");
};

const Area = ({ area }) => (
  <div className="area" id={area.name}>
    <h3 className="labels">{humanize(area.name)}</h3>
  </div>
);

Area.propTypes = {
  hosts: function (props, propName, componentName) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
