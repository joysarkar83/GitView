# GitView - GitHub Profile Viewer

GitView is a lightweight web application built with **HTML, CSS, and JavaScript** that allows users to search and view **public GitHub profile information** using the **GitHub REST API**.

The project focuses on clean UI, proper API handling, and robust state management without using any external frameworks or libraries.

---

## ✨ Features

- Search GitHub users by username
- Display public profile information:
  - Profile avatar
  - Name and username
  - Bio
  - Followers and following count
  - Public repositories count
  - Account creation date
  - Other info
- Graceful UI state handling:
  - User not found
  - Empty input validation
- Keyboard support (press **Enter** to search)
- Responsive and mobile-friendly design

---

## 🛠️ Tech Stack

- **HTML5** - semantic markup
- **CSS3** - responsive layout and styling
- **JavaScript (ES6+)** - DOM manipulation and async logic
- **GitHub REST API** - public profile data

No frameworks, libraries, or build tools used.

---

## ⚙️ How It Works

1. User enters a GitHub username
2. The app sends a request to the GitHub REST API
3. The response is validated and parsed
4. Profile data is rendered dynamically in the UI
5. Errors and edge cases are handled gracefully

---

## 🌐 API Used

**GitHub REST API**

```
https://api.github.com/users/{username}
```

Only publicly available profile data is fetched.  
No authentication or sensitive data is involved.

---

## 🧠 What This Project Demonstrates

- Working with REST APIs using `fetch`
- Proper usage of `async / await` and `try / catch`
- Handling loading, error, and empty states in UI
- Clean separation of logic and presentation
- Writing readable and maintainable JavaScript
- Completing and deploying a real-world frontend project

---

## 📷 Screenshots

![Screenshot](/Screenshots/screenshot1.png)
![Screenshot](/Screenshots/screenshot2.png)

---