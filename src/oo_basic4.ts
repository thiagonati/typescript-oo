class Address {
  constructor(
    readonly address: string,
    readonly zipCode: string,
    readonly number?: number
  ) {}

  changeZipCode(zipCode: string): void {
    // this.zipCode = zipCode;
  }
}

const address = new Address("Av. Paulista", "12345-678", 1000);

console.log(address.zipCode);
// address.zipCode = "99999-999";
// console.log(address.zipCode);
