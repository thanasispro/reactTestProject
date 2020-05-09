import { gql } from "apollo-boost";

const getCategoryQuery = gql`
  {
    categories {
      name
      id
    }
  }
`;

export default getCategoryQuery;