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
        padding: "0 24px",
        // marginBottom: "100px",
      }}
    >
      {children}
    </article>
  );
}

export default Container;
