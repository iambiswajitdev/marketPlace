import React from "react";

// ICONS
import { FaPowerOff } from "react-icons/fa";
import { BsFillPersonFill, BsFillFolderFill, BsPower } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { AiFillWallet, AiTwotoneContainer } from "react-icons/ai";

import { useHistory } from "react-router-dom";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import UserMenu from "../components/userMenu";

export default function Welcome() {
  const state = useSelector((state) => state.AuthProvider);
  const userData = state.user;
  const history = useHistory();
  const dispatch = useDispatch();

  //   const dispatch = useDispatch();

  return (
    <div
      className="py-4 px-24"
      // style={{ backgroundImage: `url(${login})` }}
    >
      <div className="flex flex-row gap-4">
        <UserMenu />
        <div className="border flex-1"></div>
      </div>
    </div>
  );
}
