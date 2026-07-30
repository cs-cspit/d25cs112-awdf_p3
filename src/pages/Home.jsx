import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <h1>GitHub Repository Explorer</h1>

      <p>

        This React application demonstrates
        API Integration using the GitHub REST API.

      </p>

      <Link to="/repositories">

        <button>

          View Repositories

        </button>

      </Link>

    </div>
  );
}

export default Home;