# Angular v19 Code Review Guidelines

When reviewing code, follow these guidelines and structure:

## 1) Security. Highest priority. Look for vulnerabilities such as SQL injection, CORS issues, keys or secrets in code, unvalidated user input, and so on.

## 2) Error Handling. Make sure important functions are using a try/catch and handling the errors properly.

## 3) Performance. Make sure any queries are optimized, large payloads are avoided, and async operations are used when appropriate.

## 4) Code Quality. Make sure code is following best practices for Angular 19.
