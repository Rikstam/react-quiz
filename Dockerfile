# Dockerfile
FROM node:22-slim

WORKDIR /app

# Install dependencies only when package.json changes
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 5173 for Vite dev server
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]