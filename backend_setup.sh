#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Creating project directory 'backend'..."
mkdir backend
cd backend

echo "📦 Initializing npm..."
npm init -y

echo "📥 Installing core dependencies..."
npm install express cors nodemon dotenv

echo "🔧 Installing development dependencies..."
npm install -D typescript eslint ts-node @types/node @types/express @types/cors @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin

echo "🛠️ Initializing TypeScript configuration..."
npx tsc --init

echo "📁 Creating folder structure..."
mkdir -p src/{controllers,services,models,routes,middleware,utils,config,types,tests}

echo "📝 Creating essential files..."
touch src/index.ts .env .env.example .gitignore

echo "⚙️ Writing dev script to package.json..."
# Use jq if available, fallback to sed otherwise
if command -v jq &> /dev/null
then
  tmpfile=$(mktemp)
  jq '.scripts.dev = "nodemon src/index.ts"' package.json > "$tmpfile" && mv "$tmpfile" package.json
else
  sed -i.bak 's/"scripts": {/"scripts": {\n    "dev": "nodemon src\/index.ts",/' package.json
fi

echo "📄 Writing .gitignore..."
cat <<EOL > .gitignore
node_modules
.env
dist
EOL

echo "✅ Backend setup complete!"
echo "👉 Run 'npm run dev' to start the development server"
