# Fullstack Todo List Application

This is a fullstack todo list application built with Node.js, Express, MongoDB, and React. This README provides instructions on how to build, run, and stop the application using Docker.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

## Project Structure
fullstack-todo-list/
├── Backend/
│ ├── src/
│ ├── Dockerfile
│ └── ...
├── Frontend/
│ ├── src/
│ ├── Dockerfile
│ └── ...
├── docker-compose.yml
└── README.md


## Building the Application

To build the application, navigate to the root directory of the project (where the `docker-compose.yml` file is located) and run the following command:

docker-compose build


This command will build the Docker images for both the frontend and backend services.

## Running the Application

To run the application, use the following command:


docker-compose up


This command will start all the services defined in the `docker-compose.yml` file. The application will be accessible at the following URLs:

- **Frontend**: [http://localhost:3001](http://localhost:3001)
- **Backend**: [http://localhost:3000](http://localhost:3000)
- **MongoDB**: Accessible internally within the Docker network.

### Running in Detached Mode

If you want to run the containers in detached mode (in the background), use the `-d` flag:

docker-compose up -d


## Stopping the Application

To stop the running containers, you can use the following command:

docker-compose down


This command will stop and remove all the containers defined in the `docker-compose.yml` file.

## Accessing the Application

- Open your web browser and navigate to [http://localhost:3001](http://localhost:3001) to access the frontend.
- The backend API can be accessed at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Make sure to set any necessary environment variables in your `.env` files for both the frontend and backend as needed.

## Troubleshooting

- If you encounter issues, check the logs for each service using:
  ```bash
  docker-compose logs <service_name>
  ```
  Replace `<service_name>` with `frontend`, `backend`, or `db` to view the logs for that specific service.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
