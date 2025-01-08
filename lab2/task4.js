function mergeData(...objs) {
    return objs.reduce((mergedData, currentObject) => {
      return { ...mergedData, ...currentObject };
    }, {});
  }
  const userDetails = { name: 'CVR', age: 25 };
  const userAddress = { address: 'Mangalpally', city: 'Hyderabad' };
  const userPreferences = { theme: 'Engineering Edu', language: 'EN' };
  
  const mergedobj = mergeData(
    userDetails, 
    userAddress, 
    userPreferences
  );
  console.log(mergedobj);
  


