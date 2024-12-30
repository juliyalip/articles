type Role = "USER" | "ADMIN"

type ObjectId = string & { readonly __brand: unique symbol };

interface FullUser {
_id: ObjectId,
 name: string,
email: string,
password: string,
login: string,
role: string
}

export type RegistrationUser = Pick<FullUser, "name" | "email" | "password">;
export type LoginUser = Pick<FullUser, "email" | "password">
export type User = Pick<FullUser, "_id" | "role" | "name">;