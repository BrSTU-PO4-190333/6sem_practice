docker-compose-script:
	cd /app/report

	latexmk -pdf -output-directory=/temp/ -jobname=TP.PO4.190333-06_81_00 main_practice_1_pz.tex
	latexmk -pdf -output-directory=/temp/ -jobname=TP.PO4.190333-06_12_00 main_practice_2_a.tex
	latexmk -pdf -output-directory=/temp/ -jobname=TP.PO4.190333-06_90_00 main_practice_3_b.tex

	latexmk -pdf -output-directory=/temp/ -jobname=TP.PO4.190333-06_81_00.bundle main.tex

	cp /temp/*.pdf /build/
