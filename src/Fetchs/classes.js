
export class Posts_Tools {
  
  post_The_Data = async (the_Data) => {
    try {
      const response = await fetch("http://localhost:3002/users", the_Data);
      const data = await response.json() 
      return data
    } catch (error) {
      return false
    }
  };

  data_For_Posts = {
    method: "post",
    headers: { 
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(name, email, password) {
    this.data_For_Posts.body = JSON.stringify({
      info: {
        name,
        email,
        password,
      },
      tasks:[]
    });
  }
}


