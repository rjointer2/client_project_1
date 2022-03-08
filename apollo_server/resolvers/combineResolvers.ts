

const resolvers = {
    Query: {
        hello: ( _: never, args: any, _context: never ) => {
            return 'hello world'
        }
    },
    Mutation: {
        world: ( _: never, args: any, _context: never ) => {
            return 'hello world'
        }
    }
}

export default resolvers;