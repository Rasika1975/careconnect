# CareConnect Backend

CareConnect is an NGO healthcare support system that connects patients with healthcare resources through AI-assisted analysis and volunteer coordination.

## Tech Stack

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **dotenv** - Environment variable management
- **CORS** - Cross-Origin Resource Sharing
- **Nodemon** - Development tool for auto-restarting server

## API Endpoints

### Patient Management

- `POST /api/patient` - Submit patient support request with AI analysis

### Volunteer Management

- `POST /api/volunteer` - Register new volunteer

### AI Analysis

- `POST /api/ai/analyze` - Analyze health concern text (for testing AI logic)

### Health Check

- `GET /health` - Server health status

## AI Logic

The system implements rule-based automation to simulate AI decision-making without external APIs:

- If concern contains words like "pain", "emergency", "accident" → priority: High
- If contains "fever", "cold" → priority: Medium
- Else → Low priority

Categories returned: Emergency Care, Primary Care, General Inquiry

## Database Models

### Patient Model

- `name` (String, required)
- `age` (Number, required)
- `contact` (String, required)
- `concern` (String, required)
- `aiCategory` (String, default: 'General')
- `priority` (String, default: 'Low')
- `createdAt` (Date, default: now)

### Volunteer Model

- `name` (String, required)
- `email` (String, required)
- `skills` (String, required)
- `availability` (String, required)
- `createdAt` (Date, default: now)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables in `.env`:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `PORT` - Port to run the server on (default: 5000)
- `MONGO_URI` - MongoDB connection string

## Error Handling

The application includes comprehensive error handling:

- Validation for required fields
- Database error handling
- 404 handling for undefined routes
- Global error middleware
