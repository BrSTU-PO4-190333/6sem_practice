db:
	docker-compose -f docker-compose.database.yml up

back:
	npm run start:dev

back-docker-build:
	docker-compose -f docker-compose.build.yml up --build

back-docker-build-down:
	docker-compose -f docker-compose.build.yml down

back-docker-prod:
	docker-compose -f docker-compose.prod.yml up

back-docker-prod-down:
	docker-compose -f docker-compose.prod.yml down

init-db:
	sequelize db:drop
	sequelize db:create
	sequelize db:migrate
	sequelize db:seed:all
