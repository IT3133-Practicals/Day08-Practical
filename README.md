# Day 08 Practicals: React Router and Navigation 🚀

## Project Overview 🧑‍💻

This practical demonstrates how to use `react-router-dom` for handling routing in React. The exercise includes creating a login page where the user inputs their username and password. Upon successful login, the user is navigated to the dashboard page. If the username or password is missing, an error message is displayed. Additionally, the app includes a **Home**, **About Us**, and **Contact Us** page that users can navigate to.

## Key Concepts Covered ⚡

- **React Router**: Using `react-router-dom` to handle navigation between pages.
- **useNavigate**: Using the `useNavigate` hook to programmatically navigate between routes.
- **Conditional Rendering**: Checking if the username and password are provided, and displaying an error message if not.
- **State Management**: Using `useState` to store form inputs (username and password).
- **Routing**: Setting up routes with `<Router>`, `<Routes>`, and `<Route>` components to manage different views.

## How It Works 🛠️

### App Component (App.js):

- The `App.js` component is responsible for setting up the routing with `react-router-dom`.
- It defines the routes for the login page (`/login`), the dashboard page (`/dashboard`), home page (`/`), about page (`/about-us`), and contact page (`/contact-us`).
- It uses the `useNavigate` hook to redirect to the dashboard after a successful login.
- It also includes logic to check if the username and password are provided and displays an error message if not.

### Login Component (Login.js):

- The `Login.js` component displays the login form where users input their username and password.
- It contains logic to handle form submission, checking if both fields are filled in.
- If the login is successful, the user is redirected to the dashboard page; otherwise, an error message is shown.

### Dashboard Component (Dashboard.js):

- The `Dashboard.js` component represents the dashboard page that is shown after a successful login.
- It simply displays a welcome message to the user.

### Home Component (Home.js):

- The `Home.js` component represents the homepage of the app.
- It provides general information or a greeting, and serves as the default page when users visit the root URL (`/`).

### About Us Component (AboutUs.js):

- The `AboutUs.js` component displays information about the application or company.
- It is typically used to provide context or background information.

### Contact Us Component (ContactUs.js):

- The `ContactUs.js` component contains a contact form or contact details for users to get in touch.
- It may include a form for users to send messages or simply display contact information.

## Files 📂

- **App.js**: Contains the main component with routing setup.
- **Login.js**: The login page with form fields for username and password.
- **Dashboard.js**: The page shown after successful login.
- **Home.js**: The homepage of the application, shown by default when visiting `/`.
- **AboutUs.js**: The page with information about the application or company.
- **ContactUs.js**: The page that displays contact information or a form to get in touch with the application.

## How to Run the Project 🏃‍♀️

1. **Clone the Repository**:
   Clone the repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/day08.git
   ```

2. **Install Dependencies**:
   Navigate to the project directory and install the necessary dependencies:

   ```bash
   cd day08
   npm install
   ```

3. **Install `react-router-dom`**:
   Since this practical uses `react-router-dom` for routing, you need to install it as well:

   ```bash
   npm install react-router-dom
   ```

4. **Run the Project**:
   Start the project using the following command:

   ```bash
   npm start
   ```

   This will launch the application, and you can view it in your browser at `http://localhost:3000`.

## Output 🎮

- **Login Page**: A simple form where the user enters a username and password.
- **Dashboard Page**: After successful login, the user is redirected to the dashboard.
- **Home Page**: Accessible by visiting the root URL (`/`), showing the homepage content.
- **About Us Page**: Displays information about the app or company.
- **Contact Us Page**: Shows contact information or a contact form for users to get in touch.
- **Error Handling**: If the username or password is missing, an error message is displayed on the login page.

## Example Screenshot 📸

### Example of the Login Page and Dashboard Screen:

- **Login Page**:
![Login](https://github.com/user-attachments/assets/cfa3e6ca-34c5-477e-8a4a-022b1ac9f701)

- **Dashboard Page**:
![Dashboard](https://github.com/user-attachments/assets/43af3294-c34b-4be1-a65d-a1699d445c1f)


## Conclusion 📝

This practical exercise demonstrates how to implement routing and navigation in React applications using `react-router-dom`. It also covers how to handle conditional rendering for login forms, as well as how to use `useNavigate` for programmatic navigation. By the end of this practical, you will be able to set up dynamic page navigation, manage multiple views, and handle form-based authentication in React.

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.
