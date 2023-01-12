import React from "react";

function NewComp(props) {
  return (
    <p className="text-2xl">
      Hello, {props.name} {props.className}
    </p>
  );
}

export { NewComp };
