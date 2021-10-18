import MegaMenu from "../../components/megaMenu";
import OrderListTable from "./orderListTable";

const OrderListing = () => {
  return (
    <>
      <MegaMenu />
      <div className="w-full px-24 py-10">
        <h2 className="font-bold capitalize text-xl pb-2 mb-10 border-indigo-600 border-opacity-50 border-b-8">
          order list
        </h2>
        <OrderListTable />
      </div>
    </>
  );
};

export default OrderListing;
