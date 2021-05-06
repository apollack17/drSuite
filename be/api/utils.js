function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }
  next();
}
function requireAdmin(req, res, next) {
  if (!req.user.isAdmin) {
    next({
      name: "AdminAcessError",
      message: "You must be an admin to access this area",
    });
  }
  next();
}
module.exports = {
  requireUser,
  requireAdmin,
};