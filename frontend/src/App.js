import React, { useState } from "react";

import JourneyList from "./components/JourneyList";

function App() {
  const [journeyData, setJourneyData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJourneys = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/journeys");
      if (response.ok) {
        const data = await response.json();
        setJourneyData(data);
        console.log(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <button
          className="border rounded-lg p-2 bg-green-500"
          onClick={fetchJourneys}
        >
          Fetch Journeys
        </button>
        {isLoading ? <p>Loading...</p> : <JourneyList journeys={journeyData} />}
      </div>
    </div>
  );
}

export default App;
