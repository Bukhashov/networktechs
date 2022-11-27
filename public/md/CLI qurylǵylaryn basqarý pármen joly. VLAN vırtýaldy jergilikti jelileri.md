Konsol
--
CISCO jelilik qurylǵylarynyń kópshiligi konfıgýrasıaǵa múmkindik beredi. Ol úshin jeli ákimshisi qurylǵyǵa tikeleı kabel (konsol) qosylymy arqyly qosylýy ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_1.png)`Sýret. 5.1. Jelilik qurylǵyǵa konsoldyq qosylý`
Sonymen, Cisco qurylǵylaryn baǵdarlamalaý kóbinese RJ-45 konsol porty arqyly júzege asyrylady. Sýrette. 5.2 jáne sýret. 5.3 marshrýtızatordaǵy konsol konnektorlarynyń fotosýretteri jáne konsol kabeliniń 2 nusqasy ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_2.png)`Sýret. 5.2. Basqarý (konsol) kabeliniń astyndaǵy qosqyshtar kók túspen` ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_3.png)`Sýret. 5.3. Basqarý kabelderiniń nusqalary`
>**Eskertý** Klasıkalyq konsol kabelinde kompúterdiń COM portyna qosylý úshin DB9 qosqyshy jáne marshrýtızatordyń konsol portyna qosylý úshin RG-45 qosqyshy bar. Qazir Cisco 28xx, 38xx jáne t.B. serıaly jańa marshrýtızatorlardy belsendi túrde alǵa jyljytýda. olar USB ınterfeısi arqyly konfıgýrasıalaý múmkindigin usynady (qarapaıym USB kabelderi qoldanylady).
>
>Konsoldi qosyp, qurylǵyǵa pármen joly arqyly kirý arqyly paıdalanýshy (jeli ákimshisi nemese jeli ınjeneri) ártúrli komandalardy ornata alady jáne osylaısha aparattyq konfıgýrasıa parametrlerin anyqtaı alady.

CLI paıdalaný kezinde qurylǵymen jumys isteý rejımderi
--
Pármen joly paıdalanýshy basqarý áserin quraıtyn tańbalardy engizetin oryndy bildiredi. Pármen jolymen jumys birneshe rejımde júzege asyrylady
| Rejım | Rejımge ótý |  Pármen jolynyń kórinisi| Rejımnen shyǵý|
| -------- | ----------------- | ---------------------------------- | -----------------------|
| Retteletin | Qosylý     | Router>                             | logout                  |
| Artyqshylyqty | Enable. | Router#                          | disable                |
| Jahandyq konfıgýrasıa | Configure terminal | Router(config)# | exit,end или Ctrl-Z |
| Interfeısterdi ornatý | Interface | Router(config-if) | еxit                       |

Несколько слов о виде командной строки:

**Router>** keıbir statısıkany kórýge jáne pıng sıaqty qarapaıym áreketterdi oryndaýǵa bolatyn paıdalanýshy rejımin sıpattaıtyn shaqyrý. Bul jeli operatory, tehnıkalyq qoldaýdyń birinshi jelisiniń ınjeneri, ol eshteńege zaqym keltirmeýi jáne artyq nárseni bilmeýi úshin rejım. Basqasha aıtqanda, osy rejımdegi komandalar jelilik qurylǵynyń qondyrǵylaryn ózgertpesten aqparatty ekranǵa shyǵarýǵa múmkindik beredi.

**Router#** artyqshylyqty rejımde shaqyrý. Artyqshylyqty rejım teńsheý jáne testileý pármenderin, jelilik qurylǵyny egjeı-tegjeıli tekserýdi, konfıgýrasıa faıldaryn basqarýdy jáne konfıgýrasıa rejımine kirýdi qoldaıdy. Oǵan enable pármenin engizý arqyly kirýge bolady.

