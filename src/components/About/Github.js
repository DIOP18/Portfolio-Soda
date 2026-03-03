import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
        <Row
            style={{
                justifyContent: "center",
                paddingBottom: "10px",
                color: "white",
            }}
        >
            <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
                Mes <strong className="purple">Contributions GitHub</strong>
            </h1>

            <GitHubCalendar
                username="DIOP18"
                blockSize={30}
                blockMargin={8}
                color="#c084f5"
                fontSize={16}
            />
        </Row>
    );
}

export default Github;