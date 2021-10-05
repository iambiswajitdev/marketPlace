import React, { useEffect, useState } from "react";
import {
  TextBoxCommonBase,
  InputBase,
  TextBoxDisable,
  TextBoxEnable,
} from "./../utils/theme";

export const defaultProps = {
  disabled: false,
  readOnly: false,
  className: "",
  placeholder: "",
  initialValue: "",
};

const Input = ({
  className,
  id,
  value,
  name,
  initialValue,
  disabled,
  readOnly,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [initValue, setInitValue] = useState(initialValue);

  const changeHandler = (event) => {
    if (disabled || readOnly) return;
    setInitValue(event.target.value);
    onChange && onChange(event);
  };

  const focusHandler = (e) => {
    onFocus && onFocus(e);
  };

  const blurHandler = (e) => {
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (value === undefined) return;
    setInitValue(value);
  }, [value]);

  const classNames =
    InputBase +
    " " +
    TextBoxCommonBase +
    " " +
    (disabled === true ? TextBoxDisable : TextBoxEnable) +
    " " +
    className;

  return (
    <React.Fragment>
      <label htmlFor={id} className="sr-only">
        {name}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={classNames}
        id={name}
        value={initValue}
        disabled={disabled}
        readOnly={readOnly}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        autoComplete="off"
        name={name}
        {...props}
      />
    </React.Fragment>
  );
};

Input.defaultProps = defaultProps;

export default Input;

// import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

// export default function ColorTextFields({
//   className,
//   id,
//   value,
//   name,
//   initialValue,
//   disabled,
//   readOnly,
//   placeholder,
//   onChange,
//   onFocus,
//   onBlur,
//   ...props
// }) {
//   const classes = useStyles();

//   const [initValue, setInitValue] = useState(initialValue);

//   const changeHandler = (event) => {
//     if (disabled || readOnly) return;
//     setInitValue(event.target.value);
//     onChange && onChange(event);
//   };

//   const focusHandler = (e) => {
//     onFocus && onFocus(e);
//   };

//   const blurHandler = (e) => {
//     onBlur && onBlur(e);
//   };

//   useEffect(() => {
//     if (value === undefined) return;
//     setInitValue(value);
//   }, [value]);

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       {/* <TextField
//         id="standard-secondary"
//         label="Standard secondary"
//         color="secondary"
//       /> */}
//       <TextField
//         id={name}
//         label={placeholder}
//         variant="filled"
//         color="secondary"
//         fullWidth
//         type="text"
//         // className=
//         // className={classNames}
//         value={initValue}
//         disabled={disabled}
//         readOnly={readOnly}
//         onChange={changeHandler}
//         onFocus={focusHandler}
//         onBlur={blurHandler}
//         autoComplete="off"
//         name={name}
//       />
//       {/* <TextField
//         id="outlined-secondary"
//         label="Outlined secondary"
//         variant="outlined"
//         color="secondary"
//       /> */}
//     </form>
//   );
// }
