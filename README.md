# sentryms.com E2E Tests

This project contains end-to-end tests for the Vehicle Cloning application using WebdriverIO, TypeScript, and Allure reporting.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Java Runtime Environment (JRE) - Required for Allure reports

## Installation

```bash
npm install
```

## Code Formatting

This project uses Prettier for code formatting.

### Format code

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

## Running Tests

### Run all tests with local server and report

```bash
# This will start a local server, run tests, generate report, and stop the server automatically
npm run test:with-server:report
```

### Run all tests with local server

```bash
# This will start a local server, run tests, and stop the server automatically
npm run test:with-server
```

### Run tests manually

```bash
# Start the local server in one terminal
npm run server

# Run tests in another terminal
npm test
```

### Run tests with report generation

```bash
npm run test:report
```

1. Generate and open manually:

```bash
# Generate report
npm run allure:generate

# Open report
npm run allure:open
```

## Video Recordings

Test execution videos are automatically recorded and saved in the `videos` directory. Each test run creates a new video file that can be used for debugging failed tests.
