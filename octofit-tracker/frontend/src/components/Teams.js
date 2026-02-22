import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log('Fetching teams from:', API_URL);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Fetched teams:', results);
        setTeams(results);
      })
      .catch((err) => {
        console.error('Error fetching teams:', err);
      });
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team, idx) => (
          <li key={idx}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
