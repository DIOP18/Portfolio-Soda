import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Ingénieure Logicielle",
                    "Développeuse Front-End",
                    "Développeuse Back-End",
                    "Développeuse Mobile",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 60,
            }}
        />
    );
}

export default Type;