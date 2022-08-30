# = = = = = = = = Production
prod:
	docker pull pavelinnokentevichgalanin/6sem-practice-backend
	docker pull pavelinnokentevichgalanin/6sem-practice-frontend
	cd prod && docker-compose up

prod-down:
	cd prod && docker-compose down

# = = = = = = = = Database for development

db:
	docker-compose --env-file backend/.env -f docker-compose.mysql.yml up

# = = = = = = = = Frontend for development

front:
	npm run start --prefix frontend

# = = = = = = = = Backend for development

back:
	npm run start:dev --prefix backend
