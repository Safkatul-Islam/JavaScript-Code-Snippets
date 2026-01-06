const getTodo = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/999");

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        console.log(`Todo title: ${data.title}`)
    } catch(error) {
        console.log("Data fetch failed: " + error);
    }
};

getTodo();