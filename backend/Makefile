db:
	docker-compose -f docker-compose.database.yml up

back:
	npm run start:dev

init-db:
	sequelize db:drop
	sequelize db:create
	sequelize db:migrate
	sequelize db:seed:all
