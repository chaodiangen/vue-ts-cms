export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  user_id: number
  name: string
  token: string
}
