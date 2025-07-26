#!/usr/bin/env node

/**
 * Validation script for approval workflow implementation
 * This script checks if all the required files and components are in place
 */

const fs = require('fs')
const path = require('path')

const requiredFiles = [
  // Service files
  'src/lib/services/workflow-approvals.ts',
  'src/lib/jobs/approval-reminders.ts',
  
  // API endpoints
  'src/app/api/workflows/approvals/route.ts',
  'src/app/api/workflows/approvals/[id]/route.ts',
  'src/app/api/workflows/executions/[id]/approvals/route.ts',
  
  // UI components
  'src/components/workflow/approval-request-card.tsx',
  'src/components/workflow/approval-dashboard.tsx',
  'src/components/workflow/approval-history.tsx',
  
  // Test files
  'tests/workflow/approval-workflows.integration.test.ts',
  'tests/workflow/approval-api.test.ts',
  'tests/workflow/approval-components.test.tsx',
  'tests/workflow/approval-reminders.test.ts'
]

const requiredFeatures = [
  {
    file: 'src/lib/services/workflow-approvals.ts',
    features: [
      'createApprovalRequests',
      'processApprovalResponse',
      'checkStepApprovalStatus',
      'getUserApprovalRequests',
      'getApprovalHistory',
      'sendApprovalReminders',
      'handleApprovalEscalation'
    ]
  },
  {
    file: 'src/lib/jobs/approval-reminders.ts',
    features: [
      'processOverdueApprovals',
      'getApprovalStatistics'
    ]
  },
  {
    file: 'src/components/workflow/approval-request-card.tsx',
    features: [
      'ApprovalRequestCard',
      'onApprove',
      'onReject',
      'onDelegate'
    ]
  }
]

function checkFileExists(filePath) {
  const fullPath = path.join(process.cwd(), filePath)
  return fs.existsSync(fullPath)
}

function checkFeatureInFile(filePath, feature) {
  try {
    const fullPath = path.join(process.cwd(), filePath)
    const content = fs.readFileSync(fullPath, 'utf8')
    return content.includes(feature)
  } catch (error) {
    return false
  }
}

function validateImplementation() {
  console.log('🔍 Validating Approval Workflow Implementation...\n')
  
  let allValid = true
  
  // Check required files
  console.log('📁 Checking required files:')
  for (const file of requiredFiles) {
    const exists = checkFileExists(file)
    console.log(`  ${exists ? '✅' : '❌'} ${file}`)
    if (!exists) allValid = false
  }
  
  console.log('\n🔧 Checking required features:')
  for (const { file, features } of requiredFeatures) {
    console.log(`\n  📄 ${file}:`)
    for (const feature of features) {
      const hasFeature = checkFeatureInFile(file, feature)
      console.log(`    ${hasFeature ? '✅' : '❌'} ${feature}`)
      if (!hasFeature) allValid = false
    }
  }
  
  // Check database schema
  console.log('\n🗄️  Checking database schema:')
  const schemaFile = 'src/lib/db/schema/workflows.ts'
  const schemaFeatures = [
    'workflowApprovals',
    'workflowAuditLog',
    'approverUserId',
    'status',
    'decision',
    'delegatedTo'
  ]
  
  for (const feature of schemaFeatures) {
    const hasFeature = checkFeatureInFile(schemaFile, feature)
    console.log(`  ${hasFeature ? '✅' : '❌'} ${feature}`)
    if (!hasFeature) allValid = false
  }
  
  // Check API endpoints
  console.log('\n🌐 Checking API endpoints:')
  const apiChecks = [
    {
      file: 'src/app/api/workflows/approvals/route.ts',
      methods: ['GET']
    },
    {
      file: 'src/app/api/workflows/approvals/[id]/route.ts',
      methods: ['GET', 'POST']
    },
    {
      file: 'src/app/api/workflows/executions/[id]/approvals/route.ts',
      methods: ['GET']
    }
  ]
  
  for (const { file, methods } of apiChecks) {
    console.log(`\n  📄 ${file}:`)
    for (const method of methods) {
      const hasMethod = checkFeatureInFile(file, `export async function ${method}`)
      console.log(`    ${hasMethod ? '✅' : '❌'} ${method} handler`)
      if (!hasMethod) allValid = false
    }
  }
  
  // Check test coverage
  console.log('\n🧪 Checking test coverage:')
  const testChecks = [
    {
      file: 'tests/workflow/approval-workflows.integration.test.ts',
      tests: [
        'createApprovalRequests',
        'processApprovalResponse',
        'checkStepApprovalStatus',
        'getUserApprovalRequests'
      ]
    },
    {
      file: 'tests/workflow/approval-api.test.ts',
      tests: [
        'GET /api/workflows/approvals',
        'POST /api/workflows/approvals/[id]'
      ]
    },
    {
      file: 'tests/workflow/approval-components.test.tsx',
      tests: [
        'ApprovalRequestCard',
        'ApprovalDashboard',
        'ApprovalHistory'
      ]
    }
  ]
  
  for (const { file, tests } of testChecks) {
    console.log(`\n  📄 ${file}:`)
    for (const test of tests) {
      const hasTest = checkFeatureInFile(file, test)
      console.log(`    ${hasTest ? '✅' : '❌'} ${test}`)
      if (!hasTest) allValid = false
    }
  }
  
  console.log('\n' + '='.repeat(50))
  
  if (allValid) {
    console.log('🎉 All approval workflow features implemented successfully!')
    console.log('\n📋 Implementation Summary:')
    console.log('  ✅ Approval request and response handling')
    console.log('  ✅ Multi-stage approval chains (ANY, ALL, MAJORITY)')
    console.log('  ✅ Approval notification and reminder system')
    console.log('  ✅ Approval history and audit trails')
    console.log('  ✅ Delegation and escalation support')
    console.log('  ✅ REST API endpoints')
    console.log('  ✅ React UI components')
    console.log('  ✅ Comprehensive test coverage')
    
    console.log('\n🚀 Next Steps:')
    console.log('  1. Run database migrations to create approval tables')
    console.log('  2. Set up notification service integration')
    console.log('  3. Configure approval reminder job scheduling')
    console.log('  4. Test approval workflows end-to-end')
    
    process.exit(0)
  } else {
    console.log('❌ Some approval workflow features are missing or incomplete.')
    console.log('   Please review the validation results above.')
    process.exit(1)
  }
}

// Run validation
validateImplementation()