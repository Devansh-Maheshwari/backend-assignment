# 🚀 Crypto  Tracker

This project is a **Node.js** and **MongoDB**-based backend service that fetches, stores, and provides cryptocurrency price statistics and market data. It includes a scheduled job to fetch price data every **2 hours** and APIs to retrieve the latest price stats and price deviation.

---

## 🛠️ Tech Stack

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Node-Schedule (for background jobs)
- Math.js (for statistical calculations)
- dotenv (for environment variables)

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v18 or above)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

---

### **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Devansh-Maheshwari/crypto-tracker.git  
   cd backend-assignment
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Update Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   API_URL=your_crypto_api_endpoint
   ```

4. **Start the Server**
   ```bash
   node index.js
   ```

---

## 📌 Features

### 1️⃣ **Background Job (Runs Every 2 Hours)**
- Fetches cryptocurrency data (Bitcoin, Ethereum, Matic) from the API.
- Stores the data in MongoDB.

### 2️⃣ **APIs**

#### **🔹 Get Latest Stats for a Cryptocurrency**
   **Endpoint:** `GET /stats?coin=bitcoin`
   
   **Response:**
   ```json
   {
      "price": 50000.25,
      "marketCap": 900000000,
      "24hChange": -2.5
   }
   ```

#### **🔹 Get Standard Deviation of Prices for a Cryptocurrency**
   **Endpoint:** `GET /deviation?coin=bitcoin`
   
   **Response:**
   ```json
   {
      "deviation": 1500.45
   }
   ```

---

## 📂 Project Structure
```
crypto-tracker/
│── controllers/
│   ├── cryptoController.js       # Handles API requests for stats & deviation
│   ├── fetchCryptoData.js        # Fetches crypto data from API & saves to DB
│── model/
│   ├── Crypto.js                 # Mongoose schema for storing crypto data
│── Routes/
│   ├── cryptoRoutes.js           # Defines API routes
│── config/
│   ├── database.js               # Connects to MongoDB
│── index.js                     # Main entry point, sets up Express & scheduling
│── .env                          # Environment variables
│── package.json                  # Dependencies and scripts
```

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing
Pull requests are welcome! Feel free to contribute by improving API functionality or optimizing data handling.

---

### 🚀 Happy Coding! 🚀
