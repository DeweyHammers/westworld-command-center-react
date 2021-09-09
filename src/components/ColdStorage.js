import React from "react";
import { Segment } from "semantic-ui-react";
import Host from "./Host";

const ColdStorage = ({ hosts }) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      {hosts.map((host) => (
        <Host host={host} />
      ))}
    </Segment>
  </Segment.Group>
);

export default ColdStorage;
