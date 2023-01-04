import {
  calendarSlice,
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onLogoutCalendar,
  onSetActiveEvent,
  onUpdateEvent,
} from "../../../src/store/calendar/calendarSlice";
import {
  calendarWithActiveEventState,
  calendarWithEventsState,
  events,
  initialState,
} from "../../fixtures/calendarStates";

describe("Test calendar slice", () => {
  it("Should show default state", () => {});
  expect(calendarSlice.getInitialState()).toEqual(initialState);
  it("Should active event", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onSetActiveEvent(events[0])
    );
    expect(state.activeEvent).toEqual(events[0]);
  });

  it("Should add new event", () => {
    const newEvent = {
      id: "3",
      start: new Date("2020-11-09 13:00:00"),
      end: new Date("2020-11-09 15:00:00"),
      title: "New Event3",
      notes: "Test Calendar3",
    };
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onAddNewEvent(newEvent)
    );
    expect(state.events.length).toBe(3);
  });

  it("Should update event", () => {
    const updateEvent = {
      id: "1",
      start: new Date("2020-11-09 13:00:00"),
      end: new Date("2020-11-09 15:00:00"),
      title: "New Event Update",
      notes: "Test Calendar Update",
    };

    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onUpdateEvent(updateEvent)
    );
    expect(state.events).toContain(updateEvent);
  });

  it("Should delete event", () => {
    const state = calendarSlice.reducer(
      calendarWithActiveEventState,
      onDeleteEvent()
    );
    expect(state.events).not.toContain(events[0]);
  });

  it("Should show events", () => {
    const state = calendarSlice.reducer(initialState, onLoadEvents(events));
    expect(state.events.length).toBe(events.length);
    expect(state.isLoadingEvents).toBeFalsy();
  });

  it("Shoul show defualt state when user logout", () => {
    const state = calendarSlice.reducer(
      calendarWithEventsState,
      onLogoutCalendar()
    );
    expect(state).toEqual(initialState);
  });
});
