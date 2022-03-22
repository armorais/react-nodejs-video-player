FROM python:3.9.11-slim
COPY ./src /app/
COPY ./requirements.txt /opt/requirements.txt
RUN pip3 install --upgrade pip && pip3 install -r /opt/requirements.txt

EXPOSE 80
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]