const { readFileSync } = require("fs")
const { GraphQLServer } = require("graphql-yoga")
const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`, "utf8")
const resolvers = require("./schema/resolvers")

const options = {
    port: 3001,
    ednpoint: "/graphql",
    playground: "/graphiql"
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(options, () => console.log(`Server running on port: ${options.port}`))