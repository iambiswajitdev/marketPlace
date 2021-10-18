import MegaMenu from "../../components/megaMenu";
import ProdactListingTable from "./prodactListingTable";
const ProdactListing = () => {
  return (
    <>
      <MegaMenu />
      <div className="w-full px-24 py-10">
        <h2 className="font-bold capitalize text-xl pb-2 mb-10 border-indigo-600 border-opacity-50 border-b-8">
          Prodact list
        </h2>
        <ProdactListingTable />
      </div>
    </>
  );
};

export default ProdactListing;
