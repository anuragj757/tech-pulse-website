# Tech Pulse — AI-Powered Technology News Email Automation

Tech Pulse automatically transforms fresh technology news into an AI-curated HTML newsletter and delivers it to a user-provided email address.

## Live Demo

[https://tech-pulse-website.vercel.app](https://tech-pulse-website.vercel.app)

Visitors can enter an email address on the live demo to trigger the newsletter automation and receive the curated newsletter directly in their inbox.

## Overview

- Tech Pulse fetches fresh technology news through an RSS feed.
- n8n orchestrates the automation.
- Groq-powered AI selects the most relevant stories.
- AI generates the newsletter content.
- JavaScript processes and formats the content into HTML.
- Gmail delivers the finished newsletter to the submitted email address.

## How It Works

Website
↓
n8n Webhook
↓
RSS Read — TechCrunch
↓
Limit — 5 Articles
↓
JavaScript — Combine / Process Articles
↓
AI Agent — Select Top 3 Stories
↓
AI Agent1 — Generate Newsletter
↓
JavaScript — HTML Formatting
↓
Gmail — Email Delivery
↓
User Inbox

- **Website**: A React + Vite frontend that collects the user's email via a submission form.
- **n8n Webhook**: Triggers the automation pipeline when it receives an email submission.
- **RSS Read**: Pulls the latest articles from the TechCrunch RSS feed.
- **Limit**: Restricts the data to the 5 most recent articles.
- **JavaScript**: Formats the raw RSS data into a clean text block for the AI.
- **AI Agent**: A Groq-powered AI evaluates and selects the three most impactful stories.
- **AI Agent1**: Another Groq-powered AI agent writes summaries and formats them into a newsletter structure.
- **JavaScript**: Injects the generated summaries into a polished, responsive HTML template.
- **Gmail**: Delivers the fully formatted HTML email to the user.
- **User Inbox**: The final destination for the AI-curated newsletter.

## Key Features

- AI-powered technology-news curation
- RSS-based news ingestion
- AI-generated newsletter summaries
- Top-story selection
- HTML email generation
- Gmail email delivery
- Live website-triggered automation
- User-provided email delivery
- Multiple email submissions without requiring a page reload
- Responsive editorial-style website
- Public Vercel deployment

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React | Website interface |
| Vite | Frontend tooling |
| JavaScript | Content processing and frontend logic |
| HTML/CSS | Newsletter and website presentation |
| n8n | Workflow automation |
| Groq | AI inference |
| RSS | Technology-news ingestion |
| Gmail | Email delivery |
| GitHub | Source control |
| Vercel | Website deployment |

## Architecture

### Frontend
React + Vite website with the Live Demo form.

### Automation
n8n webhook-triggered workflow.

### AI Layer
Groq-powered AI agents for story selection and newsletter generation.

### Delivery Layer
HTML formatting followed by Gmail delivery.

## Screenshots

Screenshot placeholders — images can be added here.

1. Tech Pulse homepage
2. n8n workflow
3. Live Demo
4. Generated Tech Pulse email

## Project Highlights

- **End-to-end automation**: Seamlessly integrates frontend interactions with backend workflow processing.
- **AI content curation**: Uses advanced Groq inference to evaluate, summarize, and prioritize unstructured text.
- **Automated email marketing workflow**: Operates as a hands-free content engine.
- **Webhook-triggered delivery**: Allows direct user engagement with real-time feedback.
- **Real-world integration**: Demonstrates an effective orchestration of frontend UI, automation platforms, AI, and legacy email infrastructure.

## Future Improvements

*Note: The following are planned features and are NOT currently implemented.*

- Subscriber management
- Personalized newsletters
- Campaign analytics
- Multi-source news ingestion
- Advanced email campaign controls
- Subscriber segmentation

## Author

Anurag Jadhav

GitHub:
[https://github.com/anuragj757](https://github.com/anuragj757)

LinkedIn:
[https://www.linkedin.com/in/anurag-jadhav-1b84a2371/](https://www.linkedin.com/in/anurag-jadhav-1b84a2371/)
