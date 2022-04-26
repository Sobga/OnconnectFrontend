export const getTodaysDate = () => {
    const formatter = new Intl.DateTimeFormat('pl-PL');
    return formatter.format(new Date()).replace('.','-').replace('.','-');
}

export const isUserInterestedInTheTopic= (topic: string, userInterests: any[]) => {
    return userInterests.some((interest: any)=> interest.name===topic);
}