# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port 5000 for backend API
EXPOSE 5000

# Start backend server
CMD ["npm", "start"]
