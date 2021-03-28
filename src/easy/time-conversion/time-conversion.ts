export const timeConversion = (s: string): string => {
    const time = s.slice(0, s.length - 2);
    const period = s.slice(s.length - 2).toLowerCase();
    const [hours, minutes, seconds] = time.split(":");

    let mHours = hours;

    if (period === "am") {
        if (hours === "12") {
            mHours = "00";
        }
    } else {
        if (hours !== "12") {
            mHours = `${parseInt(hours, 10) + 12}`;
        }
    }

    return [mHours, minutes, seconds].join(":");
}
