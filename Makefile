SERVICE_NAME = aws-rstart-labs

start-app:
	docker-compose up

tear-app: 
	docker-compose down --rmi $(SERVICE_NAME)

# Phony targets to avoid conflicts with file names
.PHONY: start-app tear-app