# Cypress E2E Test Automation

This project contains end-to-end test automation scenarios developed with Cypress for the SauceDemo application.

## Scope
The following user flows are covered:
- Valid login
- Invalid login
- Add product to cart
- Remove product from cart
- Logout

## Tech Stack
- Cypress
- JavaScript
- Fixtures
- Custom Commands

## Project Structure
- cypress/e2e/login.cy.js
- cypress/e2e/cart.cy.js
- cypress/e2e/logout.cy.js
- cypress/fixtures/users.json
- cypress/support/commands.js

## Test Strategy
This project focuses on business-critical end-to-end scenarios using a risk-based approach.

## How to Run
npm install
npx cypress open
