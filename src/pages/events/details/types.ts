interface Event {
  id: string;
  title: string;
  coordinates: GeolocationCoordinates;
  homeEvent: boolean;
  show: boolean;
  dateFrom: string;
  dateTo: string;
  details: string;
}

export default Event;
