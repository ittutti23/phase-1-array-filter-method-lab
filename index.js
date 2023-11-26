function findMatching(drivers, search) {
    const matchingDrivers = [];
  
    drivers.forEach(driver => {
      const lowercaseDriver = driver.toLowerCase();
      const lowercaseSearch = search.toLowerCase();
  
      if (lowercaseDriver.includes(lowercaseSearch)) {
        matchingDrivers.push(driver);
      }
    });
  
    return matchingDrivers;
  }