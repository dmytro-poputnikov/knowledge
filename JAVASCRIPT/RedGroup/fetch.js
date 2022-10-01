//Fetch

let isLoading = true;

//Promise
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((e) => console.error(e))
  .finally(() => {
    isLoading = false;
  });
//Async, await
const fetchTodo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.error(e);
  } finally {
    isLoading = false;
  }
};

fetchTodo();
