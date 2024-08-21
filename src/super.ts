export class User {
  protected name: string; // public|protected|private
  private email: string;
  private active: boolean = false;

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name;
    this.email = email;
    this.active = active;

    // this.validation()
  }

  // public addAddress(newAddress: Address): void {
  //   this.address.push(newAddress);
  // }

  public changeName(newName: string): void {
    if (newName.length < 3) {
      throw new Error("invalid name");
    }

    this.name = newName;
  }

  public getName(): string {
    return this.name;
  }

  public getNumber(): number {
    return 1450;
  }
}

class Manager extends User {
  protected code: string;
  constructor(name: string, email: string, active: boolean, code: string) {
    super(name, email, active);
    this.code = code;
  }

  public getName(): string {
    return `Manager: ${this.name}`;
  }
  public getNumber(): number {
    return super.getNumber() + super.getNumber() * 0.1;
  }
}

class Admin extends User {
  public getName(): string {
    return `Admin: ${this.name}`;
  }
  public getNumber(): number {
    return 55342;
  }
}

const manager = new Manager(
  "Manager 01",
  "manager1@email.com",
  true,
  "admin - 01"
);
// manager.addAddress(new Address("Rua 01", "12345678"));

console.log(manager);
console.log(manager.getNumber());

const admin = new Admin("Admin 01", "admin1@email.com");
// admin.addAddress(new Address("Rua 01", "12345678"));

console.log(admin);
