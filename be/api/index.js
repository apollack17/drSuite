const express = require("express");
const apiRouter = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;


apiRouter.get("/checkIn", async (req, res, next) => {
  try {
    res.send({ message: "All is well." });
  } catch (error) {
    next(error);
  }
});

apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { id } = jwt.verify(token, JWT_SECRET);
      if (id) {
        req.user = await getUserById(id);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});


//(What am I doing here)
// apiRouter.use((req, res, next) => {
//   if (req.user) {
//     console.log("User is set:", req.user);
//   }
//   next();
// });

const adminRouter = require("./admin");
apiRouter.use("/admin", adminRouter);

// const patientRouter = require("./patient");
// apiRouter.use("/patient", patientRouter);

// const servicesRouter = require("./services");
// apiRouter.use("/services", servicesRouter);


module.exports = apiRouter;
