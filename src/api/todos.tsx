import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = async (page: number, limit: number) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export default getTodos;