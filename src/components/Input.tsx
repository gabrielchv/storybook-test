import React from "react";

const Input = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <label>{children}</label>
      <input></input>
    </>
  );
};

export default Input;
