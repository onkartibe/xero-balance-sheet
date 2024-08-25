**Prerequisites**

    Docker and Docker Compose installed on your machine.

**Getting Started**

    Clone the project repository to your local machine:

    git clone https://github.com/onkartibe/xero-balance-sheet.git
    cd xero-balance-sheet


Build and Run the Containers:


    docker-compose up --build

This command will build the Docker images for both the backend and frontend services, pull the mock API image, and start all three services.

    Access the Services
        Frontend: Open your browser and navigate to http://localhost:4000 to access the React frontend application.
        Backend: The backend API is available at http://localhost:8000. You can test it by navigating to http://localhost:8000/api/balance-sheet.
        Mock Xero API: The mock Xero API is available at http://localhost:3000.


**Running Tests**

If you need to run tests for your application (e.g., Jest for frontend), ensure that the required dependencies are installed and that your Docker environment is set up for testing.

For example, to run frontend tests inside the Docker container:

    Enter the Frontend Container

    docker-compose exec frontend sh

Run the Tests

    npm test

**Troubleshooting**

    Port Conflicts: Ensure that ports 3000, 4000, and 8000 are not being used by other services on your host machine.
    Network Issues: If you experience network-related issues, ensure Docker has the necessary permissions and network configurations.
    Running test: There has been instaces where JEST cant run test becauses well known problem ECMAScript Modules and node modules. 

**UI screen**
![Screenshot 2024-08-25 at 10 14 21 PM](https://github.com/user-attachments/assets/e282d1e7-ee86-4c26-b928-1cc1bcdb5b55)

