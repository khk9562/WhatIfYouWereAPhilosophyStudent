import React from "react";

function Container({ children }: any) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        height: "100%",
        padding: "24px",
      }}
    >
      {children}
    </article>
  );
}

export default Container;
