const graphql = require("graphql");

const _ = require("lodash");

const users = require("../model/user");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const User = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    country: { type: GraphQLString }
  }),
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: User,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
             return users.findById(args.id)
            }
        },
        users : {
            type : new GraphQLList(User),
            resolve(parent,args){
                return users.find({})
            }
        },
    }
  });

  const Mutation =  new GraphQLObjectType({
      name: "Mutation",
      fields: {
          addUser: {
              type: User,
              args: {
                  username: {type: GraphQLString},
                  password: {type: GraphQLString},
                  email: {type: GraphQLString},
                  country: {type: GraphQLString}
              },
              resolve(parent, args) {
                  let user = new users({
                    username: args.username, password: args.password, email: args.email, country: args.country
                  });
                  return user.save();
              }
          },
      }
  });

  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });  
