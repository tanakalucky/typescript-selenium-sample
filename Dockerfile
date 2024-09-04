FROM node:20-slim

# Install necessary dependencies
RUN apt-get update && apt-get install -y git vim chromium chromium-driver \
    && rm -rf /var/lib/apt/lists/*

# Set the environment variable for Chromium and ChromeDriver
ENV CHROME_BIN=/usr/bin/chromium
ENV CHROMEDRIVER_PATH=/usr/bin/chromedriver
