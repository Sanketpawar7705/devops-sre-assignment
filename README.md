# devops-sre-assignment
A DevOps assignment using Node.js with Puppeteer for web scraping and Python Flask for hosting data, built using Docker multi-stage builds.

## Technologies Used
- Node.js
- Puppeteer
- Chromium
- Python
- Flask
- Docker

## Project Overview
- Node.js with Puppeteer is used to scrape basic data from a given website.
- The scraped data is saved as a JSON file.
- Python Flask is used to serve the scraped data over HTTP.
- Docker multi-stage build is used to keep the final image lightweight.

## Project Structure
- Dockerfile
- README.md
- package.json
- requirements.txt
- scrape.js
- server.py

## Build the Docker Image

Run the following command from the project  

docker build -t .

## Run the Docker Container
docker run -p -d 5000:5000 ID


## Access the Output
http://localhost:5000

## Output
{
  "title": "Example Domain",
}
<img width="1366" height="621" alt="Screenshot (179)" src="https://github.com/user-attachments/assets/297aebb0-63f4-40a0-b60e-b81e8a7fdabb" />


