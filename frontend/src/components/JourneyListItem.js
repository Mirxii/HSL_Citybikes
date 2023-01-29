const JourneyListItem = ({ journey }) => {
  return (
    <div className="flex-row">
      <p className="text-sm ">
        {journey.departure_time} - {journey.departure_station_id} -
        {journey.departure_station_name} - {journey.return_time} -
        {journey.return_station_id} - {journey.return_station_name} -
        {journey.covered_distance} - {journey.duration}
      </p>
    </div>
  );
};

export default JourneyListItem;
