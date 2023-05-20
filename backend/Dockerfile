FROM python:3.10

WORKDIR /myapp
ENV FLASK_APP="app/app.py"
ENV FLASK_DEBUG=1

COPY /app/requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
