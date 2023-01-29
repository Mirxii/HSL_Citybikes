import JourneyListItem from "./JourneyListItem";

const JourneyList = ({ journeys }) => {
  if (!journeys) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex-row space-evenly">
      {journeys.map((journey) => (
        <JourneyListItem key={journey.id} journey={journey} />
      ))}
    </div>
  );
};

export default JourneyList;
