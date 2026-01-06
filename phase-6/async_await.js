function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Network Error");
      }
    }, 2000);
  });
}

async function handleData() {
    try {
        const result = await fetchData(true);
        console.log("Success: " + result);
    } catch(error) {
        console.log("Failure: " + error);
    } finally {
        console.log("Process Complete");
    }
}

handleData();