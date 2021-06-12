export class UserModel {
  public email: string;
  public username: string;
  public password: string;
  public age: number;
  public token:string;
  public roles:any;
  constructor(username: string, password: string, age: number, email: string) {
    this.email = email;
    this.age = age;
    this.username = username;
    this.password = password;
  }
}
