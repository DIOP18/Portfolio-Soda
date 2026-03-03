import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Ingénieure Logicielle",
                    "Étudiante en Master SSI",
                    "Développeuse Full-Stack",
                    "Passionnée de Cybersécurité",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;