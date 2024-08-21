class Address {
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
  address: Address[] = [];
  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }

  get addresses(): Address[] {
    return this.address;
  }
}

const address1 = new Address("Rua dos bobos", "00000-000", 187);
const user = new User("Thiago", "thiago@.com");
console.log(user);
user.addAddress(address1);
user.addAddress(address1);
user.addAddress(address1);
console.log(user);
