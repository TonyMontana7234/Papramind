#!/bin/bash

echo "🔧 Fixing Papramind Dependencies"
echo "================================"

echo "Step 1: Cleaning old dependencies..."
rm -rf node_modules package-lock.json

echo "Step 2: Clearing npm cache..."
npm cache clean --force

echo "Step 3: Installing dependencies with legacy peer deps..."
npm install --legacy-peer-deps

echo "Step 4: Testing build..."
if npm run build; then
    echo ""
    echo "✅ SUCCESS! All issues fixed!"
    echo ""
    echo "Next steps:"
    echo "1. Configure .env.local with your API keys"
    echo "2. Run: npm run dev"
    echo "3. Push to GitHub and deploy to Railway"
else
    echo ""
    echo "❌ Build failed. Check the errors above."
    echo "💡 Make sure you have configured .env.local"
fi