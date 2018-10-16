export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const domain = "https://jsonplaceholder.typicode.com";

export const url = {
  posts: `${domain}/posts`,
  comments: `${domain}/comments`
};
