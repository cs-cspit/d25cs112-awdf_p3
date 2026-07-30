import "./RepoCard.css";

function RepoCard({ repo }) {

    return(

        <div className="repo-card">

            <h2>{repo.name}</h2>

            <p>

                ⭐ Stars :

                {repo.stargazers_count}

            </p>

            <p>

                Language :

                {repo.language || "Not Available"}

            </p>

            <a

                href={repo.html_url}

                target="_blank"

                rel="noreferrer"

            >

                View Repository

            </a>

        </div>

    )

}

export default RepoCard;