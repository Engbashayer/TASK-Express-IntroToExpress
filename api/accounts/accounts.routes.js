const express = require("express");
const {
  getAllAccounts,
  creatNewAccount,
  deleteAccount,
  apdateAccount,
} = require("./accounts.controllers");

const router = express.Router();

router.get("/accounts", getAllAccounts);

router.post("/accounts", creatNewAccount);

router.delete("/accounts/:id", deleteAccount);

router.put("/accounts/:accId", apdateAccount);
module.exports = router;
