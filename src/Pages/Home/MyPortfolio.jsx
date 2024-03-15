import data from "../../data/index.json";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyPortfolio = ({ username }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/tom89622/repos`);
        // Sort repositories by creation date (newest first)
        const sortedRepositories = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        // Display only the newest three repositories
        setRepositories(sortedRepositories.slice(0, 5));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

// export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="section--title">Recent Projects</p>
          <h2 className="skills--section--heading">My GitHub Repositories</h2>
        </div>
        <div>
          <a className="btn btn-github" href="https://github.com/tom89622">
            Visit My GitHub
            <img src="../img/GitHub_Logo.png" alt="Github Logo" style={{marginTop: "-8px"}}></img>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        <ul className="portfolio--section--card">
          {repositories.map(repo => (
            <p key={repo.id}>
              <div className="portfolio--githubImg">
                {repo.html_url + '/blob/main/images/cover.png?raw=true' && 
                  <img src={repo.html_url + '/blo####b/main/images/cover.png?raw=true'} 
                  alt="Repository Image" />
                }
              </div> 
              <a 
                href={repo.html_url}
                className="portfolio--section--title" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {repo.name}
              </a>
              {repo.description && <p className="portfolio--section--content text-md">{repo.description}</p>}
            </p>
          ))}
        </ul>
      </div>
    </section>
  );
}


export default MyPortfolio;

/*
<div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
*/