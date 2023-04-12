export class NextDayCalculator {
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    isLeapYear(): boolean {
        let isLeapYear: boolean = false;
        if (this.year % 4 === 0) {
            if (this.year % 100 === 0) {
                if (this.year % 400 === 0) {
                    isLeapYear = true;
                }
            } else {
                isLeapYear = true;
            }
        }
        return isLeapYear;
    }

    getDay() {
        switch (this.month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
                if (this.day < 31) return `${this.day + 1}/${this.month}/${this.year}`;
                return `1/${this.month + 1}/${this.year}`;
            case 4:
            case 6:
            case 9:
            case 11:
                if (this.day < 30) return `${this.day + 1}/${this.month}/${this.year}`;
                return `1/${this.month + 1}/${this.year}`;
            case 12:
                if (this.day < 31) return `${this.day + 1}/${this.month}/${this.year}`;
                return `1/1/${this.year + 1}`;
            case 2:
                if (this.isLeapYear()) {
                    if (this.day < 29) return `${this.day + 1}/${this.month}/${this.year}`;
                    return `1/${this.month + 1}/${this.year}`;
                } else {
                    if (this.day < 28) return `${this.day + 1}/${this.month}/${this.year}`;
                    return `1/${this.month + 1}/${this.year}`;
                }
        }
    }
}