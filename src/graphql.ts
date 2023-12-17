import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("https://gql.hashnode.com", {
  headers: { Authorization: import.meta.env.HASHNODE_TOKEN },
  fetch,
});
export const request = client.request.bind(client);
