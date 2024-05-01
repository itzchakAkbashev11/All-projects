const indexR = require("./index");
const airR = require("./air");

// in configRoutes we create a new route with the given name and route parameters

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/air",airR);

}
