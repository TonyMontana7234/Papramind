#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Fixing Papramind Dependencies');
console.log('================================');

try {
  console.log('🗑️  Cleaning existing dependencies...');
  
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  
  if (fs.existsSync('package-lock.json')) {
    fs.unlinkSync('package-lock.json');
  }

  console.log('📦 Installing with legacy peer deps...');
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

  console.log('✅ Dependencies fixed successfully!');

} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('💡 Try: npm install --force');
}