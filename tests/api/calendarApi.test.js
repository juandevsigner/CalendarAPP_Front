import calendarApi from "../../src/api/calendarApi";

describe("Test in CalendarApi", () => {
  it("Should be default config", () => {
    expect(calendarApi.defaults.baseURL).toBe(process.env.VITE_API_URL);
  });
});
