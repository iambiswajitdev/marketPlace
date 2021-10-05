import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//REDUX
import { useSelector } from "react-redux";
import UserMenu from "../../components/userMenu";
import Button from "../../components/button";
import Input from "../../components/input";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(0, 0, 0, 0),
  },
  icon: {
    borderRadius: 0,
    width: 14,
    height: 14,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "rgba(200, 235, 228, 0.4)",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto gba(200, 235, 228, 1)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#297162",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#297162",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 14,
      height: 14,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#0E2621",
    },
  },
}));

function StyledCheckbox(props) {
  const classes = useStyles();

  // const className = classes.icon + classes.checkedIcon
  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

export default function PanCard() {
  const state = useSelector((state) => state.AuthProvider);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  };
  return (
    <div
      className="py-4 px-24"
      // style={{ backgroundImage: `url(${login})` }}
    >
      <div className="flex flex-row gap-4">
        <UserMenu active={"pan"} />
        <div className="flex-1 bg-white shadow-lg rounded py-2 px-4 mb-4 text-gray-600">
          <div className="flex justify-between gap-4 w-1/2 py-3">
            <div className="font-semibold text-lg">Pan Card Information</div>
          </div>
          <div className="w-1/2 mt-2">
            <div className="my-2">
              <div className="mb-5">
                Pan Card Number
                <Input
                  placeholder="Pan Card Number"
                  className={`mb-10px`}
                  name="name"
                  value={state.user.customerName}
                  // onChange={onChange}
                />
              </div>

              <div className="mb-5">
                Full Name
                <Input
                  placeholder="Full Name"
                  className={`mb-10px `}
                  name="name"
                  //   value={state.user.customerName}
                  // onChange={onChange}
                />
              </div>

              <div className="mb-5">
                Upload Pan Card{" "}
                <span className="text-xs">(Only JPEG file is allowed)</span>
                <Input
                  type="file"
                  placeholder="File Upload"
                  className={`mb-10px py-2 `}
                  name="file"
                  accept="image/jpeg"
                />
              </div>
            </div>
          </div>
          <div className="mb-5 flex">
            <div className="-mt-1">
              <StyledCheckbox handleChange={handleChange} />
            </div>
            <div className="text-sm text-black">
              I do hereby declare that PAN furnished/stated above is correct and
              belongs to me, registered as an account holder with
              www.marketplace.com. I further declare that I shall solely be held
              responsible for the consequences, in case of any false PAN
              declaration.
            </div>
          </div>
          <div className="w-auto">
            <Button
              size={"small"}
              className="w-32 my-auto text-xs"
              variant={"primary"}
              // onClick={handleEdit}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
