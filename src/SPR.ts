console.log("Single responsibility principle PAGE");

// 1 class - 1 task

// #1

// BAD EXAMPLE

class BadUser {
  public id: number;
  constructor(private name: string, private password: string) {
    this.id = Math.random();
  }

  getName() {
    return this.name;
  }

  saveToDB() {
    // save logic
  }

  send() {
    // send logic
  }

  log() {
    // log logic
  }
}

// GOOD PRACTICE

class User {
  public id: number;
  constructor(private name: string, private password: string) {
    this.id = Math.random();
  }

  getName() {
    return this.name;
  }
}

class UserRepository {
  saveToDB(user: User) {
    // save logic
  }
}

class UserLogger {
  log(user: User) {
    // log logic
  }
}

class UserSender {
  send(user: User) {
    // send logic
  }
}

// #2

// BAD EXAMPLE

class BadDataFetcher {
  get(url: string) {}
  post() {}
  put() {}
  delete() {}

  getUser(id: number) {
    this.get("http://localhost:5000/" + id);
  }

  getRequisites(id: number) {
    this.get("http://localhost:5000/requsites" + id);
  }

  getClients() {
    this.get("http://localhost:5000/clients");
  }
}

// GOOD PRACTICE

class GoodHttpClient {
  get(url: string) {}
  post() {}
  put() {}
  delete() {}
}

class DataFetcher {
  constructor(private client: GoodHttpClient) {}

  getUser(id: number) {
    this.client.get("http://localhost:5000/" + id);
  }

  getRequisites(id: number) {
    this.client.get("http://localhost:5000/requsites" + id);
  }

  getClients() {
    this.client.get("http://localhost:5000/clients");
  }
}

// BEST PRACTICE

class HttpClient {
  get(url: string) {}
  post() {}
  put() {}
  delete() {}
}

class UserService {
  constructor(private client: HttpClient) {}

  getOneUser(id: number) {
    this.client.get("http://localhost:5000/" + id);
  }

  getUsers() {
    this.client.get("http://localhost:5000/");
  }
}

class RequsitesService {
  createRequsites() {}
  getRequsites() {}
  deleteRequsites() {}
  updateRequsites() {}
}

class ClientService {}
