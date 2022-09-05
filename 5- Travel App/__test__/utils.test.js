import { f_datedif, f_checkDates } from '../src/client/js/utils.js'


describe("Testing the date dif function", () => {
    test("Testing the number of days between 2 dates", () => {
        const startDate = "2022-01-01";
        const endDate = "2022-01-15";

        expect(f_datedif(startDate, endDate)).toBe(14);
    })
})


describe("Testing the check dates function", () => {
    test("Testing start date prior to end date", () => {
        const startDate = "2022-01-01";
        const endDate = "2022-01-15";

        expect(f_checkDates(startDate, endDate)).toBe(true);
    })

    test("Testing start date equal to end date", () => {
        const startDate = "2022-01-01";
        const endDate = "2022-01-01";

        expect(f_checkDates(startDate, endDate)).toBe(true);
    })

    test("Testing end date prior to start date", () => {
        const endDate = "2022-01-01";
        const startDate = "2022-01-15";

        expect(f_checkDates(startDate, endDate)).toBe(false);
    })
})