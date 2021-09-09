import React from "react";
import "../stylesheets/Host.css";
import { Card } from "semantic-ui-react";

const Host = ({ host }) => {
  return (
    <Card
      className="host selected"
      onClick={null}
      image={host.imageUrl}
      raised
    />
  );
};

export default Host;
