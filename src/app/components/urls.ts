const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = `${baseURL}/users`

const urls ={
  users: {
    base: users,
    byId: (id:number): string =>`${id}`
  }
}

export {
  urls
}
