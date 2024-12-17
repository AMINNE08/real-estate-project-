import { TextInput, Button, Group } from "@mantine/core";

const FilterSection = ({ filters, setFilters }) => {
    
  return (
    <Group grow>
      <TextInput
        placeholder="City"
        label="City"
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      />

      <TextInput
        placeholder="Max Price"
        label="Price"
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
      />

      <TextInput
        placeholder="Bedrooms"
        label="Bedrooms"
        value={filters.bedrooms}
        onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
      />

      <TextInput
        placeholder="Search by title or address"
        label="Search"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <Button color="blue" style={{ marginTop: "28px" }}>
        Search
      </Button>
    </Group>
  );
};

export default FilterSection;
