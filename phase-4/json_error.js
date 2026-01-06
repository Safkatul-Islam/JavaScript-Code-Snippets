const serverResponse = '{"id": 55, "status": "active"';

try {
    const user = JSON.parse(serverResponse);
    console.log(`User ID is: ${user.id}`);
} catch (error) {
    console.log("Error parsing data!");
    console.error(error.message);
}