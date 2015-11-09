/*
 * Copyright 2015 Red Hat Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var container = require('rhea');

/**
 * Default SASL behaviour is as follows. If the username and password
 * are both specified, PLAIN will be used. If only a username is
 * specified, ANONYMOUS will be used. If neither is specified, no SASl
 * layer will be used.
 */
if (process.argv.length > 2) {
    container.options.username = process.argv[2];
}
if (process.argv.length > 3) {
    container.options.password = process.argv[3];
}
container.on('connection_open', function (context) {
    console.log('Connected!');
    context.connection.close();
});
container.connect({'port':5672});
