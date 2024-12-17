import { Grid } from "@mantine/core";
import Item from "../item/Item"; // Assuming Item is in the folder path `components/item`

const PropertyListt = ({ properties }) => {
    console.log("Filtered Properties:", properties); // Debug log
    return (
      <Grid className="property-list-container">
        {properties.length > 0 ? (
          properties.map((property) => (
            <Grid.Col key={property._id} span={6}>
              <Item property={property} />
            </Grid.Col>
          ))
        ) : (
          <div>No properties found.</div>
        )}
      </Grid>
    );
  };

export default PropertyListt;
