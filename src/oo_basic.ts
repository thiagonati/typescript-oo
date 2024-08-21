class User {
  name: string;
  email: string;
  active: boolean = false;
  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
  }
}

const carlos = new User("Carlos", "carlos@gmail.com", false);
console.log(carlos);
const user1 = new User("user1", "user1@gmail.com");
console.log(user1);
const user2 = new User("user2", "user2@gmail.com", true);
console.log(user2);
const user3 = new User("user3", "user3@gmail.com");
console.log(user3);
