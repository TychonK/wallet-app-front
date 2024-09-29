# 💳 Wallet App Frontend

Welcome to the **Wallet App**! This is the frontend part of an online wallet application that allows users to manage their personal finances efficiently, with features like transaction management, currency rate tracking, and more. The app is built with modern web technologies, offering an intuitive user interface with multi-language support.

## 🚀 Features

- **📈 Transaction Management**  
  Easily add, delete, and track transactions to monitor your income and expenses.
  
- **💱 Currency Rates**  
  View real-time exchange rates and adjust your transactions based on current market rates.
  
- **📊 Statistics Dashboard**  
  Get insightful statistics on your spending and savings habits with beautifully designed graphs and charts.

- **🌐 Multi-Language Support**  
  Switch between two languages for a more personalized experience.

- **🔐 User Authentication**  
  - Sign up and log in functionality.
  - Securely manage your data and preferences.
  
- **💾 Backend Integration**  
  This frontend communicates with a custom-built backend for secure data management. Check out the backend repository [here](https://github.com/TychonK/wallet-app-front).

## 🛠️ Tech Stack

- **Frontend Framework:** React.js
- **Styling:** CSS, SCSS
- **State Management:** Redux / Context API
- **Routing:** React Router
- **API Communication:** Axios / Fetch API
- **Internationalization (i18n):** React-i18next
- **Charts & Graphs:** Chart.js / D3.js

## 🏁 Getting Started

To get the frontend part of the app running on your local machine, follow these simple steps:

### Prerequisites

- **Node.js** (v18.x or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/wallet-app-front.git
   cd wallet-app-front

2. **Install dependencies**  
   ```bash
   npm install

3. **Run the development server**
    ```bash
    npm start
    
The app will be available at http://localhost:3000.

## ⚙️ Configuration

The app connects to a custom backend. Make sure to configure the API base URL in your environment variables.

Create a `.env` file in the root of your project:
    ```bash
    REACT_APP_API_URL=<your-backend-url>

    Ensure the backend is running before starting the frontend.

## 🌍 Multi-Language Support

The app currently supports the following languages:
- 🇺🇸 English
- 🇺🇦 Ukrainian

You can easily switch between languages via the settings page.

## 📊 Statistics & Charts

Utilize dynamic charts to track and visualize transaction patterns. Data is fetched in real-time from the backend and displayed using user-friendly graphs.

## 🧑‍💻 Contribution Guidelines

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

## 📄 License

This project is licensed under the MIT License.