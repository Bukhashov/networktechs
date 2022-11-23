Praktıkalyq jumys. Jelini modeldeý rejımin uıymdastyr
------------------------

Baǵdarlamanyń jumys keńistiginde `4 DK` jáne `2 habtan` turatyn jeli quryńyz. Kompúterge IP mekenjaılaryn jáne jeli maskasyn ornatyńyz `255.255.255.0`
![Barlyq kompúterler bir jelide ornalasqan](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_1.png)
*`Sýret. 2.1. Barlyq kompúterler bir jelide ornalasqan`*

> **Keńes**
> Bizdiń shemany faıl-basyp shyǵarý-Basyp shyǵarý pármenimen `*PNG` keńeıtimi bar sýret retinde saqtaýǵa bolady.
>
>Endi `shift + S` perneler tirkesimi arqyly modeldeý rejımine ótý kerek nemese jumys keńistiginiń tómengi oń jaq buryshyndaǵy modeldeý belgishesin basý kerek.

![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_2.png)
*`Sýret. 2.2. Modeldeý Túımesi`*

Túımeni basyńyz `Edit Filters`(súzgilerdi ózgertý) jáne `ICMP`-den basqa barlyq jelilik protokoldardy alyp tastańyz
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_3.png)
*`Sýret. 2.3. ICMP qusbelgisi belsendi`*

***Jańa termın***

ICMP (Internet Control Message Protocol) — TCP/IP hattamalar stegine kiretin jelilik hattama. Negizinen ICMP qate týraly habarlamalardy jáne derekterdi berý kezinde týyndaǵan basqa erekshe jaǵdaılardy jiberý úshin qoldanylady.

Hosttardyń birinen basqa túıindi pıngteýge tyrysaıyq. Muny isteý úshin biz modeldeý rejıminde paketterdiń jeli arqyly qalaı ótetinin kórý úshin bir-birinen alys ornalasqan túıinderdi tańdaımyz. Sonymen, PC1 PC2 pıngimen
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_4.png)
*`Sýret. 2.4. PC1 PC2 pıngteri (prosestiń bastalýy)`*

>**Eskertý**
>`Ping-TCP/IP` negizindegi jelilerdegi qosylymdardy tekserýge arnalǵan ýtılıta.Ýtılıta `ICMP` protokolynyń suraýlaryn (ICMP Echo-Request) kórsetilgen jeli Túıinine jiberedi jáne kelip túsken jaýaptardy tirkeıdi (ICMP Echo-Reply). Suraý jiberý men jaýap alý (RTT) arasyndaǵy ýaqyt marshrýt boıynsha eki jaqty kidiristerdi (RTT) jáne pakettiń joǵalý jıiligin anyqtaýǵa múmkindik beredi, ıaǵnı derekter arnalary men aralyq qurylǵylardaǵy júktemeni janama túrde anyqtaıdy. ICMP jaýaptarynyń tolyq bolmaýy qashyqtaǵy túıinniń (nemese kez kelgen aralyq marshrýtızatordyń) ICMP Echo-Reply-di bloktaıtynyn nemese ICMP Echo-Request-ti elemeıtinin bildirýi múmkin.
>
>PC1-de paket (konvert) paıda boldy, ol ony jeli arqyly jyljytýdy kútedi. Iske qosý jyljytý býmany jelige kezeń-kezeńimen modeldeý terezesindegi batyrmany(alǵa) basý arqyly qosýǵa bolady.
Eger siz batyrmany bassańyz `Captore | Forward` (oınatý), onda biz pakettiń jeli arqyly ótýiniń búkil sıklin kóremiz. Ishinde `Auto capture | Play` (oqıǵalar tizimi) biz pıngtiń sátti nátıjesin kóre alamyz
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_5.png)
*`Sýret. 2.5. PC1 jáne PC2 baılanysy bar`*

Zertteý úshin 4 DK jáne 2 habtan turatyn jeliniń mysaly jelini modeldeý rejımi qosa beriledi.

