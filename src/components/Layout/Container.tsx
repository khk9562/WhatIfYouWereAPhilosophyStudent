import React from "react";

function Container({ children, isResult }: any) {
  return (
    <article
      style={
        !isResult
          ? {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "24px",
            }
          : {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "32px",
            }
      }
    >
      {children}
    </article>
  );
}

export default Container;
