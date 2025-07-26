@echo off
echo 🔧 FINAL FIX - Papramind Dependencies
echo ====================================

echo Step 1: Complete cleanup...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist npm-shrinkwrap.json del npm-shrinkwrap.json

echo Step 2: Clearing npm cache...
npm cache clean --force

echo Step 3: Fresh install with legacy peer deps...
npm install --legacy-peer-deps

if %errorlevel% equ 0 (
    echo.
    echo Step 4: Testing build...
    npm run build
    
    if %errorlevel% equ 0 (
        echo.
        echo ✅ SUCCESS! All issues completely resolved!
        echo.
        echo Your Papramind application is ready!
        echo.
        echo Next steps:
        echo 1. Configure .env.local with your API keys
        echo 2. Run: npm run dev
        echo 3. Push to GitHub: git add . && git commit -m "Final fix" && git push
        echo 4. Deploy to Railway
        echo.
        echo Required API keys:
        echo - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY (from clerk.com)
        echo - CLERK_SECRET_KEY (from clerk.com)
        echo - DATABASE_URL (Railway provides automatically)
    ) else (
        echo.
        echo ⚠️  Build failed. Try configuring .env.local first.
    )
) else (
    echo.
    echo ❌ Install failed. Trying with Yarn...
    echo.
    npm install -g yarn
    yarn install
    
    if %errorlevel% equ 0 (
        echo ✅ Yarn install successful! Try: yarn dev
    ) else (
        echo ❌ Both npm and yarn failed. Check Node.js version.
    )
)

pause