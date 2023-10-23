const accounts = require("../../accounts");

exports.getAllAccounts = (req, res) => {
  return res.status(200).json({ msg: accounts });
};

exports.creatNewAccount = (req, res) => {
  const newAccount = req.body;
  accounts.push(newAccount);

  console.log(req.body);
  res.status(201).json({ msg: newAccount });
};

exports.deleteAccount = (req, res) => {
  const id = req.params.id;

  const deleteAccount = accounts.find((account) => {
    return account.id == id;
  });

  if (!deleteAccount) {
    return res.status(404).json({ msg: "this ID is not exist!!" });
  }

  const newAccounts = accounts.filter((acc) => {
    return acc.id != deleteAccount.id;
  });
  res.status(201).json(newAccounts);
};

exports.apdateAccount = (req, res) => {
  const { accId } = req.params;
  //   const { username, funds } = req.body;
  const updateAccount = accounts.find((account) => {
    return account.id == accId;
  });
  if (!updateAccount) {
    res.status(404).json({ msg: "this ID is not exist!!" });
  }
  for (key in req.body) {
    if (key != "id")
      updateAccount[key] = req.body[key] ? req.body[key] : updateAccount[key];
  }
  //updateAccount is the obj of the acc that i want to update its funds from the body
  //   updateAccount.funds = req.body.funds;

  //   accounts.splice(accId, req.body.funds);
  return res.status(201).json(updateAccount);
};
