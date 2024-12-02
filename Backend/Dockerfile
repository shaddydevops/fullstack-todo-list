# Stage 1: Build
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Stage 2: Run
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app ./

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Set environment variable
ENV NODE_ENV=production

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
