import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Article {
    articles {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;