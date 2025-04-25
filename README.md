# 💹 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit application that simulates real-time crypto price tracking (like CoinMarketCap), with mock WebSocket updates and full Redux state management.

---

## 🚀 Demo

> 🎥 [Watch Video Walkthrough](https://drive.google.com/file/d/1AHGTrEfhn_Pta-pdNdDdKx0EkKMTWoMd/view?usp=sharing)  

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux Toolkit (createSlice, selectors)
- **Styling**: CSS
- **Charting**: Static SVG/PNG charts for 7D performance
- **Simulation**: setInterval() for fake WebSocket updates

---

## 🧱 Architecture Overview

src/ ├── Utils/  
        │ └── store.js # Redux store configuration  
        │ └── sampleData.js # Sample crypto data
        │ └── cryptoSlice.js # Redux slice for asset state + simulation logic
     ├── public/ 
        │ └── Logos/ 
        │ └── Charts/ #sample SVGs 
     ├── Components/ 
        │ └── # Reusable components CryptoTable.jsx 
        │ └── # Stylesheet CryptoTable.css
     ├── App.jsx # Main UI layout 
     ├── main.jsx # ReactDOM entry

---

## 📦 Setup Instructions

### 1. Clone the Repository
git clone https://github.com/Ashi-Jain07/Crypto-price-tracker.git
cd Crypto-price-tracker

### 2. Install Dependencies
npm install

### 3. Start the Development Server
npm run dev
Open http://localhost:5173 in your browser.

## 📊 Features
🔄 Real-time mock updates every 1–2 seconds

## 📉 Responsive table showing:

Crypto logo, name, symbol

Price, % change (1h / 24h / 7d)

Market Cap, Volume, Supply, Max Supply

Static 7D Chart (SVG/Image)

🎨 Color-coded % changes (green = positive, red = negative)

💾 All data in Redux store (no local state)

🧠 Optimized selectors to avoid re-renders

---
