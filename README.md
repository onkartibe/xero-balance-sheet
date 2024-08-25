Prerequisites

    Docker and Docker Compose installed on your machine.

Getting Started

    Clone the Repository

    Clone the project repository to your local machine:

    bash

git clone https://github.com/onkartibe/xero-balance-sheet.git
cd xero-balance-sheet

Build and Run the Containers

Use Docker Compose to build and run the containers:

bash

    docker-compose up --build

    This command will build the Docker images for both the backend and frontend services, pull the mock API image, and start all three services.

    Access the Services
        Frontend: Open your browser and navigate to http://localhost:4000 to access the React frontend application.
        Backend: The backend API is available at http://localhost:8000. You can test it by navigating to http://localhost:8000/api/balance-sheet.
        Mock Xero API: The mock Xero API is available at http://localhost:3000.

Stopping the Containers

To stop the running containers, press Ctrl+C in the terminal where you ran docker-compose up. Alternatively, you can run:

bash

docker-compose down

Running Tests

If you need to run tests for your application (e.g., Jest for frontend), ensure that the required dependencies are installed and that your Docker environment is set up for testing.

For example, to run frontend tests inside the Docker container:

    Enter the Frontend Container

    bash

docker-compose exec frontend sh

Run the Tests

bash

    npm test

Troubleshooting

    Port Conflicts: Ensure that ports 3000, 4000, and 8000 are not being used by other services on your host machine.
    Network Issues: If you experience network-related issues, ensure Docker has the necessary permissions and network configurations.