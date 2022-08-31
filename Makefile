# = = = = = = = = Production
prod-start:
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

# = = = = = = = = drawio to pdf

drawio:
	docker-compose -f docker-compose.drawio.yml up
	docker-compose -f docker-compose.drawio.yml down

drawio-down:
	docker-compose -f docker-compose.drawio.yml down

# = = = = = = = = tex to pdf

tex:
	docker-compose -f docker-compose.texlive.yml up
	docker-compose -f docker-compose.texlive.yml down

tex-down:
	docker-compose -f docker-compose.texlive.yml down
