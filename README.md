# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project description

Academic Explorer is a web application built with React (with Vite for less unnecessary files) and CSS Tailwind designed to allow users to search, explore, and preview scholarly articles from multiple academic data sources. It was made as a final course project.

## Core Features

1. Unified Academic Search  
  Search academic publications by title across trusted APIs (currently: CrossRef and Europe PMC).
2. Live Search
  Responsive search bar.
3. Result Aggregation  
  Fetches and merges results from selected sources, displaying article titles, authors, publication year, and source info.
4. Article Preview Modal  
  Users can click a result to view a full-screen modal with a cleaned summary, publication metadata, and external link or journal source.
5. Source Filter  
  Select and filter which sources to search from, with descriptions per API.
6. Result Display & Interaction  
  Clean, responsive result list with clickable entries.  
  Clicking a result opens a modal preview showing full metadata and summary.  
  Articles link to original source when available.
7. Theme & Font Personalization  
  Dark and light mode toggle, applied globally.  
  Font size selector with live preview.  
  Theme preferences stored in localStorage for persistence.
8. Multilingual Support  
  Interface texts fully translatable (currently supports English and Estonian).  
  All UI labels, messages, and tooltips dynamically adapt based on selected language.
9. Settings Overlay  
  Configurable settings panel opens as a modal overlay.  
  Escape key closes the panel and modal for accessibility.  
  Users can adjust theme, language, and font without navigating away
10. 404 Page Handling  
  A custom “Page Not Found” screen is shown for invalid routes.  
  Translated and styled consistently with the rest of the app.








