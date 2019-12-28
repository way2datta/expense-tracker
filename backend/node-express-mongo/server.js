'use strict';
import app from './app.js'
import Logger from "./Logger";
const apiServerPort = require("./config").apiServerPort;

app.listen(apiServerPort, () =>
    Logger.log(`Expense tracker app listening on port ${apiServerPort}!`));
