repo = webapp
version = 1.0
account = $(shell aws sts get-caller-identity --query "Account" --output text)

deploy:
	kubectl apply -f kubernetes/deploy.yaml
