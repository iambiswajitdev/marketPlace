import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

//REDUX
// import { useSelector } from "react-redux";

//COUNTRY
import CountryData from "../../data/country.json";
import UserMenu from "../../components/userMenu";
import Button from "../../components/button";
import Input from "../../components/input";
import { BsThreeDotsVertical } from "react-icons/bs";
import NumberFormat from "react-number-format";

const address = [
  {
    id: "1",
    type: "HOME",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "828104",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Dhanbad",
    state: "Jharkhand",
  },
  {
    id: "2",
    type: "office",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "828104",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Dhanbad",
    state: "Jharkhand",
  },
  {
    id: "3",
    type: "office",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "828104",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Dhanbad",
    state: "Jharkhand",
  },
  {
    id: "4",
    type: "office",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "828104",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Dhanbad",
    state: "Jharkhand",
  },
  {
    id: "5",
    type: "office",
    name: "Vaibhav Sinha",
    phone: "6205630243",
    pin: "828104",
    address:
      "S/o Mr Dilip Kumar Sinha Shyam Nagar, Bhuli Dhanbad, Near Aadarsh Vidya Mandir School",
    city: "Dhanbad",
    state: "Jharkhand",
  },
];

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

export default function Address() {
  const classes = useStyles();
  //   const state = useSelector((state) => state.AuthProvider);
  const [value, setValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dialCode, setDialCode] = React.useState(+1);
  const [showAddress, setShowAddress] = React.useState(false);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddressAdd = () => {
    setShowAddress(!showAddress);
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
        <UserMenu active={"address"} />
        <div className="flex-1 bg-white shadow-lg rounded py-2 mb-4 px-4 text-gray-600">
          <div className="flex justify-between gap-4 w-1/2 py-3">
            <div className="font-semibold text-lg">Manage Address</div>
          </div>
          <div className="mb-4">
            {!showAddress ? (
              <Button
                size={"small"}
                className="w-full my-auto text-xs"
                variant={"primary"}
                onClick={handleAddressAdd}
              >
                Add A New Address
              </Button>
            ) : (
              <div
                className="h-auto w-full my-3 p-3 pr-48"
                style={{ background: "rgba(200, 235, 228, 0.3)" }}
              >
                <span className="text-sm font-semibold uppercase text-gray-500">
                  Add a new address
                </span>
                <div className="my-2">
                  <div className="flex gap-5">
                    <div className="mb-5 flex-1">
                      {/* Name */}
                      <Input
                        placeholder="Name"
                        className={`mb-10px `}
                        name="name"
                        // value={state.user.customerName}
                        // onChange={onChange}
                      />
                    </div>
                    <div className="mb-5 flex-1 flex">
                      {/* Phone Number */}
                      <select
                        name="category"
                        id="category"
                        className="focus:outline-none w-12 bg-gray-200 rounded-l"
                        style={{ padding: "14px 6px" }}
                        onChange={handleCountrySelect}
                      >
                        {CountryData.map((item) => {
                          return (
                            <option
                              value={item.dialCode}
                              className="w-12 capitalize"
                              selected={item.dialCode === "+1"}
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
                        className="h-12 -ml-1 px-4 bg-gray-200 w-full h-12 placeholder-gray-500 border border-transparent rounded outline-none transition duration-200 text-gray-900 bg-gray-f7 focus:placeholder-gray-900"
                        // onChange={handleChange}
                        onChange={(e) => console.log(e.target.value)}
                        // autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="mb-5 flex-1">
                      {/* Name */}
                      <select
                        name="category"
                        id="category"
                        className="focus:outline-none w-full bg-gray-200 rounded"
                        style={{ padding: "14px" }}
                      >
                        {CountryData.map((item) => {
                          return (
                            <option
                              value={item.code}
                              className="w-auto capitalize"
                            >
                              {item.emoji + " " + item.name}
                            </option>
                          );
                        })}
                        {/* );
                        })} */}
                      </select>
                    </div>
                    <div className="mb-5 flex-1">
                      {/* Phone Number */}
                      <Input
                        placeholder="Pin Code"
                        className={`mb-10px `}
                        name="pin"
                        // value={state.user.customerName}
                        // onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="flex mb-5">
                    <Input
                      placeholder="Address (Area and Street)"
                      className={`mb-10px `}
                      name="name"
                      // value={state.user.customerName}
                      // onChange={onChange}
                    />
                  </div>
                  <div className="flex gap-5">
                    <div className="mb-5 flex-1">
                      {/* Name */}
                      <Input
                        placeholder="City"
                        className={`mb-10px `}
                        name="name"
                        // value={state.user.customerName}
                        // onChange={onChange}
                      />
                    </div>
                    <div className="mb-5 flex-1">
                      {/* Phone Number */}
                      <Input
                        placeholder="State"
                        className={`mb-10px `}
                        name="name"
                        // value={state.user.customerName}
                        // onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <span className="text-xs text-gray-700">Address Type</span>
                    <RadioGroup
                      aria-label="gender"
                      name="home"
                      value={value}
                      onChange={handleRadioChange}
                      classes={{ root: classes.radio }}
                    >
                      <div className="flex">
                        <FormControlLabel
                          value="home"
                          control={<StyledRadio />}
                          label="Home"
                        />
                        <FormControlLabel
                          value="office"
                          control={<StyledRadio />}
                          label="Office"
                        />
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-5 flex w-1/2 gap-4">
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
                        variant={"elevation"}
                        onClick={handleAddressAdd}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {address.map((item) => {
            const { id, type, name, phone, pin, address, city, state } = item;
            return (
              <div
                className="h-auto border w-full p-3 overflow-hidden bg-white -mt-px"
                key={id}
              >
                <div className="flex justify-between pb-2">
                  <div className="py-1 px-2 bg-gray-200 text-xs uppercase rounded text-gray-700">
                    {type}
                  </div>
                  <div
                    className=""
                    onClick={handleClick}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                  >
                    <BsThreeDotsVertical />
                  </div>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </div>
                <div className="flex text-sm font-semibold gap-4 pb-2">
                  <div>{name}</div>
                  <div>{phone}</div>
                </div>
                <div className="text-sm w-2/3">
                  {address + ", " + city + ", " + state + " - "}{" "}
                  <span className="font-semibold">{pin}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
