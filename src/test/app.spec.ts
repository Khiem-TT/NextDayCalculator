import {NextDayCalculator} from "../app";

describe("nextDayCalculator", () => {
    test("weekday", () => {
        let nextdaycalculator = new NextDayCalculator(1, 1, 2018);
        let output: string = '2/1/2018';
        expect(nextdaycalculator.getDay()).toEqual(output);
    });

    test("the last day of the month has 31 days", () => {
        let nextdaycalculator = new NextDayCalculator(31, 1, 2018);
        let output: string = '1/2/2018';
        expect(nextdaycalculator.getDay()).toEqual(output);
    });

    test("the last day of the month has 30 days", () => {
        let nextdaycalculator = new NextDayCalculator(30, 4, 2018);
        let output: string = '1/5/2018';
        expect(nextdaycalculator.getDay()).toEqual(output);
    });

    test("the last day of february in a non-leap year", () => {
        let nextdaycalculator = new NextDayCalculator(28, 2, 2018);
        let output: string = '1/3/2018';
        expect(nextdaycalculator.getDay()).toEqual(output);
    });

    test("the last day of february in a leap year", () => {
        let nextdaycalculator = new NextDayCalculator(29, 2, 2020);
        let output: string = '1/3/2020';
        expect(nextdaycalculator.getDay()).toEqual(output);
    });

    test("The last day of year", () => {
        let nextdaycalculator = new NextDayCalculator(31, 12, 2018);
        let output: string = '1/1/2019';
        expect(nextdaycalculator.getDay()).toEqual(output);
    });
});