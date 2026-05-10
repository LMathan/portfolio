import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Consistent <strong className="purple">Shipping Activity</strong>
      </h1>
      <div className="github-calendar-shell">
        <GitHubCalendar
          username="LMathan"
          blockSize={14}
          blockMargin={5}
          color="#1a6ea7"
          fontSize={14}
        />
      </div>
    </Row>
  );
}

export default Github;
