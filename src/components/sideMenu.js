import React from "react";
import { useSelector } from "react-redux";
// FaTshirt;
import { HiChevronRight } from "react-icons/hi";

//ICONS
import { IoShirtOutline } from "react-icons/io5";
import { RiVipDiamondLine } from "react-icons/ri";

export default function SideMenu() {
  const state = useSelector((state) => state.AuthProvider);
  const [show, setShow] = React.useState(false);
  const [id, setId] = React.useState(null);

  let menuData = [];
  state.category &&
    state.category.map((item) => {
      return menuData.push(item);
    });

  const handleOver = (e) => {
    setShow(true);
    setId(e.id);
  };

  const handleOut = () => {
    setShow(false);
    setId(null);
  };
  return (
    <div className="w-80">
      <div
        className="h-auto divide divide-y text-gray-600 bg-white rounded shadow-2xl"
        onMouseLeave={handleOut}
      >
        {menuData.map((item) => (
          <div
            className=" flex flex-row justify-between px-2 cursor-default hover:bg-gray-300 relative"
            onMouseOver={() => handleOver(item)}
            // onMouseOut={handleOut}
            key={item.id}
            id={item.id}
          >
            <div className="py-2 flex flex-row gap-2">
              <div className="my-auto">
                <IoShirtOutline />
              </div>
              <div>{item.catName}</div>
            </div>
            {item.subcategory.length ? (
              <>
                <div className="my-auto">
                  <HiChevronRight />
                </div>
                {id === item.id && (
                  <div
                    className={`absolute bg-white divide divide-y -right-72 rounded shadow-2xl z-50 w-72 flex flex-col overflow-hidden 
                  ${show ? "block" : "hideen"}`}
                    onClick={handleOut}
                  >
                    {item.subcategory.map((item) => (
                      <div
                        className="flex flex-row justify-between px-2 hover:bg-gray-200"
                        key={item.id}
                      >
                        <div className="py-2 flex flex-row gap-2">
                          <div className="my-auto">
                            <RiVipDiamondLine />
                          </div>
                          <div>{item.subCatName}</div>
                        </div>
                        <div className="my-auto">
                          <HiChevronRight />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
