export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movement: "/movements",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount: "/create-account",
  editAccount: "/edit-account/:id",
  movementsDetail: `${routesPrefixes.movement}/:id`,
  movement : routesPrefixes.movement,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
