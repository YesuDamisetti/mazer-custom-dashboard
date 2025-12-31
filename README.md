# Mazer Admin Dashboard – Custom Data-Driven Dashboard
Front-End Skill Assessment

## Overview

This project is a customized implementation of the Mazer Admin Dashboard, completed as part of a Front-End Skill Assessment.
The objective was to demonstrate the ability to understand, extend, and integrate data-driven UI components within an existing real-world codebase rather than building a project from scratch.

The customization introduces a Custom Dashboard section with dynamic summary cards and a recent orders table, implemented using clean JavaScript logic while maintaining full visual and structural consistency with the original Mazer template.

## Objectives Achieved

- Understanding and working within an existing production-grade front-end codebase
- Extending the UI without breaking existing layout or styles
- Binding UI components to dynamic data
- Debugging real-world integration and routing issues
- Delivering a stable and maintainable front-end solution

## Features Implemented

### Custom Dashboard Section

A new dashboard section was added containing:

Summary Cards
- Total Users
- Total Orders
- Total Revenue

Recent Orders Table
- Dynamically populated table
- Displays order ID, customer name, and order amount

All components are responsive and styled using Bootstrap 5 and the existing Mazer theme system.

## Data Integration Strategy

### Final Approach: Mocked Data (API Simulation)

After evaluating multiple approaches such as external JSON files, public folder fetches, and API-style requests, the final solution uses mocked data defined directly in JavaScript to simulate a real API response.

```js
const data = {
  users: 1234,
  orders: 87,
  revenue: 56000,
  recentOrders: [
    { id: 1, customer: "Yesu", amount: 1200 },
    { id: 2, customer: "Purna", amount: 3400 },
    { id: 3, customer: "Dheeraj", amount: 2100 }
  ]
};
```

## Reason for This Approach

- The assessment explicitly allows mocked or real data
- Avoids routing conflicts caused by template rendering and Vite dev server behavior
- Ensures predictable and stable UI behavior
- Matches real-world front-end workflows where APIs may not yet be available
- Can be replaced with a real API endpoint without refactoring UI logic

This reflects professional front-end development practices.

## Technical Implementation

### JavaScript Logic

- Code executes after DOMContentLoaded
- Updates UI elements using element IDs
- Dynamically renders table rows
- No additional dependencies were introduced

```js
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("usersCount").textContent = data.users;
  document.getElementById("ordersCount").textContent = data.orders;
  document.getElementById("revenueCount").textContent = data.revenue;
});
```

## Files Modified

File Path | Description
src/index.html | Added Custom Dashboard UI section
src/assets/static/js/pages/custom-dashboard.js | Handles data logic and DOM updates


## How to Run the Project

```bash
npm install
npm run dev
```

Open the application at:
http://localhost:5173

## Validation Checklist

- Dashboard loads without console errors
- Summary values update dynamically
- Orders table renders correctly
- Layout remains responsive
- No broken assets or unused files
- Consistent styling with original Mazer UI

## Debugging and Key Learnings

- Diagnosed scenarios where HTML was returned instead of JSON
- Understood how template rendering interacts with Vite routing
- Identified when simplifying architecture leads to better stability
- Applied production-style decision making rather than forcing an API solution

## Future Improvements

- Replace mocked data with real API endpoints
- Add loading and error handling states
- Connect additional charts to dynamic data
- Implement pagination and filtering for the orders table

## Submission Notes

This project demonstrates:
- Practical front-end debugging skills
- UI consistency and responsiveness awareness
- Clean JavaScript integration
- Ability to adapt and extend an existing production codebase

No backend implementation was required for this assessment.

## Author

Damisetti yesu
Front-End Developer
https://github.com/YesuDamisetti
