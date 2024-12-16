import SearchBar from "../components/SearchBar/SearchBar";
import Item from "../components/item/Item";
import { PuffLoader } from "react-spinners";
import useProperties from "../hooks/UseProperties";
import "../styles/Listing.css"; 

const Listing = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex-center">
        <PuffLoader
          height="80"
          width="80"
          redius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <main className="main-container">
      <div className="section-container">
        <div>
          <SearchBar />
          <div className="grid-container">
            {data.map((property) => (
              <Item key={property.title} property={property} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;
