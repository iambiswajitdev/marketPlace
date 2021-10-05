import React from "react";
// import { ButtonVariants, ButtonSizes } from "./../utils/prop-types";
import {
  ButtonDisable,
  ButtonVariant,
  ButtonSize,
  ButtonBase2,
} from "./../utils/theme";

const defaultProps = {
  //   variant: "primary" as ButtonVariants,
  //   size: "normal" as ButtonSizes,
  //   type: "button" as React.ButtonHTMLAttributes<any>["type"],
  loading: false,
  disabled: false,
};

const Button2 = ({
  className,
  loading,
  variant,
  size,
  type,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const classNames =
    ButtonBase2 +
    " " +
    (disabled === true ? ButtonDisable : ButtonVariant[variant]) +
    " " +
    ButtonSize[size] +
    " " +
    className;

  const onClickHandler = (event) => {
    if (disabled || loading) return;
    onClick && onClick(event);
  };

  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      disabled={disabled}
      type={type}
      aria-label={type}
      {...props}
    >
      {!loading && children}
      {loading && (
        <div
          className="h-5 w-5 border-2 border-gray-400 border-t-2 rounded-full animate-spin"
          style={{ borderTopColor: "#000101" }}
        />
      )}
    </button>
  );
};

Button2.defaultProps = defaultProps;

export default Button2;
