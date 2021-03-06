import MegaMenu from "../../components/megaMenu";
import * as API from "../../helpers/api";
import DashBoardTable from "./dashBoardTable";

const DashBoard = () => {
  // const dashBoardReport = async () => {
  //   try {
  //     const res = await API.vendor_dashBoard_Report;
  //     console.log("Dashbordrr", res);
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };
  const dashBoard = [
    {
      heading: "Total Sale",
      total: 5040,
      icon: <i class="fas fa-money-bill-wave"></i>,
    },
    {
      heading: "Visitors",
      total: 2354,
      icon: <i class="fas fa-money-bill-wave"></i>,
    },
    {
      heading: "new orders",
      total: 8959,
      icon: <i class="fas fa-money-bill-wave"></i>,
    },
    {
      heading: "Customers",
      total: 78858,
      icon: <i class="fas fa-money-bill-wave"></i>,
    },
  ];

  return (
    <>
      <MegaMenu />
      <div className="w-full px-24 py-10 flex justify-between gap-4">
        {dashBoard.map((item, index) => (
          <div
            className="w-1/4 flex bg-white hover:bg-indigo-500 hover:text-white p-8 rounded-md shadow-2xl flex-row"
            key={index}
          >
            <div className="w-3/4">
              <h1 className="text-xl font-semibold capitalize">
                {item.heading}
              </h1>
              <p className="pt-5 text-xl text-green-500 font-semibold">
                {item.total}
              </p>
            </div>
            <div className="w-1/4">
              <div className="bg-gray-200 rounded-full p-2 h-16 w-16 justify-center items-center flex">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full px-24 py-10">
        <DashBoardTable />
      </div>
    </>
  );
};

export default DashBoard;
