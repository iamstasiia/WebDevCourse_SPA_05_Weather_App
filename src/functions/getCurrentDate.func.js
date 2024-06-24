export const getCurrentDate = () => {
    const currentDate = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return currentDate.toLocaleDateString("de-DE", options);
};
