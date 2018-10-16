export const retryStrategy = errors =>
  errors
    .scan((_, value, index) => {
      if (index < 2) {
        return index;
      }
      throw value;
    })
    .delay(5000);

export const headersJson = {
  "Content-Type": "application/json"
  // Authorization: `Bearer ${TOKEN}`,
};
