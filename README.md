# Create the main project directory

`mkdir backend`

`cd backend`

# Initialize npm package

`npm init -y`

# Install core dependencies

`npm install express cors nodemon dotenv`

# Install development dependencies (-D same as --save-dev)

`npm install -D typescript eslint ts-node @types/node @types/express @types/cors @eslint/js typescript typescript-eslint`

# Initialize TypeScript configuration (creates tsconfig.json file)

`npx tsc --init`

# Create folder structure (Creates a basic folder structure with empty folders)

`mkdir -p src/{controllers,services,models,routes,middleware,utils,config,types,tests}`

# Create essential files

`touch src/index.ts .env .env.example .gitignore`

# Add "dev" inside scripts

`"dev": "nodemon src/index.ts"`

# Note: Empty folders are not pushed to git, so please create those folders manually by running

`mkdir -p src/{controllers,services,models,routes,middleware,utils,config,types,tests}`

# How to understand the flow

Please make these type of requests and you will understand how this works

`curl -X POST http://localhost:3000/api/users \`
`-H "Content-Type: application/json" \`
`-d '{"name": "John Doe", "email": "john@example.com", "age": 30}'`

The above request is used to create a user. Have a look at the flow and you will understand how to strcuture it.

## Note: Always place the error handling middleware at last in the stack. It will be run if there is an error anytime, and a middleware with four parameters will be run with `err` as the property.

## Note

`Success response is`
`res.status(200).json({`
`success: true`,
`body: user`
`message: "User created successfully"`
`})`

`Error response is`
`res.status(500).json({`
`success: false`,
`body: null`
`message: "Internal server error"`
`})`
