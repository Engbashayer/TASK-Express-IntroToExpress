const express = require("express");
const products = require("./products");
const accounts = require("./accounts");
const router = require("./api/accounts/accounts.routes");
const app = express();

app.use(express.json()); //here my server will read all json
app.use("/api", router);
// app.get("/api/myserver", (req, res) => {
//   res.status(200).json({ msg: products });
// });

// app.get("/accounts", (req, res) => {
//   console.log(accounts);
//   res.status(200).json({ msg: accounts });
// });

// app.post("/accounts", (req, res) => {
//   const newAccount = req.body;
//   accounts.push(newAccount);

//   console.log(req.body);
//   res.status(201).json({ msg: newAccount });
// });

// app.delete("/accounts/:id", (req, res) => {
//   const id = req.params.id;

//   const deleteAccount = accounts.find((account) => {
//     return account.id == id;
//   });

//   if (!deleteAccount) {
//     return res.status(404).json({ msg: "this ID is not exist!!" });
//   }

//   const newAccounts = accounts.filter((acc) => {
//     return acc.id != deleteAccount.id;
//   });
//   res.status(201).json(newAccounts);
// });

// app.put("/accounts/:accId", (req, res) => {
//   const { accId } = req.params;
//   //   const { username, funds } = req.body;
//   const updateAccount = accounts.find((account) => {
//     return account.id == accId;
//   });
//   if (!updateAccount) {
//     res.status(404).json({ msg: "this ID is not exist!!" });
//   }
//   for (key in req.body) {
//     if (key != "id")
//       updateAccount[key] = req.body[key] ? req.body[key] : updateAccount[key];
//   }
//   //updateAccount is the obj of the acc that i want to update its funds from the body
//   //   updateAccount.funds = req.body.funds;

//   //   accounts.splice(accId, req.body.funds);
//   return res.status(201).json(updateAccount);
// });

//app.listen always at last
app.listen(8000, () => {
  console.log("The server is running by me :) on port 8000");
});
