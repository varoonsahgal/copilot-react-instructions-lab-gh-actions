# GitHub Copilot Repository Instructions

These instructions define how GitHub Copilot must behave when generating
or modifying code in this repository.

If an instruction conflicts with a prompt, follow the instructions.

---

## React Component Standards

- Use descriptive, intention-revealing variable and function names
- Keep components small and focused
- Avoid unnecessary abstractions

---

## Styling Rules

- Do NOT use inline styles
- Prefer component-scoped CSS files
- Class names must be prefixed with the component name

---

## Required Component Metadata (Non-Negotiable)

- Every React component MUST include a `data-component` attribute
- The attribute value MUST exactly match the component name
- The attribute MUST appear on the root JSX element

Example:

<div data-component="WeatherWidget">


## State Management Rules

* All React state initial values must be defined as named constants
* Inline literals inside `useState(...)` are not allowed

---

## Testing Requirements

* Every component or utility change MUST include tests
* Dont run tests in watch mode
* Use **Vitest** for all tests
* Prefer behavior-based tests over implementation-based tests
* Test names must follow the pattern:

  "when <condition>, it <observable behavior>"

---

## Documentation Requirements

* Add JSDoc for all public functions and components
* Explain non-obvious logic or design decisions
* Do not add redundant comments for self-explanatory code

---

## General Guidance

* Favor clarity over cleverness
* Make changes that are easy to review
* Optimize for long-term maintainability
