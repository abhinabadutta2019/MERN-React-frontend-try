import React from "react";

function NotFound() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export { NotFound };
