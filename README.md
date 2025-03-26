# manage-bulk-data
This is a **Node.js + Express + MySQL** application that implements bulk data Create and Read operations.  

## 🚀 Features
- Bulk Insert and Fetch APIs
- **Sequelize ORM**
- **Environment Variables** via `.env`
- **Unit Tests** with `Jest` and `Supertest`


🛠️ Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/TanyaKhandelwal/manage-bulk-data.git
cd manage-bulk-data```

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables
Create a .env file in the root directory:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bulk_data_db
PORT=3000

4️⃣ Start MySQL Server
Make sure MySQL is running:

mysql -u root -p
Create a database:

CREATE DATABASE dbname;

5️⃣ Run the Project
npm start
Server runs at http://localhost:3000 🚀


📌 API Endpoints
POST	/api/bulk-insert	Insert bulk data
GET	/api/bulk-fetch	Fetch all records

🔹 Sample Request: Bulk Insert
POST /api/bulk-insert
[
    { "name": "John", "email": "john@example.com", "age": 30 },
    { "name": "Jane", "email": "jane@example.com", "age": 25 }
]

🔹 Sample Response
{
    "success": true,
    "message": "Records inserted successfully",
    "data": [
        { "id": 1, "name": "John", "email": "john@example.com", "age": 30 },
        { "id": 2, "name": "Jane", "email": "jane@example.com", "age": 25 }
    ]
}


🧪 Running Tests
To run unit tests:
npm test


🛠️ Technologies Used

Node.js + Express.js
Sequelize ORM
Jest + Supertest (for testing)
