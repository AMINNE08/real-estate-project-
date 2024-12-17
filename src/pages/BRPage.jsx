import { Select, Container, Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import MapSection from "../components/buy/MapSection";
import FilterSection from "../components/buy/FilterSection";
import { getAllProperties } from "../shared/api";
import PropertyListt from "../components/buy/PropertyListt";

const BRPage = () => {
  const [filters, setFilters] = useState({
    price: "",
    bedrooms: "",
    city: "",
    search: "",
  });
  const [propertyType, setPropertyType] = useState(""); // Default empty
  const [allProperties, setAllProperties] = useState([]);

  // Fetch properties from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProperties();

        // Normalize the "propertyType" key
        const cleanedData = data.map((property) => ({
          ...property,
          propertyType: property[" propertyType "] || property.propertyType, // Fix inconsistent key
        }));

        console.log("Fetched and Cleaned Properties:", cleanedData); // Debugging log
        setAllProperties(cleanedData);
      } catch (error) {
        console.error("Failed to fetch properties", error);
      }
    };

    fetchData();
  }, []);

  // Filter properties based on type and filters
  const filteredProperties = allProperties.filter((property) => {
    const matchesType =
      !propertyType || property.propertyType === propertyType; // Filter by Rent/Buy

    const matchesCity =
      !filters.city ||
      property.city.toLowerCase().includes(filters.city.toLowerCase());
    const matchesPrice =
      !filters.price || property.price <= Number(filters.price);
    const matchesBedrooms =
      !filters.bedrooms ||
      property.facilities.bedrooms === Number(filters.bedrooms);
    const matchesSearch =
      !filters.search ||
      property.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      property.address.toLowerCase().includes(filters.search.toLowerCase());

    return matchesType && matchesCity && matchesPrice && matchesBedrooms && matchesSearch;
  });

  return (
    <Container fluid>
      {/* Dropdown for Rent/Buy */}
      <Select 
        className="BRP-select"
        placeholder="Select Property Type"
        data={["Rent", "Buy"]}
        value={propertyType}
        onChange={setPropertyType}
        label="Property Type"
        mb="lg"
      />

      {/* Filter Section */}
      <FilterSection filters={filters} setFilters={setFilters} />

      {/* Main Content */}
      <Grid>
        {/* Map Section */}
        <Grid.Col span={4}>
          <MapSection properties={filteredProperties} />
        </Grid.Col>

        {/* Property Listings */}
        <Grid.Col span={8}>
          <PropertyListt properties={filteredProperties} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default BRPage;
