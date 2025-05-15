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

