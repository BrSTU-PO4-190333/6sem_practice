# = = = = = = = = Database for development

db:
	docker-compose --env-file backend/.env -f docker-compose.db.yml up

# = = = = = = = = Frontend for development

front:
	npm run start --prefix frontend

front-docker-build:
	docker-compose -f docker-compose.frontend.build.yml up --build

front-docker-build-down:
	docker-compose -f docker-compose.frontend.build.yml down

# = = = = = = = = Backend for development

back:
	npm run start:dev --prefix backend

back-docker-build:
	docker-compose --env-file backend/.env -f docker-compose.backend.build.yml up --build

back-docker-build-down:
	docker-compose --env-file backend/.env -f docker-compose.backend.build.yml down
