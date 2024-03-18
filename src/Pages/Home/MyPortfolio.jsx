import { useTable } from 'react-table'
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
        setRepositories(sortedRepositories.slice(0, 10));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ row }) => (
          <img
            src={row.original.html_url + '/blob/main/images/cover.png?raw=true'} // Assuming image path
            alt="Repository Image"
            className='portfolio--githubImg'
            onError={(event) => {
              event.target.style.display = 'none'; // Hide broken images
            }}
          />
        ),
      },
      {
        Header: 'Repository',
        accessor: 'name',
        Cell: ({ row }) => (
          <a 
            href={row.original.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className='portfolio--section--title'
          >
            {row.original.name}
          </a>
        ),
      },
      {
        Header: 'Description',
        accessor: 'description',
        Cell: ({ row }) => (
          row.original.description && 
          <p className='portfolio--section--content'>
            {row.original.description}
          </p>
        ),
      },
    ],
    []
  );

  // Include "image" property in each repository object (replace with your logic)
  const imageData = repositories.map((repo) => ({
    ...repo,
    image: repo.html_url + '/blob/main/images/cover.png?raw=true', // Assuming image path
  }));
  
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    data: repositories,
    columns,
  });



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
        <table {...getTableProps()}>
          <thead className='portfolio--section--card'>
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>{header.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td key={cell.id}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MyPortfolio;