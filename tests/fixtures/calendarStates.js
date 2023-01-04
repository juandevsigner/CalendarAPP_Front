export const events = [
  {
    id: "1",
    start: new Date("2020-10-21 13:00:00"),
    end: new Date("2020-10-21 15:00:00"),
    title: "New Event",
    notes: "Test Calendar",
  },
  {
    id: "2",
    start: new Date("2020-11-09 13:00:00"),
    end: new Date("2020-11-09 15:00:00"),
    title: "New Event2",
    notes: "Test Calendar2",
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: true,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: true,
  events: [...events],
  activeEvent: { ...events[0] },
};
