# udermy-docker-and-kubernates

create react project
- `npx create-react-app frontend`

# Command
- `docker build -f Dockerfile.dev .`
  - ระบุ file ที่จะ build ด้วย -f {file_name}
  - ถ้าไม่ได้ใส่ -f flag จะ build จาก file `Dockerfile` เป็น default
- `docker run -it -p 3000:3000 CONTAINER_ID`
- `docker run -it -p 3000:3000 -v $(pwd):/app 4789810b25b5`
- `docker run note5019/docker-react npm run test -- --coverage` ใช้การไม่ด้ายยยยย รันแล้วไม่ยอมหยุด
- `docker run -e CI=true note5019/docker-react npm run test` อันนี้ใช้ได้ รันแล้วหยุด exit ออกมา
- `kubectl set image deployment/client-deployment client=stephengrider/multi-client:v5 `


- `eval $(minikube docker-env)` set current terminal to connect to docker-server in virtual-machine
  - `docker ps` to see the result (list of container in VM)

- `kubectl delete deployment client-deployment`
- `kubectl delete service client-node-port`
- `kubectl apply -f k8s/client-deployment.yml` 
- `kubectl apply -f k8s` = apply all config in k8s folder