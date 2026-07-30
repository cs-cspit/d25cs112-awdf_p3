import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";
import "./Repositories.css";

function Repositories() {

    const [repos, setRepos] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const fetchRepositories = () => {

        setLoading(true);

        setError("");

        fetch("https://api.github.com/users/bhavya-durgani/repos")

            .then((response) => {

                if (!response.ok) {

                    throw new Error("Unable to fetch repositories.");

                }

                return response.json();

            })

            .then((data) => {

                setRepos(data);

            })

            .catch((err) => {

                setError(err.message);

            })

            .finally(() => {

                setLoading(false);

            });

    };

    useEffect(() => {

        fetchRepositories();

    }, []);

    const filteredRepos = repos.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {

        return <Spinner />;

    }

    if (error) {

        return (
            <ErrorMessage
                message={error}
                onRetry={fetchRepositories}
            />
        );

    }

    return (

        <div className="repositories">

            <h1>GitHub Repositories</h1>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            {
                filteredRepos.length === 0 ?

                    <h2>No Repository Found</h2>

                    :

                    filteredRepos.map((repo) => (

                        <RepoCard

                            key={repo.id}

                            repo={repo}

                        />

                    ))

            }

        </div>

    );

}

export default Repositories;