
export class Posts_Tools {
  
  post_The_Data = async (the_Data,) => {
    try {
      const response = await fetch("http://localhost:3002/users/", the_Data);
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

export class Put_Tools {
  
  put_The_Data = async (id, the_Data) => {
    try {
      const response = await fetch("http://localhost:3002/users/" + id, the_Data);
      const data = await response.json() 
      return data
    } catch (error) {
      return false
    }
  };

  data_For_Puts = {
    method: "put",
    headers: { 
      "Content-Type": "application/json",
    },

    body: null,
  };

  constructor(tasks) {
    this.data_For_Puts.body = JSON.stringify(
      tasks,
    );
  }
}


