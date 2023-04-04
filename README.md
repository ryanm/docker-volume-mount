1. Clone this repo
2. In a terminal, from the root directory of this repo, run `docker-compose up --build`
3. Verify both containers are running: `docker container ls`
4. Run `docker-compose exec container1 node /app/read_file.js`

You should see the expected output: "Content of the file: Hello from container2"
