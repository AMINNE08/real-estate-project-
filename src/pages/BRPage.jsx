import  { useState } from "react";
import {
  Container,
  Grid,
  TextInput,
  Button,
  Card,
  Image,
  Text,
  Badge,
  Group,
  SegmentedControl,
} from "@mantine/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../styles/BRPage.css";
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'


const rentalProperties = [
  {
    id: 1,
    type: "Rent",
    title: "Williamsburg Mishawaka",
    address: "302 Village Dr",
    price: "$1,011+",
    bedrooms: 1,
    image: img1,
  },
  {
    id: 2,
    type: "Rent",
    title: "The District at Forestville",
    address: "2723 Lorring Dr",
    price: "$1,225+",
    bedrooms: 1,
    image: img2,
  },
];

const buyProperties = [
  {
    id: 3,
    type: "Buy",
    title: "Sunnyvale Villa",
    address: "789 Ocean View Dr",
    price: "$350,000",
    bedrooms: 3,
    image: img3,
  },
  {
    id: 4,
    type: "Buy",
    title: "Downtown Condo",
    address: "123 Downtown Ave",
    price: "$450,000",
    bedrooms: 2,
    image: img4,
  },
];

const BRPage = () => {
  const [filters, setFilters] = useState({ price: "", bedrooms: "" });
  const [propertyType, setPropertyType] = useState("Rent");

  const propertiesToDisplay =
    propertyType === "Rent" ? rentalProperties : buyProperties;

  return (
    <Container fluid>
      <div className="hea">
        <SegmentedControl
          fullWidth
          data={[
            { label: "Rent", value: "Rent" },
            { label: "Buy", value: "Buy" },
          ]}
          value={propertyType}
          onChange={setPropertyType}
        />
      </div>

      {/* Search Bar and Filters */}
      <Grid mb="md">
        <Grid.Col span={4}>
          <TextInput
            placeholder="Address, neighborhood, city, ZIP"
            label="Search"
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            placeholder="Max Price"
            label="Price"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: e.target.value })
            }
          />
        </Grid.Col>
        <Grid.Col span={3}>
          <TextInput
            placeholder="Bedrooms"
            label="Bedrooms"
            value={filters.bedrooms}
            onChange={(e) =>
              setFilters({ ...filters, bedrooms: e.target.value })
            }
          />
        </Grid.Col>
        <Grid.Col span="content">
          <Button>Search</Button>
        </Grid.Col>
      </Grid>

      {/* Map and Listings */}
      <Grid>
        {/* Map Section */}
        <Grid.Col span={4}>
          <div className="map-container">
            <MapContainer
              center={[37.7749, -122.4194]}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[37.7749, -122.4194]}>
                <Popup>Example Property</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Grid.Col>

        {/* Property Listings Section */}
        <Grid.Col span={8}>
          <Grid>
            {propertiesToDisplay
              .filter((property) => {
                // Filter by price
                if (
                  filters.price &&
                  parseInt(property.price.replace(/\D/g, "")) >
                    parseInt(filters.price)
                ) {
                  return false;
                }
                // Filter by bedrooms
                if (
                  filters.bedrooms &&
                  property.bedrooms !== parseInt(filters.bedrooms)
                ) {
                  return false;
                }
                return true;
              })
              .map((property) => (
                <Grid.Col key={property.id} span={6}>
                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                      <Image
                        src={property.image}
                        alt={property.title}
                        height={160}
                      />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text weight={500}>{property.title}</Text>
                      <Badge color="pink" variant="light">
                        {property.bedrooms} bd
                      </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                      {property.address}
                    </Text>

                    <Text mt="sm" weight={700}>
                      {property.price}
                    </Text>
                  </Card>
                </Grid.Col>
              ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default BRPage;
