class User {
  constructor(
    public name: string,
    public email: string,
    public role: Role,
    public token: string,
  ) {}
}
enum Role {
  ADMIN,
  CLIENT,
}

export { User }
