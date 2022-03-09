
type User = {
    username: string
    password: string
    email: string
    rank: number
}

export const createUser = ( _: never, args: User, context: never ) => {
    return args
}

export const users = ( _: never, args: User, context: never ) => {
    return []
}