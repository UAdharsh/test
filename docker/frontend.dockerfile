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

# Build the project
RUN npm run build

# Expose port 3000 for frontend
EXPOSE 3000

# Start application
CMD ["npm", "start"]
