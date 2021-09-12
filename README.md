# Movie wizard

## Test graphql api

You can also access the GraphQL API of the API server directly. It is running on the same host machine and port and can be accessed via the /api route (in this case that is localhost:3000/api).
Below are a number of operations that you can send to the API.

```graphql
query movies {
  movies {
    price
    rating
    comments {
      movie {
        price
      }
    }
  }
}
```
