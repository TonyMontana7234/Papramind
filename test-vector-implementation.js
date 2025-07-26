#!/usr/bin/env node

/**
 * Simple test to verify vector implementation works
 */

console.log('🧪 Testing Vector Implementation...\n');

// Test 1: Check if all required files exist
const fs = require('fs');
const requiredFiles = [
  'src/lib/vector/pinecone-config.ts',
  'src/lib/vector/embedding-service.ts',
  'src/lib/vector/semantic-search-service.ts'
];

console.log('📁 Checking core files:');
let allFilesExist = true;
for (const file of requiredFiles) {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
}

// Test 2: Check if files have basic structure
console.log('\n🔍 Checking file structure:');
try {
  const semanticSearchContent = fs.readFileSync('src/lib/vector/semantic-search-service.ts', 'utf8');
  const hasClass = semanticSearchContent.includes('export class SemanticSearchService');
  const hasSearchMethod = semanticSearchContent.includes('searchSemantic');
  const hasHybridMethod = semanticSearchContent.includes('searchHybrid');
  
  console.log(`  ${hasClass ? '✅' : '❌'} SemanticSearchService class exists`);
  console.log(`  ${hasSearchMethod ? '✅' : '❌'} searchSemantic method exists`);
  console.log(`  ${hasHybridMethod ? '✅' : '❌'} searchHybrid method exists`);
  
  if (!hasClass || !hasSearchMethod || !hasHybridMethod) {
    allFilesExist = false;
  }
} catch (error) {
  console.log('  ❌ Error reading semantic search service:', error.message);
  allFilesExist = false;
}

// Test 3: Check API routes
console.log('\n🌐 Checking API routes:');
const apiRoutes = [
  'src/app/api/search/semantic/route.ts',
  'src/app/api/search/similar/route.ts',
  'src/app/api/search/index/route.ts'
];

for (const route of apiRoutes) {
  const exists = fs.existsSync(route);
  console.log(`  ${exists ? '✅' : '❌'} ${route}`);
  if (!exists) allFilesExist = false;
}

// Test 4: Check environment variables
console.log('\n🔧 Checking environment setup:');
const envFile = '.env.local';
if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  const hasOpenAI = envContent.includes('OPENAI_API_KEY=') && !envContent.includes('OPENAI_API_KEY=your_');
  const hasPinecone = envContent.includes('PINECONE_API_KEY=') && !envContent.includes('PINECONE_API_KEY=your_');
  
  console.log(`  ${hasOpenAI ? '✅' : '❌'} OPENAI_API_KEY configured`);
  console.log(`  ${hasPinecone ? '✅' : '❌'} PINECONE_API_KEY configured`);
} else {
  console.log('  ❌ .env.local file not found');
  allFilesExist = false;
}

console.log('\n📊 Summary:');
if (allFilesExist) {
  console.log('🎉 Vector implementation appears to be complete!');
  console.log('\n💡 Next steps:');
  console.log('  1. Ensure your API keys are properly configured');
  console.log('  2. Run the setup script: npm run vector:setup');
  console.log('  3. Test the API endpoints');
  process.exit(0);
} else {
  console.log('❌ Some components are missing or incomplete');
  process.exit(1);
}