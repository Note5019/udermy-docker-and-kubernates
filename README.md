# udermy-docker-and-kubernates

create react project
- `npx create-react-app frontend`

# Command
- `docker build -f Dockerfile.dev .`
  - ระบุ file ที่จะ build ด้วย -f {file_name}
  - ถ้าไม่ได้ใส่ -f flag จะ build จาก file `Dockerfile` เป็น default
- `docker run -it -p 3000:3000 CONTAINER_ID`
- `docker run -it -p 3000:3000 -v $(pwd):/app 4789810b25b5`