#!/bin/bash

# Set tenant ID for testing
TENANT_ID="test-tenant-123"
BASE_URL="http://localhost:3000"

# Test tenant endpoints
echo "Testing tenant endpoints..."
curl -X GET \
  -H "x-tenant-id: $TENANT_ID" \
  "$BASE_URL/api/tenants/info"

echo -e "\n\nTesting health check..."
curl -X GET \
  -H "x-tenant-id: $TENANT_ID" \
  "$BASE_URL/api/tenants/health"

# Create an employee
echo -e "\n\nCreating employee..."
EMPLOYEE_ID=$(curl -X POST \
  -H "Content-Type: application/json" \
  -H "x-tenant-id: $TENANT_ID" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "employeeId": "EMP001",
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "dateOfJoining": "2024-03-20",
    "department": "Engineering",
    "designation": "Software Engineer"
  }' \
  "$BASE_URL/api/employees" | jq -r '.id')

# Get all employees
echo -e "\n\nGetting all employees..."
curl -X GET \
  -H "x-tenant-id: $TENANT_ID" \
  "$BASE_URL/api/employees"

# Get single employee
echo -e "\n\nGetting single employee..."
curl -X GET \
  -H "x-tenant-id: $TENANT_ID" \
  "$BASE_URL/api/employees/$EMPLOYEE_ID"

# Update employee
echo -e "\n\nUpdating employee..."
curl -X PUT \
  -H "Content-Type: application/json" \
  -H "x-tenant-id: $TENANT_ID" \
  -d '{
    "designation": "Senior Software Engineer"
  }' \
  "$BASE_URL/api/employees/$EMPLOYEE_ID"

# Delete employee
echo -e "\n\nDeleting employee..."
curl -X DELETE \
  -H "x-tenant-id: $TENANT_ID" \
  "$BASE_URL/api/employees/$EMPLOYEE_ID"