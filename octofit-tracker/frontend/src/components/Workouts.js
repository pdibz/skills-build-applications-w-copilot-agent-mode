import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log('Fetching workouts from:', API_URL);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Fetched workouts:', results);
        setWorkouts(results);
      })
      .catch((err) => {
        console.error('Error fetching workouts:', err);
      });
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map((workout, idx) => (
          <li key={idx}>{workout.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
