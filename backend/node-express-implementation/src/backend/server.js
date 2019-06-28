'use strict';
import app from './app'
import Logger from "./Logger";
import { apiServerPort } from "./config";

app.listen(apiServerPort, () =>
    Logger.log(`Expense tracker app listening on port ${apiServerPort}!`));
