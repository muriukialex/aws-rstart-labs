start-app:
	docker-compose up

tear-app: 
	docker-compose down --rmi all

# Phony targets to avoid conflicts with file names
.PHONY: start-app tear-app
