interface Event {
  id: string;
  title: string;
  coordinates: GeolocationCoordinates;
  dateFrom: string;
  dateTo: string;
  details: string;
}

export default Event;
