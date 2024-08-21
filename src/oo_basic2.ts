class address {
  constructor(
    public address: string,
    public zipCode: string,
    public number?: number
  ) {}
}

export class User {
  name: string;
  email: string;
  active: boolean = false;
  address: address;
  constructor(
    name: string,
    email: string,
    address: address,
    active: boolean = false
  ) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.active = active;
  }
}

const address1 = new address("Rua dos bobos", "00000-000", 187);
const user1 = new User("user1", "user1@gmail.com", address1);

console.log(user1);
