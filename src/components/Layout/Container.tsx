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
        maxWidth: "1000px",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      {children}
    </article>
  );
}

export default Container;