**Cisco Packet Tracer ishindegi OSI modeli**
---------------------------
Konvertti basý bizge pakettiń jeli arqyly qozǵalysy týraly qosymsha aqparatty kórsetedi. Bul jaǵdaıda birinshi qoıyndyda biz OSI modelin kóremiz. OSI Model (OSI modeli) qoıyndysynda berilgen jelilik qurylǵy jumys isteıtin OSI deńgeıleri týraly aqparat berilgen.

![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_6.png)
*`Sýret. 2.6. OSI modelindegi pakettiń qozǵalysyn baqylaý`*

Basqa qoıyndyda pakettiń qurylymyn kórýge bolady
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_7.png)
*`Sýret. 2.7. Paket qurylymy`*

Sonymen, biz jumysymyzdyń belgili bir aralyq qorytyndysyn shyǵaramyz. Packet Tracer ping ýtılıtasynyń qalaı jumys isteıtinin kórsetetin modeldeý (modeldeý) rejımin usynady. Bul rejımge ótý úshin jumys aımaǵynyń tómengi oń jaq buryshyndaǵy Simulation mode (modeldeý) belgishesin nemese `Shift+S` perneler tirkesimin basý kerek. Modeldeý ping prosesi aıaqtalǵan kezde nemese modeldeý terezesi jabylǵan kezde toqtatylady. Modeldeý rejıminde siz paıdalanylǵan hattamalardy qadaǵalap qana qoımaı, sonymen qatar osy Hattamanyń `OSI` modeliniń jeti deńgeıiniń qaısysynda jumys isteıtinin kóre alasyz. Anımasıany qaraý barysynda biz habtyń jumys prınsıpin kórdik. Hab (hab) paketti barlyq porttarda qaıtalaıdy, olardyń bireýinde aqparat alýshy bar degen úmitpen. Eger paketter keıbir túıinderge arnalmaǵan bolsa, onda bul túıinder paketterdi elemeıdi. Paket jiberýshige oralǵanda, biz"paketti qabyldaý"qusbelgisin kóremiz.

![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_8.png)
*`Sýret. 2.8. Paketti elemeý belgisheleri jáne qosylymdy rastaý`*

Pármen joly (Командная строка)
-----------
Eger siz batyrmany bassańyz `Auto Capture | Play` (oınatý), onda biz pakettiń jeli arqyly ótýiniń búkil sıklin kóremiz (proses 4 ret qaıtalanady)
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_9.png)
*`Sýret. 2.9. PC1-den PC2-ge deıin Pıng`*

> **Munda:** TTL-jiberilgen pakettiń ómir súrý ýaqyty (paket jeli arqyly jyljytylǵan kezde ótýi múmkin marshrýtızatorlardyń maksımaldy sanyn anyqtaıdy), 
>- `time` - suraý jiberýge jáne jaýap alýǵa ketetin ýaqyt,
>- `min` - mınımaldy jaýap berý ýaqyty,
>- `max` - maksımaldy jaýap berý ýaqyty,
>- `avg` - ortasha jaýap berý ýaqyty

Praktıkalyq jumys 2-2. Kompúterdiń jelilik parametrlerin onyń grafıkalyq ınterfeısinde ornatý
-------
>Bizdiń jelige taǵy bir DK – PC4 qosaıyq. Bes kompúterden jáne 2 habtan turatyn ózgertilgen jeliniń mysaly (fail [task-2-2.pkt](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/task-2-2.pkt)) qosa beriledi. 
>PC 4 qurylǵysynyń qasıetterin onyń sýretin basý arqyly ashaıyq. Kompúterdi konfıgýrasıalaý úshin pármen jolynan ipconfig pármenin qoldanamyz

![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_10.png)
*`Sýret. 2.10. Kompúterge IP mekenjaıyn jáne jeli maskasyn taǵaıyndańyz`*

Sonymen qatar, IP mekenjaıy men jeli maskasyn qurylǵynyń grafıkalyq ınterfeısine engizýge bolady
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_11.png)
*`Sýret. 2.11. Kompúterdi konfıgýrasıalaýdyń ekinshi ádisi (jeli túıininiń parametrleri)`*

Ár kompúterde biz taǵaıyndaǵan parametrlerdi pármenmen tekseremiz ipconfig
![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/2/files/2_12.png)
*`Рис. 2.12. Проверка конфигурирования ПК3`*