// import * as express from "express";

// const app: express.Express = express();

// const port: number = 8000;

// //라우터로 부름
// //프론트나 클라이언트가 요청을 할 것이다 백엔드에게. get이라는 메서드를 사용해서 http get방식을 통해서
// //해당 경로로 요청 - > 서버는 라우터로 요청을 받아.
// //라우터가 없다면 not found
// app.get("/test", (req: express.Request, res: express.Response) => {
//   //앱에 요청할때 경로는 슬래시로
//   console.log(req);
//   //   res.send({ name: "chae jung hun", age: 26, friends: ["ss", "aa"] });
//   res.send({ hello: "World!!" });
// });

// app.post("/test", (req, res) => {
//   res.send({ person: "Chae" });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}/`);
// });

import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("This is logging MiddleWare");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();
    //* 404 middleware
    this.app.use((req, res, next) => {
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("Server is running");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
