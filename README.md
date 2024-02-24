# Keep Track of AWS r/Start Labs

- This application is designed to help AWS r/Start students to keep track of their AWS r/Start Labs.

## Overview

### Sign In
- Sign In with Google

### Track Labs as Completed

### Update Lab Completed Status


## Getting Started

1. Clone the project
 ```bash
 git clone https://github.com/muriukialex/aws-rstart-labs.git
```

2. Install dependencies
```bash
npm install
```

3. Update your `.env.local` file with your enviroment variables which also includes a [MONGODB_URI](https://www.mongodb.com/basics/mongodb-connection-string#:~:text=How%20to%20get%20your%20MongoDB,connection%20string%20for%20your%20cluster.)
```bash
cp .env.example .env.local
```
NB: Ensure you update your environent variables before starting the server

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you are using Docker:
Ensure you have [make](https://www.gnu.org/software/make/manual/make.html) installed `make --version`

- Build and run the Docker container
```bash
make start-app
```

- Tear down the Docker container
```bash
make tear-app
```

## Contributing 
- See [CONTRIBUTING.md](https://github.com/muriukialex/aws-rstart-labs/blob/main/CONTRIBUTING.md) instructions on how to contribute.

