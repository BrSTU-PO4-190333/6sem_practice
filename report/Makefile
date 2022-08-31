docker-compose-script:
	cd /app/report

	latexmk -pdf -output-directory=/temp/ -jobname=1_практика_ПО-4_Галанин_блоксхемы main_practice_diagram.tex
	latexmk -pdf -output-directory=/temp/ -jobname=1_практика_ПО-4_Галанин_диск main_practice_disk.tex
	latexmk -pdf -output-directory=/temp/ -jobname=1_практика_ПО-4_Галанин_текст main_practice_text.tex
	latexmk -pdf -output-directory=/temp/ -jobname=1_практика_ПО-4_Галанин_ПЗ main_practice_PZ.tex

	cp /temp/*.pdf /build/
