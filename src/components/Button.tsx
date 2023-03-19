import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  påClick: () => void;
}

const Button = ({ children, påClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={påClick}>
      {children}
    </button>
  );
};

export default Button;
