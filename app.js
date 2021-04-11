
/**
 * http://revisions.braitsch.io
 * Author :: Stephen Braitsch
 */

const express = require('@braitsch/express');

const app = express();

express.log('./logs');

express.http(app);

express.init(__dirname, app);

express.start(app);