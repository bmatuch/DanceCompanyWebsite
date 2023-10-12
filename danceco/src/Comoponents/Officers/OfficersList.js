import React from "react";
import Collapsible from "react-collapsible";

const OfficerList = ({ officers }) => {
  return (
    <ul className="list-unstyled">
      {officers.map((officer) => (
        <p key={officer.id}>
          <li>
            {officer.get("firstName")} {officer.get("lastName")}
            <br />
            Role: {officer.get("role")}
            <Collapsible trigger={<button className="button">Learn what dances {officer.get("firstName")} is choreographing!</button>}>
              <p>{officer.get("favorite")}</p>
            </Collapsible>
          </li>
        </p>
      ))}
    </ul>
  );
};

export default OfficerList;
