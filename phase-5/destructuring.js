const userProfile = {
  id: 101,
  username: "coder123",
  details: {
    firstName: "Sarah",
    lastName: "Connor",
    email: "sarah@test.com",
  },
  preferences: {
    theme: "dark",
  },
};

// Object destructuring
const {
  username,
  details: { firstName, email },
  preferences: { theme: uiMode },
  notifications = true,
} = userProfile;

// Array destructuring
const posts = ["Post 1", "Post 2", "Post 3", "Post 4"];
const [featuredPost, latestPost] = posts;

console.log(
  username,
  firstName,
  email,
  uiMode,
  notifications,
  featuredPost,
  latestPost
);