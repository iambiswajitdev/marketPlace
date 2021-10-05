import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

//REDUX
import { useSelector } from "react-redux";
import UserMenu from "../../components/userMenu";
import { CameraAlt, Edit } from "@material-ui/icons";
import Button from "../../components/button";
import Input from "../../components/input";

import CountryData from "../../data/country.json";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#297162",
    width: "16px",
    height: "16px",
    borderRadius: "100%",
    "input:hover ~ &": {
      backgroundColor: "#1C4B42",
    },
  },
}));

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function Welcome() {
  const state = useSelector((state) => state.AuthProvider);
  const [showEdit, setShowEdit] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [dialCode, setDialCode] = React.useState("+91");
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleCountrySelect = (e) => {
    setDialCode(e.target.value);
  };

  return (
    <div
      className="py-4 px-24"
      // style={{ backgroundImage: `url(${login})` }}
    >
      <div className="flex flex-row gap-4">
        <UserMenu active={"account"} />
        <div className="flex-1 bg-white shadow-lg mb-4 rounded py-2 px-4 text-gray-600">
          <div className="flex justify-between gap-4 w-1/2 py-3">
            <div className="font-semibold text-lg">Personal Information</div>
            <div className="flex relative" onClick={handleEdit}>
              {edit ? (
                <div className="flex gap-2 absolute right-0">
                  <div className="w-1/2">
                    <Button
                      size={"small"}
                      className="w-full my-auto text-xs"
                      variant={"primary"}
                    >
                      Save
                    </Button>
                  </div>
                  <div className="w-1/2">
                    <Button
                      size={"small"}
                      className="w-full my-auto text-xs"
                      variant={"primary"}
                      onClick={handleEdit}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="my-auto cursor-pointer">
                  <Edit fontSize={"medium"} />
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 mt-5">
            <div>
              <div
                className="relative w-36 h-36 rounded-full"
                onMouseOver={() => setShowEdit(true)}
                onMouseLeave={() => setShowEdit(false)}
              >
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                  alt="dp"
                  className="shadow-lg w-36 h-36 rounded-full hover:opacity-50"
                />
                {showEdit && (
                  <div
                    className="w-36 h-36 absolute bg-transparent top-0 left-0 rounded-full flex flex-col justify-center cursor-pointer"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                  >
                    <div className="my-auto text-center text-white">
                      <div>
                        <CameraAlt fontSize={"small"} />
                      </div>
                      <div>Edit</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="my-4">
              <div className="mb-5">
                Name
                <Input
                  placeholder="Name"
                  className={`mb-10px ${!edit && "cursor-not-allowed"}`}
                  name="name"
                  readOnly={edit ? false : true}
                  value={state.user.customerName}
                  // onChange={onChange}
                />
              </div>

              <div className="mb-5">
                Phone Number
                <div className="flex">
                  <select
                    name="category"
                    id="category"
                    className="focus:outline-none bg-gray-200 rounded-l"
                    style={{ padding: "14px 12px", width: "60px" }}
                    onChange={handleCountrySelect}
                    defaultValue={dialCode}
                  >
                    {CountryData.map((item) => {
                      return (
                        <option
                          value={item.dialCode}
                          className="w-12 capitalize"
                          // selected={item.dialCode == "+91"}
                          key={item.unicode}
                        >
                          {item.emoji + item.name}
                        </option>
                      );
                    })}
                  </select>
                  <NumberFormat
                    format={`${dialCode} ##########`}
                    name="phone"
                    id="phoneNumber"
                    placeholder="Phone"
                    value={state.user.mobileNo.split(" ")[1]}
                    className="h-12 -ml-1 px-4 bg-gray-200 w-full h-12 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200 text-gray-900 bg-gray-f7 focus:placeholder-gray-900"
                    // onChange={handleChange}
                    // autoComplete="off"
                  />
                </div>
              </div>

              <div className="mb-5">
                Gender
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={value}
                  onChange={handleRadioChange}
                  classes={{ root: classes.radio }}
                >
                  <div className="flex">
                    <FormControlLabel
                      value="male"
                      control={<StyledRadio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<StyledRadio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<StyledRadio />}
                      label="Other"
                    />
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-5">
                Email
                <Input
                  placeholder="Email"
                  className={`mb-10px ${!edit && "cursor-not-allowed"}`}
                  name="email"
                  value={state.user.emailId}
                  readOnly
                  // onChange={onChange}
                />
              </div>
              {/* EMAIL
              Mobile
              NAME
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
