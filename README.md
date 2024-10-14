# Film Shooting Backend 
This project serves as the backend for a system that assists administrators in managing a high volume of actor applications for film production.

## Related Repositories

- [Frontend Repository](https://github.com/Med-hedi-bra/Film_shooting_Frontend.git) - The frontend part of the project can be found here.


# Backend Repository
This documentation demonstrates how to run a Node application using Docker and Docker Compose. The provided `docker-compose.yml` file helps you build and run the NodeJs app container.


## Prerequisites

Before starting, ensure you have the following installed:

- **Docker**: Install Docker from the official website [here](https://www.docker.com/get-started).
- **Docker Compose**: Comes pre-installed with Docker Desktop, but you can check the installation guide [here](https://docs.docker.com/compose/install/) if needed.

## How to Use

# 1. Clone the repository
You can clone the repository using this command
```bash
git clone https://github.com/Med-hedi-bra/Film_shooting_Backend.git
cd Film_shooting_Backend
```
## 2. Setting Up a MongoDB Atlas Account and User Access

To begin using MongoDB Atlas, follow these steps:

1. **Create a MongoDB Atlas Account:**
   - Sign up for a free account at [MongoDB Atlas](https://cloud.mongodb.com/).
   - Follow the prompts to create your first project and cluster.

2. **Configure Cluster and User Access:**
   - Once your cluster is set up, create a user to gain access to the database.
   - Assign appropriate permissions based on your use case (e.g., read/write).

This [article](https://www.geeksforgeeks.org/how-to-connect-node-js-to-mongodb-atlas-using-mongoose/) provides detailed guidance on setting up and configuring the cluster, and how to connect it to a Node.js application using Mongoose.


# 3. Setup Environment

To configure your environment, you need to create a `.env` file based on the provided `.env.dist` file. You can do this using the following command:

```bash
cp .env.dist .env
```

Once you have the `.env` file, you can customize it by modifying the values to suit your specific setup. Below is an example of how the `.env` file might look:

```env
MONGO_URL=mongodb+srv://username:password@cluster0.hbknp.mongodb.net/tournage-database?retryWrites=true&w=majority
PORT=8080
TOKEN_KEY=changeit
```

### Customizing the `.env` file

- **MONGO_URL**: Replace `username` and `password` with the actual credentials you created in your MongoDB cluster.
- **PORT**: Adjust the port number if needed, though the default is usually fine.
- **TOKEN_KEY**: This is a placeholder value; replace `changeit` with a secure key of your choice to be used for token generation.

Make sure to update the `MONGO_URL` to match your MongoDB setup and ensure that your application can connect to the correct database.


###### Note: If you want to change the application's port, make sure to also update it in the docker-compose.yml file; otherwise, you may encounter issues related to port misconfiguration. 

# 3. Build and Run the NodeJs App
To run the project, you first need to build the Docker image and then start it. If you make any changes or improvements to the code, you will need to rebuild the image

```bash
docker compose -f docker-compose.yml up -d --build
```
This command will:
 - Build the Docker image based on the Dockerfile
 - Run the app container in detached mode (-d)

# 3. Running the NodeJs App (Without Rebuilding)
If the image is already built and you want to run the NodeJs app container, use:
```bash
docker compose -f docker-compose.yml up -d
```
# 4. Stopping the Application
To stop and remove the running containers, execute:
```bash
docker compose -f docker-compose.yml down
```
# 5. Accessing the Application
 Once the container is up and running, access the NodeJs app at: http://localhost:8080

# Additional Notes:
 - Ensure Docker is running before executing the Docker Compose commands.
 - You may need to modify the docker-compose.yml or Dockerfile to fit your project.

# Development purpose 
If you intend to add new features or make significant changes to the code, using Docker may not be the best approach in this situation. You might need to install Node.js and npm directly on your machine.
##### Node version : 14.x.x
##### NPM version: 10.5.2