**Router(konfıgýrasıa)#** Ǵalamdyq konfıgýrasıa rejıminde shaqyrý. Bul bizge qurylǵy parametrlerine ózgerister engizýge múmkindik beredi. Jahandyq konfıgýrasıa rejıminiń komandalary jalpy júıeniń áreketin anyqtaıdy. #Configure terminal komandasy artyqshylyqty rejımnen iske qosylady.
Praktıkalyq jumys. Cisco IOS komandalarymen tanysý
--
Cisco Packet Tracer baǵdarlamasynda qurylǵylarǵa arnalǵan pármen joly ınterfeısi " CLI " qoıyndysyndaǵy jelilik qurylǵy parametrleri parametrleri terezesinde qol jetimdi. Bul tereze jelilik qurylǵyǵa tikeleı kabeldik (konsoldyq) qosylymdy ımıtasıalaıdy. Jelini konfıgýrasıalaý (baǵdarlamalaý) úshin pármen jolymen (CLI) jumys Cisco IOS operasıalyq júıesiniń komandalary arqyly júzege ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_4.png)`Sýret. 5.4. Cisco IOS OJ komandalaryn oryndaýǵa arnalǵan jeli`
Cisco IOS komandalarymen tanysý úshin osyndaı jeliniń mysaly ([task-5-1.pkt](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/task-5-1.pkt)) qosa beriledi.
Joǵaryda biz komandalyq ınterfeıs rejımderi týraly aıttyq – paıdalanýshy, artyqshylyq jáne ǵalamdyq konfıgýrasıa. Router1 úshin osy rejımderge kirý jáne shyǵý pármenderin oryndańyz. Router1 jelilik qurylǵysyna kirip, Enter pernesin basqan kezde pármen joly sýrettegideı bolady. 5.5. Paıdalanýshy rejıminen ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_5.png)`Sýret. 5.5. Paıdalanýshy rejımindegi pármen jolynyń kórinisi`
Komandalardyń tolyq jıyntyǵyna qol jetkizý úshin aldymen enable komandasynyń artyqshylyqty rejımin belsendirý kerek. Pármen jolynda shaqyrýdyń `#` belgisi túrinde paıda bolýy artyqshylyqty rejımge kóshý týraly kýálandyrady. Artyqshylyqty rejımnen shyǵýdy `disable` komandasy júzege asyrady.
>**Eskertý**
>Enable ornyna en terýge bolady. Kez-kelgen IOS rejımindegi komandalar alǵashqy biregeı tańbamen tanylady.
>
>Jahandyq konfıgýrasıa rejımi-konfıgýrasıa máselelerin sheshetin qýatty bir joldy komandalardy júzege asyrady. Jahandyq konfıgýrasıa rejımine kirý úshin configure terminal artyqshylyqty rejım komandasy qoldanylady. Exit nemese end pármenimen shyǵý.

Artyqshylyqty rejımge kirý úshin qupıa sózdi ornatý
--
Kirý paroli tájirıbesiz paıdalanýshylar men zıankesterdiń artyqshylyqty rejımine kirýdi basqarýǵa múmkindik beredi. Esterińizge sala keteıik, tek artyqshylyqty rejımde konfıgýrasıalyq ózgerister engizýge bolady. Router1-de osy rejımge kirý qupıa sózin "parol" retinde `Router1(config)#enable password parol` pármenimen ornatyńyz, sodan keıin jelilik qurylǵynyń artyqshylyqty rejıminen shyǵyńyz, ıaǵnı paıdalanýshy rejımine ótińiz. Artyqshylyqty rejımge qaıta kirýge tyrysyńyz. Kórip otyrǵanyńyzdaı, paróldi engizbesten bul endi múmkin ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_6.png)`Sýret. 5.6. Artyqshylyqty rejımge kirý úshin qupıa sózdi ornatý`
Qupıa sózdi ózgertý úshin artyqshylyqty rejımniń jańa qupıa sózin ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_7.png)`Рис. 5.7. Был пароль 12345, стал пароль 54321`
Qupıa sózdi qalpyna keltirý úshin marshrýtızatordy qaıta júkteýge ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_8.png)`Sýret. 5.8. Qaıta júkteý pármenimen R1 qaıta júkteńiz`
Советы при работе с CLI
--
Konsoldegi barlyq komandalardy qysqartýǵa bolady, biraq qysqartý pármendi naqty kórsetýi mańyzdy. `Tab` pernesin jáne suraq belgisin paıdalanyńyz (?). `Tab` pernesin basý arqyly qysqartylǵan pármen tolyq jáne suraq belgisi (?), komandadan keıin, kelesi múmkindikterdiń tizimin jáne olar týraly shaǵyn anyqtamany kórsetedi. Býferde saqtalǵan kelesi pármenge ótýge bolady. Ol úshin tómen kórsetkini basyńyz nemese `Ctrl + N`. buryn engizilgen komandalarǵa oralýǵa bolady. Joǵary kórsetkini nemese `Ctrl + P` pernelerin ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_9.png)`Sýret. 5.9. Pernetaqtadaǵy joǵary nemese tómen kórsetkiler siz buryn qoldanǵan komandalardy paraqtaýǵa múmkindik beredi`

Belsendi konfıgýrasıa avtomatty túrde saqtalmaıdy jáne elektr qýaty isten shyqqan jaǵdaıda joǵalady. Marshrýtızatordyń parametrlerin saqtaý úshin jazý jady pármenin ![](https://intuit.ru/EDI/17_07_20_1/1594937994-30092/tutorial/778/objects/5/files/5_10.png)`Sýret. 5.10. Aǵymdaǵy R1 konfıgýrasıasyn saqtaý`