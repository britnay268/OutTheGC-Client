---
name: Basic Issue Template
about: Describe this issue template's purpose here.
title: ''
labels: ''
assignees: ''

---

# User Story
Purpose: Describe the feature or functionality from the end-user's perspective.
What to write:

Start with the format: "As a [user role], I want to [action/feature] so that [benefit/outcome]."
Clearly outline who the user is, what they want, and why they want it.
Example:
"As a customer, I want to receive email notifications when my order ships so that I can track my package."

# Acceptance Criteria
Purpose: Define the conditions under which the story is considered complete and acceptable.
What to write:

Use bullet points or a "Given-When-Then" format.
List specific, measurable, and testable outcomes.
Cover both functional and non-functional requirements.
Example:

Given a customer places an order, when the order ships, then an email notification is sent.
The email includes a tracking number and a link to track the package.

# Dependencies
Purpose: Highlight external factors or tasks that need to be completed before work on this issue can proceed or be completed.
What to write:

Identify related tickets, APIs, external systems, or teams involved.
Mention any blockers or prerequisites.
Example:

This ticket depends on the completion of the email template design (TICKET-123).
Requires integration with the shipping provider's API.

# Dev Notes
Purpose: Provide technical implementation details or guidance for developers.
What to write:

Suggest specific files, methods, or components that will be involved.
Mention any relevant libraries, tools, or configurations.
Include performance considerations, testing approaches, or coding standards.
Example:

Update the OrderService class to include the sendShipmentEmail method.
Use the existing EmailService module for sending notifications.
Add unit tests for email generation and integration tests for API calls to the shipping provider.
