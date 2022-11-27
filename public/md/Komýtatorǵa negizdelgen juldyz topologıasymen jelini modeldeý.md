Aldymen kishkene teorıa. Hub OSI modeliniń 1m deńgeıinde jumys isteıdi jáne aqparatty bastapqy porttan basqa barlyq porttarǵa jiberedi. `Switch` `2M` `OSI` deńgeıinde jumys isteıdi jáne hosttardyń `MAC address` kestesin paıdalaný arqyly aqparatty tek taǵaıyndalǵan portqa jiberedi. `IP` jelilerinde derekterdi berýdiń 3 negizgi ádisi bar: *Unicast*, *Broadcast*, *Multicast*
- Unicast (Unicast) – paketti bir hosttan ekinshi hostqa jiberý prosesi.
- Multicast (multicast) – paketti bir hosttan keıbir shekteýli hosttar tobyna jiberý prosesi.
- Broadcast (broadcast) – paketti bir hosttan jelidegi barlyq hosttarǵa jiberý prosesi.

Keıbir jaǵdaılarda switch kadrlardy hab retinde jibere alady, mysaly, eger kadr brodkast (broadcast - habar taratý) nemese unknown unicast (belgisiz jalǵyz adresatqa).
Praktıkalyq jumys. Komýtatorǵa negizdelgen juldyz topologıasymen jelini modeldeý
--
Biz hab negizinde juldyz topologıasymen jeliniń jumysyn zerttedik. Endi komýtatorǵa negizdelgen uqsas jelini ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_1.png)`Sýret. 4.1. 2960 modeliniń komýtatoryna negizdelgen juldyz`
Komýtatorǵa negizdelgen juldyz topologıasy bar jeliniń mysaly ([task-4-1.pkt)](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/task-4-1.pkt) qosa beriledi.

Fızıka qoıyndysynda 24 Fast Ethernet porty jáne 2 `Gigabit Ethernet` porty bar qosqyshtyń kórinisin kórýge ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_2.png)`2960 modeliniń qosqyshynyń fızıkalyq kórinisi`

Simulation rejıminde biz súzgilerdi konfıgýrasıalaımyz jáne fýnksıany qoldana otyryp, qosqysh arqyly eki kompúter arasyndaǵy pakettiń ótýin qarastyramyz. Kórip otyrǵanyńyzdaı, hab pen komýtatordaǵy pakettik marshrýttar ár túrli bolady: tikeleı jáne keri baǵytta hab barlyǵyna, al komýtator tek bireýine jiberedi.
Tapsyrma
--
Habtan, komýtatordan jáne 4h kompúterden jergilikti jelini jobalańyz

Jobalanýy kerek Jeli sýrette kórsetilgen. ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_3.png)`Sýret. 4.3. Jobalanǵan jeli`

Bul jelini eki jolmen ornatyńyz jáne dıagnostıkalańyz (ping ýtılıtasy jáne PDU tiziminiń terezesinde. Modeldeý rejıminde jeliniń sátti jumys isteıtinine kóz jetkizińiz.
>**Eskertý**
> Modeldeýdi oryndamas buryn paketterdi súzýdi ornatý kerek. Ol úshin "súzgilerdi ózgertý" batyrmasyn basý kerek, tereze ashylady, onda tek "ICMP" jáne "ARP"protokoldaryn qaldyrý kerek. Avto túsirý/oınatý túımesi búkil ping prosesin bir proseste modeldeýdi bildiredi, al "túsirý/Alǵa" ony kezeń-kezeńimen kórsetýge múmkindik beredi.

Praktıkalyq jumys. Jeli arqyly trafıkti berý sapasyn zertteý
--
Jergilikti jeliniń ótkizý qabilettiligin (trafıkti jeli arqyly berý sapasy) zertteý kezinde jelige úlken júkteme jasaý úshin pakettiń kólemin ulǵaıtyp, qashyqtaǵy túıinnen jaýap kútpesten qysqa ýaqyt aralyǵynda suranystar jibergen jón. Alaıda, ping ýtılıtasy aldyńǵy suraýǵa jańǵyryq jaýap almaı jáne kútý ýaqyty aıaqtalǵanǵa deıin jańǵyryq suraýyn jiberýge múmkindik bermeıdi. Sondyqtan aıtarlyqtaı trafıkti uıymdastyrý úshin biz Traffic Generator baǵdarlamasyn qoldanamyz. Jumys isteý úshin kelesi jelini jasańyz jáne ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_4.png)`Sýret. 4.4. Bizdiń jumysymyzǵa arnalǵan jeli topologıasy`
Traffic Generator-men alǵashqy tanysý
--
PC1 basqarý terezesinde jumys ústeli qoıyndysynda Traffic Generator qoldanbasyn tańdap, PC1-den PC8-ge trafıkti tasymaldaý úshin parametrlerdi ornatyńyz. Túsinikti bolý úshin men terezeniń aǵylshyn tilindegi nusqasynyń janynda sol mátindi CPT baǵdarlamasynyń orys tilindegi nusqasyna ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_5.png)`Sýret. 4.5. Trafık generatoryn ornatý (PS1-den PC 8-ge deıingi trafık opsıasy)`

