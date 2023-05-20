# Getting Started
```
docker-compose run --rm backend sh -c "cd app && pip install -r requirements.txt"
docker-compose run --rm backend sh -c "cd app && npm install"
docker compose build
docker compose up -d
```

download [ggml-gpt4all-j-v1.3-groovy](https://gpt4all.io/models/ggml-gpt4all-j-v1.3-groovy.bin) and put it in /backend/app/models

visit http://localhost:3000