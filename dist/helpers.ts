export const getTodaysDate = () => {
    const formatter = new Intl.DateTimeFormat('pl-PL');
    return formatter.format(new Date()).replace('.','-').replace('.','-');
}

export const isUserInterestedInTheTopic= (topic: string, userInterests: any[]) => {
    console.log(topic);
    return userInterests.some((interest: any)=> interest.name===topic);
}

export const getKeywordName = (keywordPath) => {
    return keywordPath.split('/').at(-1);
  }