console.log("ISP PAGE");

interface HttpRequest {
  get: () => void;
  post: () => void;
  put: () => void;
  delete: () => void;
}

interface TokenStorage {
  addToken: () => void;
}

class ServerHttp implements HttpRequest {
  get() {}
  post() {}
  put() {}
  delete() {}
}

class ClientHttp implements HttpRequest, TokenStorage {
  get() {}
  post() {}
  put() {}
  delete() {}

  addToken() {}
}