Sonymen, ICMP protokolynyń kómegimen biz 192.168.0.1 meken-jaıy bar PC1 jáne 192.168.0.8 meken-jaıy bar PC8 kompúterleri arasynda trafık qurdyq. Bul jaǵdaıda `Source Settings` (derekkóz parametrleri) bóliminde `Auto Select Port` (portty avtomatty túrde tańdaý) qusbelgisin qoıyp, `PDU Settings` (IP paketiniń parametrleri) bóliminde osy óris parametrleriniń kelesi mánderin ornatyńyz:
Select application: PING 
- **Destination: IPAddress:** 192.168.0.8 (адресполучателя)
- **Source IP Address:** 192.168.0.1 (адрес отправителя);
- **TTL:** 32 (время жизни пакета);
- **TOS:** 0 (тип обслуживания, "0" - обычный, без приоритета);
- **Sequence Number:** 1 (начальное значение счетчика пакетов);
- **Size:** 1400 (размер поля данных пакета в байтах);
- **Simulations Settings** - здесь необходимо активировать переключатель;
- **Periodic Interval:** 0.3 Seconds (период повторения пакетов)

>**Nazar aýdaryńyz**
>Avtor ornatqan parametrlerdi paıdalanýdyń qajeti joq. Siz ózińizdi kórsete alasyz, mysaly, Size: 1500, Periodic interval: 0.5 Seconds. Alaıda, eger IP kózin qate kórsetseńiz, onda generator jumys istemeıdi.
>
>PC1 jáne PC8 arasynda jiberý (Jiberý) túımesin basqannan keıin belsendi derekter almasý bastalady. Trafık aǵynyn úzbeý úshin trafık generatory terezesin jappańyz-shamdar únemi jypylyqtaýy kerek!

>**Jańa termın**
>TTL-pakettiń ómir súrý ýaqyty. Bul parametrdiń bolýy pakettiń jelide sheksiz júrýine jol bermeıdi. TTL paket ótetin árbir túıinde (hopta) birlikke azaıady.

Jeli arqyly trafıkti tasymaldaý sapasyn zertteýge arnalǵan jeli mysaly ([task-4-2.pkt](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/task-4-2.pkt)) qosa beriledi.
Jeli jumysynyń sapasyn zertteý
--
Jeli jumysynyń sapasyn baǵalaý úshin PING –N 200 192.168.0.8 komandasynyń kómegimen RS1 jáne RS8 arasyndaǵy paketter aǵynyn beremiz jáne joǵalǵan paketter sany boıynsha jeli jumysynyń sapasyn baǵalaımyz. "–N " parametri berilgen eho suraýlarynyń sanyn ornatýǵa múmkindik beredi (bizde 200 ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_6.png)`Sýret. 4.6. Pc8-ge 200 paket jiberemiz`

pıngpen bir mezgilde RS2 kompúterindegi trafık generatoryn qosý arqyly jelini júkteńiz (taǵaıyndalǵan túıin – RS8, derekter órisiniń ólshemi–2500 baıt, berilistiń qaıtalaný kezeńi - 0,1 ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_7.png)`Sýret. 4.7. Biz jelige júktemeni arttyramyz`

Jeliniń sapasyn baǵalaý úshin-joǵalǵan paketterdiń sanyn jazyńyz ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_8.png)`Sýret. 4.8. 6 paket joǵaldy`
>**Eskertý**
>Sonymen qatar, jelini kez-kelgen jeli túıinderi arasynda taǵy bir trafık aǵynyn uıymdastyrý arqyly júkteýge bolady, mysaly, PC3 noýtbýgynda trafık generatoryn qosý arqyly.
>
>Bizdiń jumysymyzdyń osy bóligin aıaqtaý úshin toqtatý túımesin basý arqyly barlyq túıinderdegi Traffic Generator baǵdarlamasyn toqtatyńyz.

Jergilikti esepteý jelisiniń ótkizý qabiletin arttyrý
--
Habtardyń ornyna qosqyshtardy ornatý jeli paıdalanýshylarynyń paketteri arasynda soqtyǵysý múmkindigin joıatyndyǵyn teksereıik. Ortalyq habty aýystyrǵyshqa aýystyryńyz (sýret. 4.9). Biraz kúte turyńyz jáne jeliniń jumys istep turǵanyna kóz jetkizińiz-barlyq port markerleri qyzyl emes, ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_9.png)`Sýret. 4.9. Ortalyq habty komýtatorǵa aýystyrǵan kezde jeli topologıasy`

PING-N 200 192.168.0.8 pármenin paıdalanyp, RS1 jáne RS8 arasyndaǵy paketter aǵynyn qaıtadan ornatyńyz jáne RS2-de Traffic Generator qosyńyz. Jeliniń jańa nusqasynyń jumysyn qadaǵalańyz. Parazıttik trafıkti azaıtý arqyly jeliniń sapasy joǵarylaǵanyna kóz jetkizińiz ( ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_10.png) `Sýret. 4..` ). ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/4_10.png)`Sýret. 4.10. 1 paket joǵaldy`
Bir emes, barlyq habtardy komýtatorlarmen aýystyrý jelidegi trafıktiń sapasyn edáýir jaqsartatynyn ózińiz tekserińiz. Jeli arqyly trafıkti berý sapasyn zertteýge arnalǵan osyndaı jeliniń mysaly ([task-4-3.pkt](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/4/files/task-4-3.pkt)) qosa beriledi.