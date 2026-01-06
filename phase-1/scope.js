const appVersion = "1.0.0";

function loadProfile() {
    let userName = "test_user";
    const userProfile = {
        posts: 5
    };

    if (true) {
        const theme = "dark";
        console.log(userName); // Works
    }
    // console.log(theme); Fails as out of block
}

loadProfile();
// console.log(userName);  Fails as out of scope