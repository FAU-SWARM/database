/*
to be invoked with:
mongo localhost:27017 .\database\scripts\create-db.js
*/

function print_help() {
    console.log(
`create-db.js

description:
    creates a new database with a new user. If that database already exists, it does not override unless --override is provided.

required:
    --user
    --pass
    --db
optional:
    --override
example:
    mongo localhost:27017 create-db.js --user hello --pass world --db test
        creates a new databse "test" with the user hello:world in it
`
    );
}

var exit = false;
var required = ['user', 'pass', 'db'];
var args = {};
for (let index = 2; index < process.argv.length; index += 2) {
    const kwarg = process.argv[index].replace(/-/g, '').toLowerCase();
    const arg = process.argv[index + 1];
    args[kwarg] = arg
}
console.log(args);

if (args.hasOwnProperty('help') || args.hasOwnProperty('h')) {
    exit = true;
}
required.forEach(req => {
    if (!args.hasOwnProperty(req)) {
        console.log(`malformed args: "--${req}"`);
        exit = true;
    }
});
if (exit) {
    print_help();
    process.exit();
} else {
    console.log(args);
}

conn = new Mongo();
db = conn.getDB(args.db);
