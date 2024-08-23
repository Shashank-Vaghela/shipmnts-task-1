# Data Import Application

This application allows users to upload an Excel file containing company and contact data. The data is parsed, validated, and displayed in a table for review before being stored in a MongoDB database.

## Features

- **File Upload**: Upload Excel files (.xls or .xlsx) containing company and contact data.
- **Data Preview**: Display the contents of the uploaded Excel sheet in a table format for user review.
- **Data Validation**: Validate the uploaded data to ensure it meets the required format and constraints.
- **Database Storage**: Store the validated data into a MongoDB database after user confirmation.
- **Error Handling**: Graceful error handling and user feedback for invalid data or other issues.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or use a MongoDB cloud service)

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```
## Install Dependencies

### Install the necessary dependencies:

```bash
npm install
```

## Set Up Environment Variables

### Create a .env file in the root directory and add your MongoDB URI:

```bash
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=5000

```

## Run the Application

### To start the server:

```bash
npm run dev
```

### Usage

- **Open the Application:** Go to http://localhost:5000 in your web browser.
- **Upload File:** Use the file upload form to select and upload your Excel file.
- **Review Data:** Review the data displayed in the preview table.
- **Confirm or Cancel:** Confirm to store the data in the database or cancel to discard the upload.


