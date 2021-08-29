import hello from './hello.resolver'
import users from './users.resolver'

const resolvers = {
  Query: {
    hello,
    users,
  },
}

export default resolvers
