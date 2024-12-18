import { useEffect, useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import "../styles/Dashboard.css";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

const API_BASE_URL = "http://127.0.0.1:3000/api/v1";
const token = localStorage.getItem("token");

const fetchWithToken = async (url) => {
  console.log(`Fetching data from: ${url}`);
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.error(`Error fetching ${url}: ${response.statusText}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Data fetched from ${url}:`, data);
    return data;
  } catch (error) {
    console.error(`Fetch error for ${url}:`, error);
    throw error;
  }
};

const Dashboard = () => {
  const [residencies, setResidencies] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Starting to fetch data...");
        const [residenciesData, usersData] = await Promise.all([
          fetchWithToken(`${API_BASE_URL}/residency/allresd`),
          fetchWithToken(`${API_BASE_URL}/users`),
        ]);

        if (residenciesData && Array.isArray(residenciesData)) {
          const sanitizedData = residenciesData.map((item) => ({
            ...item,
            propertyType: item.propertyType?.trim(), // Trim any malformed fields
          }));
          setResidencies(sanitizedData);
        } else {
          console.error("Invalid residencies data format:", residenciesData);
        }
        

        if (usersData && Array.isArray(usersData)) {
          console.log("Users fetched successfully:", usersData);
          setUsers(usersData); // Directly set the array
        } else {
          console.error("Invalid users data format:", usersData);
        }
        
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
        console.log("Data fetching completed.");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Residencies state updated:", residencies);
  }, [residencies]);

  useEffect(() => {
    console.log("Users state updated:", users);
  }, [users]);

  if (loading) {
    console.log("Loading state: true");
    return <div className="dashboard-loading">Loading...</div>;
  }

  if (error) {
    console.error("Error state:", error);
    return <div className="dashboard-error">{error}</div>;
  }

  const soldProperties = residencies.filter((res) => res.status === "sold").length;
  const availableProperties = residencies.filter((res) => res.status === "available").length;

  console.log("Sold properties:", soldProperties);
  console.log("Available properties:", availableProperties);

  const barChartData = {
    labels: residencies.map((res) => res.title || `Property ${res._id}`),
    datasets: [
      {
        label: "Properties",
        data: residencies.map((res) => (res.status === "sold" ? 1 : 0)),
        backgroundColor: "#007bff",
      },
    ],
  };

  const pieChartData = {
    labels: ["Sold", "Available"],
    datasets: [
      {
        label: "Property Status",
        data: [soldProperties, availableProperties],
        backgroundColor: ["#28a745", "#ffc107"],
      },
    ],
  };

  const lineChartData = {
    labels: residencies.map((res) => res.title || `Property ${res._id}`),
    datasets: [
      {
        label: "Properties Trends",
        data: residencies.map((res) => (res.status === "available" ? 1 : 0)),
        borderColor: "#17a2b8",
        fill: false,
      },
    ],
  };

  console.log("Bar chart data:", barChartData);
  console.log("Pie chart data:", pieChartData);
  console.log("Line chart data:", lineChartData);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats-container">
        <div className="stat">
          <h2>Total Residencies</h2>
          <p>{residencies.length}</p>
        </div>
        <div className="stat">
          <h2>Sold Properties</h2>
          <p>{soldProperties}</p>
        </div>
        <div className="stat">
          <h2>Available Properties</h2>
          <p>{availableProperties}</p>
        </div>
        <div className="stat">
          <h2>Total Users</h2>
          <p>{users.length}</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart">
          <h2>Properties Overview</h2>
          <Bar data={barChartData} />
        </div>
        <div className="chart">
          <h2>Property Status</h2>
          <Pie data={pieChartData} />
        </div>
        <div className="chart">
          <h2>Trends</h2>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
