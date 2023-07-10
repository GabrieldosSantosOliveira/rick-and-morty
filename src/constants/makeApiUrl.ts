import { env } from "./env"

export const makeApiUrl=(url: string): string => {
 return new URL(url,env.BASE_URL).toString()
}
