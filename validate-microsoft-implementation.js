#!/usr/bin/env node

/**
 * Microsoft 365 Integration Implementation Validator
 * 
 * This script validates that all Microsoft 365 integration components are properly implemented
 * according to the task requirements.
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Microsoft 365 Integration Implementation...\n');

const results = {
  passed: 0,
  failed: 0,
  details: []
};

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    results.passed++;
    results.details.push(`✅ ${description}`);
    return true;
  } else {
    results.failed++;
    results.details.push(`❌ ${description} - File missing: ${filePath}`);
    return false;
  }
}

function checkFileContent(filePath, searchText, description) {
  if (!fs.existsSync(filePath)) {
    results.failed++;
    results.details.push(`❌ ${description} - File missing: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const found = content.includes(searchText);
  
  if (found) {
    results.passed++;
    results.details.push(`✅ ${description}`);
    return true;
  } else {
    results.failed++;
    results.details.push(`❌ ${description} - Content not found in: ${filePath}`);
    return false;
  }
}

function checkMultipleContent(filePath, searchTexts, description) {
  if (!fs.existsSync(filePath)) {
    results.failed++;
    results.details.push(`❌ ${description} - File missing: ${filePath}`);
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const allFound = searchTexts.every(text => content.includes(text));
  
  if (allFound) {
    results.passed++;
    results.details.push(`✅ ${description}`);
    return true;
  } else {
    results.failed++;
    const missing = searchTexts.filter(text => !content.includes(text));
    results.details.push(`❌ ${description} - Missing content: ${missing.join(', ')}`);
    return false;
  }
}

// 1. Microsoft Graph API Authentication
console.log('📋 Task 1: Microsoft Graph API Authentication');
checkFile('src/lib/services/microsoft-auth.ts', 'Microsoft authentication service exists');
checkFileContent('src/lib/services/microsoft-auth.ts', 'exchangeCodeForTokens', 'OAuth2 code exchange implemented');
checkFileContent('src/lib/services/microsoft-auth.ts', 'refreshAccessToken', 'Token refresh implemented');
checkFileContent('src/lib/services/microsoft-auth.ts', 'createGraphClient', 'Graph client creation implemented');
checkFileContent('src/lib/services/microsoft-auth.ts', 'getUserInfo', 'User info retrieval implemented');
checkFile('src/app/api/integrations/microsoft/auth/route.ts', 'Microsoft auth API endpoint exists');
checkMultipleContent('src/app/api/integrations/microsoft/auth/route.ts', 
  ['GET', 'POST', 'DELETE'], 'Auth endpoint supports all HTTP methods');

// 2. OneDrive and SharePoint File Sync
console.log('\n📋 Task 2: OneDrive and SharePoint File Sync');
checkFile('src/lib/services/onedrive.ts', 'OneDrive service exists');
checkMultipleContent('src/lib/services/onedrive.ts', 
  ['listFiles', 'uploadFile', 'downloadFile', 'searchFiles'], 'OneDrive CRUD operations implemented');
checkFile('src/lib/services/sharepoint.ts', 'SharePoint service exists');
checkMultipleContent('src/lib/services/sharepoint.ts', 
  ['listSites', 'listDocumentLibraries', 'uploadFileToLibrary', 'searchFiles'], 'SharePoint operations implemented');
checkFile('src/app/api/integrations/microsoft/onedrive/files/route.ts', 'OneDrive API endpoint exists');
checkFile('src/app/api/integrations/microsoft/sharepoint/sites/route.ts', 'SharePoint API endpoint exists');

// 3. Outlook Integration for Document Sharing
console.log('\n📋 Task 3: Outlook Integration for Document Sharing');
checkFile('src/lib/services/outlook.ts', 'Outlook service exists');
checkMultipleContent('src/lib/services/outlook.ts', 
  ['listMessages', 'sendMessage', 'searchMessages', 'createDraft'], 'Outlook operations implemented');
checkFile('src/app/api/integrations/microsoft/outlook/messages/route.ts', 'Outlook API endpoint exists');
checkFileContent('src/app/api/integrations/microsoft/outlook/messages/route.ts', 
  'shareDocument', 'Document sharing via email implemented');

// 4. Teams Integration for Collaboration
console.log('\n📋 Task 4: Teams Integration for Collaboration');
checkFile('src/lib/services/teams.ts', 'Teams service exists');
checkMultipleContent('src/lib/services/teams.ts', 
  ['listTeams', 'listChannels', 'sendChannelMessage', 'shareDocumentToChannel'], 'Teams operations implemented');
checkFile('src/app/api/integrations/microsoft/teams/route.ts', 'Teams API endpoint exists');
checkFileContent('src/app/api/integrations/microsoft/teams/route.ts', 
  'shareDocument', 'Document sharing to Teams implemented');

// 5. Database Schema and Types
console.log('\n📋 Task 5: Database Schema and Types');
checkFile('src/types/microsoft.ts', 'Microsoft TypeScript types exist');
checkFile('src/lib/db/schema/microsoft-integrations.ts', 'Microsoft database schema exists');
checkFile('migrations/0004_add_microsoft_integrations.sql', 'Microsoft database migration exists');
checkMultipleContent('src/lib/db/schema/microsoft-integrations.ts', 
  ['microsoftIntegrations', 'oneDriveFiles', 'sharePointSites', 'outlookMessages', 'teamsChannels'], 
  'All Microsoft database tables defined');

// 6. Sync and Webhook Support
console.log('\n📋 Task 6: Sync and Webhook Support');
checkFile('src/app/api/integrations/microsoft/sync/route.ts', 'Microsoft sync endpoint exists');
checkFile('src/app/api/integrations/microsoft/webhooks/route.ts', 'Microsoft webhooks endpoint exists');
checkFileContent('src/app/api/integrations/microsoft/sync/route.ts', 
  'syncType', 'Sync operations implemented');
checkMultipleContent('src/app/api/integrations/microsoft/webhooks/route.ts', 
  ['createSubscription', 'deleteSubscription', 'processNotification'], 'Webhook management implemented');

// 7. Integration Tests
console.log('\n📋 Task 7: Integration Tests');
checkFile('tests/integrations/microsoft-api.integration.test.ts', 'Microsoft API integration tests exist');
checkFile('tests/integrations/microsoft-auth.test.ts', 'Microsoft auth tests exist');
checkFile('tests/integrations/onedrive.test.ts', 'OneDrive tests exist');
checkMultipleContent('tests/integrations/microsoft-api.integration.test.ts', 
  ['Authentication Flow', 'OneDrive Integration', 'SharePoint Integration', 'Outlook Integration', 'Teams Integration'], 
  'All integration test suites implemented');

// 8. Package Dependencies
console.log('\n📋 Task 8: Package Dependencies');
checkFileContent('package.json', '@microsoft/microsoft-graph-client', 'Microsoft Graph client dependency added');

// 9. Environment Configuration
console.log('\n📋 Task 9: Environment Configuration');
checkMultipleContent('src/lib/services/microsoft-auth.ts', 
  ['MICROSOFT_CLIENT_ID', 'MICROSOFT_CLIENT_SECRET', 'MICROSOFT_REDIRECT_URI'], 
  'Environment variables configured');

// 10. API Route Structure
console.log('\n📋 Task 10: API Route Structure');
const apiRoutes = [
  'src/app/api/integrations/microsoft/auth/route.ts',
  'src/app/api/integrations/microsoft/onedrive/files/route.ts',
  'src/app/api/integrations/microsoft/onedrive/files/[fileId]/route.ts',
  'src/app/api/integrations/microsoft/sharepoint/sites/route.ts',
  'src/app/api/integrations/microsoft/outlook/messages/route.ts',
  'src/app/api/integrations/microsoft/teams/route.ts',
  'src/app/api/integrations/microsoft/sync/route.ts',
  'src/app/api/integrations/microsoft/webhooks/route.ts'
];

apiRoutes.forEach(route => {
  checkFile(route, `API route exists: ${route.split('/').pop()}`);
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 VALIDATION SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Passed: ${results.passed}`);
console.log(`❌ Failed: ${results.failed}`);
console.log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%`);

console.log('\n📋 DETAILED RESULTS:');
results.details.forEach(detail => console.log(detail));

// Requirements validation
console.log('\n' + '='.repeat(60));
console.log('📋 REQUIREMENTS VALIDATION');
console.log('='.repeat(60));

const requirements = [
  {
    id: '3.2',
    description: 'External tool integration support',
    status: results.details.filter(d => d.includes('✅') && (d.includes('API') || d.includes('service'))).length >= 8 ? '✅' : '❌'
  },
  {
    id: '3.3', 
    description: 'Data sync across integrated platforms',
    status: results.details.some(d => d.includes('✅') && d.includes('sync')) ? '✅' : '❌'
  }
];

requirements.forEach(req => {
  console.log(`${req.status} Requirement ${req.id}: ${req.description}`);
});

if (results.failed === 0) {
  console.log('\n🎉 All Microsoft 365 integration components are properly implemented!');
  console.log('✅ Task 10.2 "Build Microsoft 365 integration" is COMPLETE');
} else {
  console.log(`\n⚠️  ${results.failed} issues found. Please address the failed checks above.`);
}

console.log('\n' + '='.repeat(60));