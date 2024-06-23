export class Posts_Tools {
  post_The_Data = async (the_Data) => {
    try {
      await fetch("http://localhost:3002/users", the_Data);
    } catch (error) {
      console.log(error);
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


