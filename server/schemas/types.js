const graphql = require("graphql");

const _ = require("lodash");


const categories = require("../model/category");

const subcategories = require("../model/subcategory");


const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
  } = graphql;


const Subcategory = new GraphQLObjectType({
    name: "Subcategory",
    fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    category: {
        type: Category,
        resolve(parent, args){
            return categories.findById(parent.categoryId);
        }
    }
    })
});


const Category = new GraphQLObjectType({
    name: "Category",
    fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    Subcategories : {
        type : new GraphQLList(Subcategory),
        resolve(parent,args){
            return subcategories.find({ categoryId: parent.id})
        }
    }
    })
});


  const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        category: {
            type: Category,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
             return categories.findById(args.id)
            }
        },
        subcategory: {
            type: Subcategory,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
               return subcategories.findById(args.id);
            }
        },
        categories : {
            type : new GraphQLList(Category),
            resolve(parent,args){
                return categories.find({})
            }
        },
        subcategories : {
            type : new GraphQLList(Subcategory),
            resolve(parent,args){
                return subcategories.find({})
            }
        }
    }
  });

  const Mutation =  new GraphQLObjectType({
      name: "Mutation",
      fields: {
          addCategory: {
              type: Category,
              args: {
                  name: {type: GraphQLString}
              },
              resolve(parent, args) {
                  let category = new categories({
                      name: args.name
                  });
                  return category.save();
              }
          },
          addSubcategory: {
              type: Subcategory,
              args: {
                  name: {type: GraphQLString},
                  categoryId: {type: GraphQLID}
              },
              resolve(parent, args) {
                  let subcategory = new subcategories({
                      name: args.name,
                      categoryId: args.categoryId
                  });
                  return subcategory.save();
              }
          }
      }
  });


  module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  });