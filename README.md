# Defensive Programming Project

## Project
This project is made with:
- Vite 5.4
- TypeScript 5.5
- React 18.3
- Tailwind CSS 3.4
- Daisy UI 4.12
- TanStack Query 5.59

This project accompanies a presentation on defensive programming.
The code is well typed thanks to TypeScript.
However, we have no control over the data coming from the JSON files.
Despite precautions, some malformed data crashes the application.

## Defensive Programming
[Defensive Programming](https://en.wikipedia.org/wiki/Defensive_programming)
is a set of methods and tools for writing safer and more secure code.

The code must be able to handle anomalies without crashing or giving access to protected data.

Here's a list of a few points to watch out for:
- never trust external data (user input, external API calls, etc.)
- never trust other developers (null or uninitialized variables, modification of function parameters, etc.).
- use an abstraction to update the database (SQL injection)