import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'


// icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

// properties data
export const PROPERTIES = [
  {
    title: "Tranquil Terrace Tranquility Haven",
    image: img1,
    category: "Cottage",
    address: "Via Roma 21",
    country: "Italy",
    city: "Florence",
    area: 450,
    price: 450,
    description: "Charming bungalow with modern amenities and scenic views, perfect for peaceful living.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Oceanview Oasis Serenity Escape",
    image: img2,
    category: "Residence",
    address: "Bondi Road 105",
    country: "Australia",
    city: "Sydney",
    area: 500,
    price: 600,
    description: "A beautiful residence with a stunning ocean view, perfect for a serene escape.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2
    }
  },
  {
    title: "Sunrise Sanctuary Solace Retreat",
    image: img3,
    category: "House",
    address: "Sakura Street 15",
    country: "Japan",
    city: "Kyoto",
    area: 420,
    price: 480,
    description: "A peaceful retreat with modern amenities and beautiful sunrise views.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Urban Elegance Sophistication Haven",
    image: img4,
    category: "Property",
    address: "Queen Street 77",
    country: "Canada",
    city: "Toronto",
    area: 550,
    price: 800,
    description: "An elegant urban property with sophisticated design and ample space.",
    facilities: {
      bedrooms: 5,
      bathrooms: 4,
      parkings: 3
    }
  },
  {
    title: "Rustic Retreat Charm Cottage",
    image: img1,
    category: "Villa",
    address: "Carrer de Mallorca 9",
    country: "Spain",
    city: "Barcelona",
    area: 470,
    price: 700,
    description: "A charming rustic villa with modern amenities and scenic views.",
    facilities: {
      bedrooms: 3,
      bathrooms: 3,
      parkings: 2
    }
  },
  {
    title: "Garden Grove Oasis Retreat Haven",
    image: img3,
    category: "Penthouse",
    address: "Rua Visconde de Pirajá 305",
    country: "Brazil",
    city: "Rio de Janeiro",
    area: 520,
    price: 680,
    description: "A luxurious penthouse with a garden grove and breathtaking views.",
    facilities: {
      bedrooms: 4,
      bathrooms: 3,
      parkings: 2
    }
  },
  {
    title: "Mountain Majesty Tranquility Haven",
    image: img2,
    category: "Home",
    address: "Bahnhofstrasse 88",
    country: "Switzerland",
    city: "Zurich",
    area: 480,
    price: 750,
    description: "A tranquil home with majestic mountain views and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Lakefront Lodge Haven Haven",
    image: img5,
    category: "Apartment",
    address: "Long Street 123",
    country: "South Africa",
    city: "Cape Town",
    area: 430,
    price: 500,
    description: "A cozy lakefront apartment with scenic views and modern amenities.",
    facilities: {
      bedrooms: 2,
      bathrooms: 2,
      parkings: 1
    }
  },
  {
    title: "Serenity Shores Bliss Haven",
    image: img4,
    category: "Villa",
    address: "Sukhumvit Road 42",
    country: "Thailand",
    city: "Bangkok",
    area: 460,
    price: 520,
    description: "A serene villa with blissful surroundings and modern amenities.",
    facilities: {
      bedrooms: 3,
      bathrooms: 2,
      parkings: 1
    }
  },
];


// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Latest Items",
      "Hot Offers",
      "Popular residencies",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Terms and Conditions",
      "Special Offers",
      "Customer Reviews",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@casacentral.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: <FaFacebook />, id: "facebook" },
    { icon: <FaInstagram />, id: "instagram" },
    { icon: <FaTwitter />, id: "twitter" },
    { icon: <FaYoutube />, id: "youtube" },
    { icon: <FaLinkedin />, id: "linkedin" },
  ],
};