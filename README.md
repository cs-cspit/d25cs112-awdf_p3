# Practical 3: Consuming REST APIs and State Management in React

**Course**: Advanced Web Development Frameworks (ITUE301)  
**Student**: Bhavya Durgani &bull; **Roll No**: D25CS112  
**Department**: Faculty of Technology & Engineering, CHARUSAT  

---

## 📌 Overview
This project (`prac3`) demonstrates consuming external RESTful APIs in React using the browser `fetch` API inside the `useEffect` hook. It showcases robust asynchronous state management across three fundamental UI states: **Loading**, **Success**, and **Error**.

### Features Implemented:
- **Asynchronous Fetching**: Fetches public repositories from the GitHub API (`https://api.github.com/users/bhavya-durgani/repos`).
- **Loading State**: Displays a custom `Spinner` animation while HTTP request is in-flight.
- **Error State**: Displays user-friendly `ErrorMessage` if network failure or invalid response occurs.
- **Search & Filtering**: Real-time repository filter by name via `SearchBar`.
- **Card Rendering**: Iterates through repository array rendering structured `RepoCard` components with stars, forks, language badges, and direct GitHub links.

---

## 🚀 Steps to Run

Follow these commands in your terminal to set up and run Practical 3:

### 1. Navigate to the Practical Directory
```bash
cd prac3
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
* Access the application in your browser at: `http://localhost:5173`
* Navigate to the **Repositories** page (`/repositories`).

### 4. Test Search and Interactivity
- Type keywords in the search bar (e.g. `react`, `awdf`) to verify instant client-side filtering.
- Temporarily disconnect internet or enter an invalid username to verify the error alert fallback.

---

## 📸 Screenshots to Include in Lab File / Report

Capture and paste the following screenshots into your practical document:

1. **Screenshot 1 - Development Server Startup**:
   - *Capture*: Terminal window showing `npm run dev` running successfully on port 5173.
2. **Screenshot 2 - Initial Loading State (Spinner)**:
   - *Capture*: Browser view showing the active `Spinner` component while repository data is being fetched (can be captured using Network Throttling &rarr; "Fast 3G" in DevTools).
3. **Screenshot 3 - Successfully Loaded Repositories**:
   - *Capture*: Browser window displaying the `/repositories` page with rendered repository cards, repository names, descriptions, and language badges.
4. **Screenshot 4 - Real-Time Search & Filtering**:
   - *Capture*: Browser view with a query typed in the `SearchBar` (e.g., "react") showing the filtered list of matching repositories.
5. **Screenshot 5 - Network Tab API Fetch Evidence**:
   - *Capture*: DevTools **Network** tab showing the `GET https://api.github.com/users/.../repos` request with HTTP status `200 OK` and the returned JSON preview.
6. **Screenshot 6 - Error State Handling (Supplementary)**:
   - *Capture*: Browser view showing the `ErrorMessage` banner displayed when an invalid URL or offline condition occurs.
