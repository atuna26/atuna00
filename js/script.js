// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
var books={
    titles: ["Book Name","Author Name","Number of Pages","Price","Options",""],
    books: [
        {
            bookName:"Chess Story",//0
            bookAuthor: "Stefan Zweig", bookPage:"104", bookPrice:"$12.39", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Chess-Story-Review-Books-Classics/dp/1590171691?crid=2ZF54NJXKSB9W&keywords=chess+story&qid=1651072726&s=books&sprefix=Chess+Story%2Cstripbooks%2C488&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=516e85ef3c1a056719a0a86a1b85033f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Letter from an Unknown Woman",//1
            bookAuthor: "Stefan Zweig", bookPage:"45", bookPrice:"$9.38", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Letter-Woman-Other-Stories-Stefan/dp/1906548935?crid=3DU6KR3BR2QS2&keywords=Letter+from+an+Unknown+Woman&qid=1651073400&s=books&sprefix=letter+from+an+unknown+woman%2Cstripbooks-intl-ship%2C1090&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e543905431f19e4528f629ac1b14ca36&language=en_US&ref_=as_li_ss_tl",
        }, 
        {
            bookName:"What Men Live by and Other Tales",//2
            bookAuthor: "Leo Tolstoy", bookPage:"56", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/What-Men-Live-Other-Tales/dp/1479471127?crid=3BO3E3J33IQOI&keywords=What+Men+Live+by+and+Other+Tales&qid=1651073811&s=books&sprefix=what+men+live+by+and+other+tales%2Cstripbooks-intl-ship%2C363&sr=1-3&linkCode=ll1&tag=78443782665-20&linkId=962c3f5b25215425eccfc8ca9a9789e8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Fantastic Night & Other Stories",//3
            bookAuthor: "Stefan Zweig", bookPage:"168", bookPrice:"$12.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fantastic-Night-Other-Stories-Stefan/dp/1901285545?&linkCode=ll1&tag=78443782665-20&linkId=4dc7ccb5a9ce3d1cda3aa219736a911a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Blindness",//4
            bookAuthor: "José Saramago", bookPage:"349", bookPrice:"$10.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Blindness-Harvest-Book-Jose-Saramago/dp/0156007754?keywords=blindness+by+jose+saramago&qid=1651073609&s=books&sprefix=blindless%2Cstripbooks%2C329&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=9a4d7c968183d036d9e8be0274a8d387&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Metamorphosis",//5
            bookAuthor: "Franz Kafka", bookPage:"201", bookPrice:"$4.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Metamorphosis-Franz-Kafka/dp/1557427666?crid=S7GADS30Q9YI&keywords=The+Metamorphosis&qid=1651073642&s=books&sprefix=the+metamorphosis%2Cstripbooks-intl-ship%2C190&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6104830b3c2fee5fdbf72ce0ad2e6671&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Animal Farm",//6
            bookAuthor: "George Orwell", bookPage:"141", bookPrice:"$7.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Animal-Farm-George-Orwell/dp/0451526341?keywords=Animal+Farm&qid=1651073874&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=5c947c5fc975960d2d925a6a15e882b7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"1984",//7
            bookAuthor: "George Orwell", bookPage:"298", bookPrice:"$7.48", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934?crid=2A5O7S304CYRL&keywords=1984&qid=1651073913&s=books&sprefix=1984%2Cstripbooks-intl-ship%2C222&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=06e040c4b73c6436f6fa2f37e0598c97&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Twenty-Four Hours in the Life of a Woman",//8
            bookAuthor: "Stefan Zweig", bookPage:"100", bookPrice:"$8.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Twenty-Four-Hours-Woman-Stefan-Zweig/dp/1782272151?crid=3CHNZ0ASK2VA5&keywords=Twenty-Four+Hours+in+the+Life+of+a+Woman&qid=1651073997&s=books&sprefix=twenty-four+hours+in+the+life+of+a+woman%2Cstripbooks-intl-ship%2C284&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=c1d76f15c4b5f8dd180e399c92f5ecc6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Last Day of a Condemned Man",//9
            bookAuthor: "Victor Hugo", bookPage:"109", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Last-Day-Condemned-Man/dp/0486469980?crid=284H607HNZQ8G&keywords=the+last+day+of+a+condemned+man&qid=1651074051&s=books&sprefix=The+Last+Day+of+a+Condemned+Man%2Cstripbooks%2C247&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=82fa908969049ae84c04cea9381813d7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Amok and Other Stories",//10
            bookAuthor: "Stefan Zweig", bookPage:"144", bookPrice:"$9.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Amok-Other-Stories-Pushkin-Collection-ebook/dp/B006WV3CEW/ref=sr_1_1?crid=VJAWNX0VIU82&keywords=Amok+and+Other+Stories&qid=1651078694&sprefix=amok+and+other+stories%2Caps%2C920&sr=8-1",
        },
        {
            bookName:"The Sorrows of Young Werther",//11
            bookAuthor: "Johann Wolfgang von Goethe", bookPage:"149", bookPrice:"$10.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sorrows-Werther-Johann-Wolfgang-Goethe/dp/1091487278?crid=3EGVHS75GO8MV&keywords=The+Sorrows+of+Young+Werther&qid=1651078756&sprefix=the+sorrows+of+young+werther%2Caps%2C851&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=b9682f08b35992e11f463bcf0939b9af&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Martin Eden",//12
            bookAuthor: "Jack London", bookPage:"480", bookPrice:"$11.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Martin-Eden-Jack-London-ebook/dp/B09FFMSSQT?crid=38LD6WEJK0PAO&keywords=martin+eden&qid=1651078783&s=books&sprefix=martin+eden%2Cstripbooks%2C219&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=2f79b0f4e4d15f3a5ed6fcf85b7afe88&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Notes from Underground",//13
            bookAuthor: "Fyodor Dostoevsky", bookPage:"136", bookPrice:"$6.75", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Notes-Underground-Fyodor-Dostoevsky/dp/1676763279?crid=2IQRXOPVC521X&keywords=Notes+from+Underground&qid=1651078940&s=books&sprefix=notes+from+underground%2Cstripbooks-intl-ship%2C190&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=a1044d2e09c5b9b6dbb31e2fcc110443&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Burning Secret",//14
            bookAuthor: "Stefan Zweig", bookPage:"133", bookPrice:"$6.62", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Burning-Secret-Pushkin-Collection-Stefan/dp/1782274529?crid=1OEXWKAI6V3EL&keywords=The+Burning+Secret&qid=1651078893&s=books&sprefix=the+burning+secret%2Cstripbooks-intl-ship%2C316&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=07ac39c32228c0ca1ceeef8621d6b3f7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Veronika Decides to Die",//15
            bookAuthor: "Paulo Coelho", bookPage:"210", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Veronika-Decides-Die-Novel-Redemption/dp/0061124265?crid=2VKPQUWXDGXV8&keywords=Veronika+Decides+to+Die&qid=1651078980&s=books&sprefix=veronika+decides+to+die%2Cstripbooks-intl-ship%2C183&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=bef1cee00d6ff71bdf8f77b3d1380857&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Ward No. 6",//16
            bookAuthor: "Paulo Coelho", bookPage:"77", bookPrice:"$12.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Other-Stories-1892-1895-Penguin-Classics/dp/0140447865?crid=2OQRPW0ZYY26A&keywords=Ward+No.+6&qid=1651079009&s=books&sprefix=ward+no.+6%2Cstripbooks-intl-ship%2C178&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=04ef26a45c12df087bbc16a07b9bd77b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Gambler",//17
            bookAuthor: "Fyodor Dostoevsky", bookPage:"188", bookPrice:"$6.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/The-Gambler-audiobook/dp/B004INL28E?crid=3L678OIEX4TB6&keywords=The+Gambler&qid=1651079034&s=books&sprefix=the+gambler%2Cstripbooks-intl-ship%2C194&sr=1-4&linkCode=ll1&tag=78443782665-20&linkId=a7bb9435c097816cac55dc0f0bce4f24&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Clockwork Orange",//18
            bookAuthor: "Anthony Burgess", bookPage:"192", bookPrice:"$11.58", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Clockwork-Orange-Anthony-Burgess/dp/0393341763?crid=3V2Q8QUG1S19&keywords=A+Clockwork+Orange&qid=1651079071&s=audible&sprefix=a+clockwork+orange%2Caudible%2C191&sr=1-2-catcorr&linkCode=ll1&tag=78443782665-20&linkId=8f07c4f8b39037b2bda463c4407e67ae&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Disquiet",//19
            bookAuthor: "Zülfü Livaneli", bookPage:"176", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Disquiet-Novel-Z%C3%9CLF%C3%9C-LIVANELI-ebook/dp/B08B5D7KL2?crid=2FSI9XVQ1LMAX&keywords=Disquiet&qid=1651079099&sprefix=disquiet%2Caps%2C199&sr=8-2&linkCode=ll1&tag=78443782665-20&linkId=09cfc97ac7ffa574199476187a53ba75&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Finland: The Country of White Lilies",//20
            bookAuthor: "Grigory Petrov", bookPage:"111", bookPrice:"$6.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Finland-Country-Lilies-Grigory-Petrov-ebook/dp/B08D733HSN?crid=284CLU4NSG9MS&keywords=Finland%3A+The+Country+of+White+Lilies&qid=1651079137&s=books&sprefix=finland+the+country+of+white+lilies%2Cstripbooks-intl-ship%2C180&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=7e6a4c6cd1a8988a3746d30faf4ffca5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Fear",//21
            bookAuthor: "Stefan Zweig", bookPage:"112", bookPrice:"$16.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/s?k=Fear+stefan+zweig&i=stripbooks-intl-ship&crid=1VH9OFPR4QQTK&sprefix=fear+stefan+zwei%2Cstripbooks-intl-ship%2C527&linkCode=ll2&tag=78443782665-20&linkId=39862549c8f7e9d93ddfdd59bde987bc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Twilight and Moonbeam Alley",//22
            bookAuthor: "Stefan Zweig", bookPage:"104", bookPrice:"$11.16", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Twilight-Moonbeam-Alley-Pushkin-Collection/dp/190128557X?crid=AK2JLPS1FZRK&keywords=Twilight+and+Moonbeam+Alley&qid=1651079216&s=books&sprefix=twilight+and+moonbeam+alley%2Cstripbooks-intl-ship%2C239&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=0564373c61995f7a8379ae61f510e05f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Tale of Two Cities",//23
            bookAuthor: "Charles Dickens", bookPage:"489", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Tale-Two-Cities-Anniversary-Classics/dp/0451530578?crid=1NT2SQHYP5C7V&keywords=A+Tale+of+Two+Cities&qid=1651079267&s=books&sprefix=a+tale+of+two+cities%2Cstripbooks-intl-ship%2C285&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=5e61bdbb4781aa1330cc5bee14b3492b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Poor Folk",//24
            bookAuthor: "Fyodor Dostoevsky", bookPage:"167", bookPrice:"$13.05", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Poor-Other-Stories-Penguin-Classics/dp/0140445056?crid=18EJBA0WUP4CE&keywords=Poor+Folk&qid=1651079298&s=books&sprefix=a+tale+of+two+cities%2Cstripbooks-intl-ship%2C337&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=39ec530969cd3091f5d34101929efe30&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"White Nights",//25
            bookAuthor: "Fyodor Dostoevsky", bookPage:"82", bookPrice:"$6.75", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/White-Nights-Fyodor-Dostoevsky/dp/1676885633?crid=EBG85OSQW5QO&keywords=White+Nights&qid=1651079324&s=books&sprefix=white+nights%2Cstripbooks-intl-ship%2C174&sr=1-4&linkCode=ll1&tag=78443782665-20&linkId=72971adc8899fe0581023f662b268cd1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Picture of Dorian Gray",//26
            bookAuthor: "Oscar Wilde", bookPage:"272", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Picture-Dorian-Gray-Oscar-Wilde/dp/0141439572?crid=12V5EJGEHT8B6&keywords=The+Picture+of+Dorian+Gray&qid=1651079355&s=books&sprefix=the+picture+of+dorian+gray%2Cstripbooks-intl-ship%2C216&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=8aac7f5fec0c0d031a9b5db8da3eb3cc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Boy in the Striped Pajamas",//27
            bookAuthor: "John Boyne", bookPage:"240", bookPrice:"$8.64", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Boy-Striped-Pajamas-John-Boyne/dp/0385751532?_encoding=UTF8&qid=1651079379&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=9a87428ffc88fabd8608aaf0ba4b6ef2&language=en_US&ref_=as_li_ss_tl"
        },
        {
            bookName:"Romeo and Juliet",//28
            bookAuthor: "William Shakespeare", bookPage:"281", bookPrice:"$6.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Romeo-Juliet-William-Shakespeare/dp/145155205X?crid=3GSPYKRY0MAW5&keywords=Romeo+and+Juliet&qid=1651079409&s=books&sprefix=romeo+and+juliet%2Cstripbooks-intl-ship%2C286&sr=1-3&linkCode=ll1&tag=78443782665-20&linkId=4a4813f9d04783049c46eb52de8616c9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Wuthering Heights",//29
            bookAuthor: "Emily Brontë", bookPage:"353", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wuthering-Heights-Penguin-Classics-Bront%C3%AB/dp/0141439556?crid=U4TZLJIEAYIC&keywords=Wuthering+Heights&qid=1651079440&s=books&sprefix=wuthering+heights%2Cstripbooks-intl-ship%2C184&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=a7a89c697daf34732116468ec6c51c68&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Diary of a Madman and Other Stories",//30
            bookAuthor: "Nikolai Gogol", bookPage:"84", bookPrice:"$3.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Diary-Madman-Stories-Signet-Classics/dp/0451418565?_encoding=UTF8&qid=1651079478&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=695a37c4e6e2d3174a484102916ac690&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Death of Ivan Ilyich",//31
            bookAuthor: "Leo Tolstoy", bookPage:"113", bookPrice:"$4.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Death-Ivan-Ilych-Leo-Tolstoy/dp/0615826539?_encoding=UTF8&qid=1651079527&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e461465f67cb31ef712f753a1f6f3c83&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Room of One's Own",//32
            bookAuthor: "Virginia Woolf", bookPage:"112", bookPrice:"$8.15", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Room-Ones-Own-Virginia-Woolf/dp/0156787334?crid=1H13ZNE2NTXBJ&keywords=A+Room+of+One%27s+Own&qid=1651079626&s=books&sprefix=a+room+of+one%27s+own%2Cstripbooks-intl-ship%2C184&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=1a95b078563483920e10e814aed48874&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Idiot",//33
            bookAuthor: "Fyodor Dostoevsky", bookPage:"567", bookPrice:"$13.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Idiot-Vintage-Classics-Fyodor-Dostoevsky/dp/0375702245?_encoding=UTF8&qid=1651079646&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=404fe55904b2e78f35c8ca6725202893&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Hunchback of Notre-Dame",//34
            bookAuthor: "Victor Hugo", bookPage:"510", bookPrice:"$5.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/hunchback-notre-Dame-Victor-Hugo/dp/1718754779?_encoding=UTF8&qid=1651079684&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=3ac217d350dfff06d9cd76be36447fbc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Lord of the Flies",//35
            bookAuthor: "William Golding", bookPage:"182", bookPrice:"$9.69", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Lord-Flies-William-Golding/dp/0140283331?_encoding=UTF8&qid=1651079711&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=a311e4e3ff5926120a48ac47efba1554&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Grapes of Wrath",//36
            bookAuthor: "John Steinbeck", bookPage:"455", bookPrice:"$9.18", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Grapes-Wrath-John-Steinbeck/dp/0143039431?_encoding=UTF8&qid=1651079737&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=8237a677da998ee6b6383fef7c1aa330&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Serenade for Nadia",//37
            bookAuthor: "Zülfü Livaneli", bookPage:"416", bookPrice:"$14.33", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Serenade-Nadia-Novel-Z%C3%9CLF%C3%9C-LIVANELI/dp/1635420164?crid=3U7YXF38O6FVF&keywords=Serenade+for+Nadia&qid=1651079766&s=books&sprefix=%2Cstripbooks-intl-ship%2C227&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=3df8f1d68c8b00bd6f36671b7caccb22&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Circe",//38
            bookAuthor: "Madeline Miller", bookPage:"393", bookPrice:"$11.10", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Circe-Madeline-Miller/dp/0316556327?crid=1I5KD0APPO9R9&keywords=Circe&qid=1651079789&s=books&sprefix=circe%2Cstripbooks-intl-ship%2C185&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=cec69a2f33f58663a9d36df5787fd264&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Lily Of The Valley",//39
            bookAuthor: "Honoré de Balzac", bookPage:"224", bookPrice:"$5.90", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Lily-Valley-Com%C3%A9die-Humaine-Vall%C3%A9e/dp/1981709053?_encoding=UTF8&qid=1651079819&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=af22d0c4df51a544c8c12898e01ef98f&language=en_US&ref_=as_li_ss_tl ",
        },
        {
            bookName:"Nausea",//40
            bookAuthor: "Jean-Paul Sartre", bookPage:"178", bookPrice:"$7.58", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Nausea-Directions-Paperbook-Jean-Paul-Sartre/dp/0811220303?crid=2Y2UF27KUFWH4&keywords=Nausea&qid=1651081120&s=books&sprefix=nausea%2Cstripbooks-intl-ship%2C329&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=cea781547feffa53b12802dceee88b7a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Hamlet",//41
            bookAuthor: "William Shakespeare", bookPage:"289", bookPrice:"$3.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Hamlet-Shakespeare/dp/109155014X?_encoding=UTF8&qid=1651081143&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=765fab7e824a86f349fc81bd980b964f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Madame Bovary",//42
            bookAuthor: "Gustave Flaubert", bookPage:"329", bookPrice:"$6.48", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Madame-Penguin-Classics-Gustave-Flaubert/dp/0140449124?crid=1W1YJEUTRW4JD&keywords=Madame+Bovary&qid=1651081172&s=books&sprefix=madame+bovary%2Cstripbooks-intl-ship%2C196&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=99cc6ce3cebf1619e88b40977aa4583a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Paul Street Boys",//43
            bookAuthor: "Ferenc Molnár", bookPage:"208", bookPrice:"$35.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Paul-Street-Boys-Ferenc-Molnar/dp/9631345343?crid=E9E4BCV3RSCF&keywords=The+Paul+Street+Boys&qid=1651081214&s=books&sprefix=the+paul+street+boys%2Cstripbooks-intl-ship%2C182&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=10d223599b74b10a436fae9d0bb3a476&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Out of My Mind",//44
            bookAuthor: "Sharon M. Draper", bookPage:"295", bookPrice:"$7.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Out-My-Mind-Sharon-Draper/dp/1416971718?crid=XMM3VS89OTKC&keywords=Out+of+My+Mind&qid=1651081247&s=books&sprefix=out+of+my+mind%2Cstripbooks-intl-ship%2C481&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6011847822a859e7f3b218ca345abad3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Seeing",//45
            bookAuthor: "José Saramago", bookPage:"307", bookPrice:"$12.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Seeing-Jose-Saramago/dp/0156032732?crid=2NOL8TTXXR5KM&keywords=Seeing&qid=1651081269&s=books&sprefix=seeing%2Cstripbooks-intl-ship%2C187&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6ab865deba98f0770c358045cd026102&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter and the Deathly Hallows",//46
            bookAuthor: "J.K. Rowling", bookPage:"607", bookPrice:"$9.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/0545139708?crid=2JEOIION47V46&keywords=Harry+Potter+and+the+Deathly+Hallows&qid=1651081329&s=books&sprefix=harry+potter+and+the+deathly+hallows%2Cstripbooks-intl-ship%2C184&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=a58721aa9c66fb03ddd2a5963f79cd28&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Jane Eyre",//47
            bookAuthor: "Charlotte Brontë", bookPage:"532", bookPrice:"$2.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Jane-Bantam-Classics-Charlotte-Bronte/dp/0553211404?crid=2DE3ESBFVXPWE&keywords=Jane+Eyre&qid=1651081359&s=books&sprefix=jane+eyre%2Cstripbooks-intl-ship%2C182&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e6cf30a7674b26df1732510aef181196&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Dead Souls",//48
            bookAuthor: "Nikolai Gogol", bookPage:"464", bookPrice:"$15.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Dead-Souls-Nikolai-Gogol/dp/0679776443?crid=1JU5GGC8NEX2D&keywords=Dead+Souls&qid=1651081390&s=books&sprefix=dead+souls%2Cstripbooks-intl-ship%2C323&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6e6f2c2cb4a75f9ed76c07b374257070&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"War and Peace",//49
            bookAuthor: "Leo Tolstoy", bookPage:"1296", bookPrice:"$15.69", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985?crid=192W3ZO91UJX4&keywords=War+and+Peace&qid=1651081411&s=books&sprefix=war+and+peace%2Cstripbooks-intl-ship%2C179&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=045d22ece93e7a08c975059fbab54bb5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Captain's Daughter",//50
            bookAuthor: "Alexander Pushkin", bookPage:"192", bookPrice:"$14.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Captains-Daughter-Review-Books-Classics/dp/159017724X?crid=TGS5XAFHCBUC&keywords=The+Captain%27s+Daughter&qid=1651081458&s=books&sprefix=the+captain%27s+daughter%2Cstripbooks-intl-ship%2C181&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=0a5cd5f674e7c127863d5c06d3ba24cb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Miser",//51
            bookAuthor: "Molière", bookPage:"83", bookPrice:"$5.43", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Miser-Moli%C3%A8re/dp/1496190165?crid=2NQKYCY1GBFSJ&keywords=The+Miser&qid=1651081485&s=books&sprefix=the+mixer%2Cstripbooks-intl-ship%2C174&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=4fae451c86d98798f02d13ef48fb8bcd&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Humiliated and Insulted",//52
            bookAuthor: "Fyodor Dostoevsky", bookPage:"400", bookPrice:"$12.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Humiliated-Insulted-Fyodor-Dostoevsky/dp/1847497802?crid=AQ83IPG2CMGG&keywords=Humiliated+and+Insulted&qid=1651081512&s=books&sprefix=humiliated+and+insulted%2Cstripbooks-intl-ship%2C176&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=efd514a2041f827c1d8702e15da720fe&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"To Live",//53
            bookAuthor: "Yu Hua", bookPage:"250", bookPrice:"$11.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Live-Novel-Yu-Hua/dp/1400031869?crid=1OVIFR9WK04ZV&keywords=To+Live&qid=1651081539&s=books&sprefix=to+live%2Cstripbooks-intl-ship%2C258&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=4b9f2ad00244e9474aafba7d729ef9a1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Confession",//54
            bookAuthor: "Leo Tolstoy", bookPage:"108", bookPrice:"$3.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Confession-Lev-Tolstoy/dp/B08CWFZ4GZ?keywords=a+confession+tolstoy&qid=1651081574&s=books&sprefix=A+Confession+%2Cstripbooks-intl-ship%2C205&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=81b6a78ed1c69476a880f44c6cfbd369&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Othello",//55
            bookAuthor: "William Shakespeare", bookPage:"314", bookPrice:"$5.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Othello-William-Shakespeare/dp/0743477553?crid=2YJY6N00K74UM&keywords=Othello&qid=1651081596&s=books&sprefix=othello%2Cstripbooks-intl-ship%2C176&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=c9ed63460e79644fde033c0d93c8218f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Plague",//56
            bookAuthor: "Albert Camus", bookPage:"308", bookPrice:"$9.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Plague-Albert-Camus/dp/0679720219?crid=1WFLW0A6SB0H8&keywords=The+Plague&qid=1651081635&s=books&sprefix=the+plague%2Cstripbooks-intl-ship%2C203&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=4b0cd39c504c3705ab098622110028f0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Resurrection",//57
            bookAuthor: "Leo Tolstoy", bookPage:"608", bookPrice:"$16.17", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Resurrection-Penguin-Classics-Leo-Tolstoy/dp/0140424636?keywords=resurrection+by+tolstoy&qid=1651081683&sprefix=Resurrection+by+tolst%2Caps%2C206&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=86f8e7c321d79ffae27464560d6cce71&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The House of the Dead",//58
            bookAuthor: "Fyodor Dostoevsky", bookPage:"247", bookPrice:"$4.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/House-Dead-Fyodor-Dostoyevsky/dp/1420966316?crid=3D53M4W4U06FG&keywords=The+House+of+the+Dead&qid=1651081712&sprefix=the+house+of+the+dead%2Caps%2C191&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=8a65f1aeabe25595a1ccd48e592918c0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Double",//59
            bookAuthor: "Fyodor Dostoevsky", bookPage:"144", bookPrice:"$6.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Double-Dover-Thrift-Editions/dp/0486295729?crid=31SU16T57TEIV&keywords=the+double+by+fyodor+dostoyevsky&qid=1651081750&sprefix=The+Double+b%2Caps%2C229&sr=8-3&linkCode=ll1&tag=78443782665-20&linkId=ea07a776fcee65af1cb9e9f8aa694a5e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Scarlet Plague",//60
            bookAuthor: "Jack London", bookPage:"82", bookPrice:"$3.58", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Scarlet-Plague-Illustrated-Jack-London/dp/B09B3CTV6G?crid=2UMQQ02MQKOH2&keywords=the+scarlet+plague&qid=1651081774&s=books&sprefix=The+Scarlet+Plague%2Cstripbooks%2C185&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=6e3d7b4342ca47509ea11333df628297&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Brothers Karamazov",//61
            bookAuthor: "Fyodor Dostoevsky", bookPage:"880", bookPrice:"$12.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Brothers-Karamazov-Bicentennial-Novel-Epilogue/dp/1250788455?crid=2X5LJVN746K27&keywords=The+Brothers+Karamazov&qid=1651081799&s=books&sprefix=the+brothers+karamazov%2Cstripbooks-intl-ship%2C279&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=3a8639760913fe961683841a1e1decdc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Chronicle of a Death Foretold",//62
            bookAuthor: "Gabriel García Márquez", bookPage:"120", bookPrice:"$13.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Chronicle-Foretold-Gabriel-Garc%C3%ADa-M%C3%A1rquez/dp/140003471X?crid=1PTC50KHWEJG6&keywords=Chronicle+of+a+Death+Foretold&qid=1651081834&s=books&sprefix=chronicle+of+a+death+foretold%2Cstripbooks-intl-ship%2C198&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=c03b21c7bea2229b026638c7e8ecd88c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Fahrenheit 451",//63
            bookAuthor: "Ray Bradbury", bookPage:"194", bookPrice:"$8.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fahrenheit-451-Ray-Bradbury/dp/1451673310?crid=3U28UQGKOB9JK&keywords=Fahrenheit+451&qid=1651081856&s=books&sprefix=fahrenheit+451%2Cstripbooks-intl-ship%2C192&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=4208b2833c3f7a764be50ba230e99a52&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Anna Karenina",//64
            bookAuthor: "Leo Tolstoy", bookPage:"864", bookPrice:"$6.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002?crid=3LNYF12NRWPEH&keywords=Anna+Karenina&qid=1651081871&s=books&sprefix=fahrenheit+451%2Cstripbooks-intl-ship%2C185&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6ac5a74a3fa6b2a9861f8a9eaea52e67&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Short History of Decay",//65
            bookAuthor: "Emil M. Cioran", bookPage:"200", bookPrice:"$9.81", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Short-History-Decay-M-Cioran/dp/161145736X?crid=355TETNW1AY27&keywords=A+Short+History+of+Decay&qid=1651081893&s=books&sprefix=a+short+history+of+decay%2Cstripbooks-intl-ship%2C200&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e6586400ebbe7070d403a6de7ae8071c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Book of Disquiet",//66
            bookAuthor: "Fernando Pessoa", bookPage:"544", bookPrice:"$14.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Book-Disquiet-Penguin-Classics/dp/0141183047?crid=33936ZYED3YTC&keywords=The+Book+of+Disquiet&qid=1651081923&s=books&sprefix=the+book+of+disquiet%2Cstripbooks-intl-ship%2C192&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=86bed155092a685c789ec47c75622867&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Fall",//67
            bookAuthor: "Albert Camus", bookPage:"147", bookPrice:"$10.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fall-Albert-Camus/dp/0679720227?crid=3CR32UD4TS1JI&keywords=The+Fall+by+albert&qid=1651081955&s=books&sprefix=the+fall+by+alber%2Cstripbooks-intl-ship%2C207&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=cfa960473c7a5e24550d77c3f1b62fb1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Ruba'iyat of Omar Khayyam",//68
            bookAuthor: "Omar Khayyám", bookPage:"116", bookPrice:"$13.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Edward-Fitzgeralds-Rub%C3%A2iy%C3%A2t-Omar-Khayy%C3%A2m/dp/1332123228?_encoding=UTF8&qid=1651081972&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=ca222e6a039e4e59f851b30e1b424b20&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Germinal",//69
            bookAuthor: "Émile Zola", bookPage:"499", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Germinal-Penguin-Classics-%C3%89mile-Zola/dp/0140447423?crid=13FU6Q88YVPBR&keywords=Germinal&qid=1651082000&s=books&sprefix=germinal%2Cstripbooks-intl-ship%2C225&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=8d5d98776f0aaf7abc45adb2d2b55a2d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Tartar Steppe",//70
            bookAuthor: "Dino Buzzati", bookPage:"265", bookPrice:"$17.28", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Tartar-Steppe-introduction-translator-Buzzati/dp/1786891646?crid=39N1ZL1KO9E7O&keywords=The+Tartar+Steppe&qid=1651082019&s=books&sprefix=germinal%2Cstripbooks-intl-ship%2C281&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=476320187c71d166b5d649b99df0ef68&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Camille: The Lady of the Camellias",//71
            bookAuthor: "Alexandre Dumas (Fils)", bookPage:"256", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Lady-Camellias-Penguin-Classics/dp/014310702X?crid=1WZXVTUAQ879I&keywords=Camille%3A+The+Lady+of+the+Camellias&qid=1651082042&s=books&sprefix=the+tartar+steppe%2Cstripbooks-intl-ship%2C273&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=af159932dccb799ea738b07bab842e03&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Wonder",//72
            bookAuthor: "R.J. Palacio", bookPage:"315", bookPrice:"$9.67", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wonder-R-J-Palacio/dp/0375869026?crid=2GWSECYYXVX0C&keywords=Wonder&qid=1651082060&s=books&sprefix=camille+the+lady+of+the+camellias%2Cstripbooks-intl-ship%2C264&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=33e8c2a2f69b80371c1b69ff67094d6f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Anne of Green Gables",//73
            bookAuthor: "L.M. Montgomery", bookPage:"320", bookPrice:"$4.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Anne-Green-Gables-L-Montgomery/dp/055321313X?crid=2ET3DUBKCMCWW&keywords=Anne+of+Green+Gables+1&qid=1651082098&s=books&sprefix=anne+of+green+gables+%2Cstripbooks-intl-ship%2C267&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=49b9a5f0ba3827cb5ad071cd5d6429db&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Midnight Library",//74
            bookAuthor: "Matt Haig", bookPage:"304", bookPrice:"$13.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Midnight-Library-Novel-Matt-Haig/dp/0525559477?crid=3COKF5TK6UY79&keywords=The+Midnight+Library&qid=1651082120&s=books&sprefix=anne+of+green+gables+1%2Cstripbooks-intl-ship%2C324&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=b83a4735d243d8a68ee844fdf263cd0e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Death with Interruptions",//75
            bookAuthor: "José Saramago", bookPage:"238", bookPrice:"$10.39", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Death-Interruptions-Jos%C3%A9-Saramago/dp/0547247885?crid=HEE7E2RBWIK5&keywords=Death+with+Interruptions&qid=1651082142&s=books&sprefix=the+midnight+library%2Cstripbooks-intl-ship%2C284&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=7e9d5d1f8c7127f125c976f2495a69a3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Dune",//76
            bookAuthor: "Frank Herbert", bookPage:"658", bookPrice:"$8.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Dune-Chronicles-Book-1/dp/0441013597?pd_rd_w=k2K2c&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=1G6ZJ2WSJA9D3GQ3105K&pd_rd_r=5c63a2be-d441-4478-869a-18ebb9182eb1&pd_rd_wg=OjcQu&pd_rd_i=0441013597&psc=1&linkCode=ll1&tag=78443782665-20&linkId=80cba2dd2eefa2ae9180f7900cba3712&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Cain",//77
            bookAuthor: "José Saramago", bookPage:"159", bookPrice:"$15.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Cain-Jos%C3%A9-Saramago/dp/0547840179?keywords=cain+by+jose+saramago&qid=1651082203&sprefix=Cain+by+%2Caps%2C222&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=bca71d6f400257b0827cc842706c5927&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter and the Half-Blood Prince",//78
            bookAuthor: "J.K. Rowling", bookPage:"652", bookPrice:"$9.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960?crid=2CDMDIYPQ0WBJ&keywords=Harry+Potter+and+the+Half-Blood+Prince%22&qid=1651082223&sprefix=cain+by+jose+saramago%2Caps%2C189&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=2cf26dc044a6c91ca46f07ad7bfc8285&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter and the Order of the Phoenix",//79
            bookAuthor: "J.K. Rowling", bookPage:"870", bookPrice:"$6.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Harry-Potter-Order-Phoenix-Rowling/dp/0439358078?crid=SEOG1CPOC36U&keywords=harry+potter+and+the+order+of+the+phoenix&qid=1651082307&s=books&sprefix=Harry+Potter+and+the+Order+of+the+Phoenix,stripbooks-intl-ship,193&sr=1-2&linkCode=sl1&tag=78443782665-20&linkId=366f5480d2caf46f858b548fa14f3cb9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter and the Goblet of Fire",//80
            bookAuthor: "J.K. Rowling", bookPage:"734", bookPrice:"$6.92", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Harry-Potter-Goblet-Fire-Book/dp/0439139597?crid=2IFTHZQFJWY65&keywords=Harry+Potter+and+the+Goblet+of+Fire&qid=1651082381&s=books&sprefix=harry+potter+and+the+order+of+the+phoenix%2Cstripbooks-intl-ship%2C546&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6521a47ea660a664f7bd59eb44dab9a3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter And The Prisoner Of Azkaban",//81
            bookAuthor: "J.K. Rowling", bookPage:"435", bookPrice:"$6.57", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369?crid=12P61ATULXZ0V&keywords=Harry+Potter+And+The+Prisoner+Of+Azkaban&qid=1651082420&s=books&sprefix=harry+potter+and+the+goblet+of+fire%2Cstripbooks-intl-ship%2C316&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=3453f7932a47c69148060aef2854f839&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter And The Chamber Of Secret",//82
            bookAuthor: "J.K. Rowling", bookPage:"341", bookPrice:"$6.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Potter-Chamber-Secrets-MinaLima-Illustrated/dp/1338716530?crid=21BMV81OLZ9WI&keywords=Harry+Potter+And+The+Chamber+Of+Secret&qid=1651082447&s=books&sprefix=harry+potter+and+the+prisoner+of+azkaban%2Cstripbooks-intl-ship%2C303&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=0aeb3866a51f0aa78c1ff3e962e69153&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter And The Philosopher's Stone",//83
            bookAuthor: "J.K. Rowling", bookPage:"309", bookPrice:"$6.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X?crid=15ZLPLFZQ4GEU&keywords=Harry+Potter+And+The+Philosopher%27s+Stone&qid=1651082526&sprefix=harry+potter+and+the+philosopher%27s+stone%2Caps%2C300&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=647e45c838c261f7f9035b8cceec6cae&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Great Gatsby",//84
            bookAuthor: "F. Scott Fitzgerald", bookPage:"159", bookPrice:"$5.59", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Great-Gatsby-Original-Fitzgerald-Classic/dp/B093MYWTT5?crid=11TC5XF2G9N01&keywords=The+Great+Gatsby&qid=1651082548&sprefix=the+great+gatsby%2Caps%2C217&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=4aa483a73258992ecd6eb77d906d441f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Old Goriot",//85
            bookAuthor: "Honoré de Balzac", bookPage:"304", bookPrice:"$20.62", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Old-Man-Goriot-Human-Comedy/dp/0140449728?keywords=old+goriot&qid=1651082584&s=books&sprefix=Old+Goriot%2Cstripbooks%2C211&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=ae1c322dd45d93f389b571a5965b32d9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Merchant of Venice",//86
            bookAuthor: "William Shakespeare", bookPage:"160", bookPrice:"$10.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Merchant-Venice-Wordsworth-Classics/dp/1840224312?_encoding=UTF8&qid=1651082603&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=7ef15fe051352ca97084c425a1492200&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Curious Case of Benjamin Button",//87
            bookAuthor: "F. Scott Fitzgerald", bookPage:"64", bookPrice:"$3.58", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Curious-Case-Benjamin-Button-Illustrated/dp/B09FS72LVL?_encoding=UTF8&qid=1651082624&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=51479195dd7bde35298774276f5fd276&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Cherry Orchard",//88
            bookAuthor: "Anton Chekhov", bookPage:"64", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Cherry-Orchard-Anton-Chekhov/dp/B093SY4CVV?crid=3597V3869F1NR&keywords=The+Cherry+Orchard&qid=1651082649&s=books&sprefix=the+cherry+orchard%2Cstripbooks-intl-ship%2C181&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=1d27bdacdcb8897f8038312a539a5ead&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Hadji Murat",//89
            bookAuthor: "Leo Tolstoy", bookPage:"144", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Hadji-Murat-Vintage-Classics-Tolstoy/dp/0307951340?crid=MGR36YH5PAEC&keywords=Hadji+Murat&qid=1651082671&s=books&sprefix=hadji+murat%2Cstripbooks-intl-ship%2C217&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=66b48ade387e1449969e5a3b5391756b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The House of Paper",//90
            bookAuthor: "Carlos María Domínguez", bookPage:"112", bookPrice:"$14.59", isWrite:false, bookPoint:0, bookLink:"https://www.amazon.com/House-Paper-Carlos-Maria-Dominguez/dp/0151011478?crid=8QW6RH1PMCPC&keywords=The+House+of+Paper&qid=1651082689&s=books&sprefix=the+house+of+paper%2Cstripbooks-intl-ship%2C189&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=50d57c3628a6db2d572ccaf6499d54dc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Happy Prince",//91
            bookAuthor: "Oscar Wilde", bookPage:"32", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Happy-Prince-Other-Tales/dp/B0884H5MFT?crid=2OPHJOAID33RZ&keywords=The+Happy+Prince&qid=1651082711&s=books&sprefix=the+happy+prince%2Cstripbooks-intl-ship%2C211&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=2ae2570e09316a246cade1da91b73bc1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Seagull",//92
            bookAuthor: "Anton Chekhov", bookPage:"65", bookPrice:"$11.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Plays-Seagull-Sisters-CherryOrchard-Classics/dp/0140447334?crid=1FP2MMMCY68Q4&keywords=The+Seagull+by+anton&qid=1651082751&s=books&sprefix=the+seagull+by+anton%2Cstripbooks-intl-ship%2C195&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=135fc9e02c6e42e71fd81b4110473b8b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Midsummer Night's Dream",//93
            bookAuthor: "William Shakespeare", bookPage:"256", bookPrice:"$1.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Midsummer-Nights-Folger-Shakespeare-Library/dp/0743477545?crid=2IZ4FZBMQ1NBK&keywords=A+Midsummer+Night%27s+Dream&qid=1651082774&s=books&sprefix=a+midsummer+night%27s+dream+%2Cstripbooks-intl-ship%2C200&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=b2d199c46cefae7e41ddb8298e60201a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Macbeth",//94
            bookAuthor: "William Shakespeare", bookPage:"249", bookPrice:"$6.44", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Macbeth-No-Fear-Shakespeare-William/dp/1586638467?crid=307WC1D03HJS6&keywords=Macbeth&qid=1651082810&s=books&sprefix=macbet%2Cstripbooks-intl-ship%2C194&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=19bb3dfb50b08343c13db68876b154b4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Meditations",//95
            bookAuthor: "Marcus Aurelius", bookPage:"194", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255?crid=3JKHQFC5EHT6L&keywords=Meditations&qid=1651082844&s=books&sprefix=meditations%2Cstripbooks-intl-ship%2C194&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=03a76c41ce6bb94ced6546c793261e27&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Landlady",//96
            bookAuthor: "Fyodor Dostoevsky", bookPage:"121", bookPrice:"$4.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Landlady-Dover-Thrift-Editions/dp/0486832449?crid=3W1WRVBMZQ05H&keywords=the+landlady+dostoevsky&qid=1651082872&sprefix=The+Landlady%2Caps%2C178&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=cbc8a6da51a7e92f494cfe4aa9c5aa99&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Iron Heel",//97
            bookAuthor: "Jack London", bookPage:"220", bookPrice:"$4.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Iron-Heel-Jack-London/dp/1542362458?_encoding=UTF8&qid=1651082893&sr=8-2&linkCode=ll1&tag=78443782665-20&linkId=9e87705691d85db55e6db959cabef9d7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"An Odyssey of the North",//98
            bookAuthor: "Jack London", bookPage:"27", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Odyssey-North-Other-Klondike-Tales/dp/B0851LJWQW?crid=17L3SG84FFBEK&keywords=An+Odyssey+of+the+North&qid=1651082919&sprefix=an+odyssey+of+the+north%2Caps%2C186&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=027a9882ff29b96df2ccf24ab425b22d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Fantasy of Dr. Ox",//99
            bookAuthor: "Jules Verne", bookPage:"112", bookPrice:"$12.91", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Doctor-Oxs-Experiment-Jules-Verne/dp/1290624461?_encoding=UTF8&qid=1651082945&sr=8-2&linkCode=ll1&tag=78443782665-20&linkId=4a55ccbea7cfab790f82a08408ff8497&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Iliad of Homer",//100
            bookAuthor: "Homer", bookPage:"607", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Iliad-Homer/dp/0140275363?crid=2WIPSU10CZFX7&keywords=The+Iliad+of+Homer&qid=1651082980&sprefix=the+iliad+of+homer%2Caps%2C300&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=6907102320266a642d4071bd5408c893&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Master Zacharius",//101
            bookAuthor: "Jules Verne", bookPage:"46", bookPrice:"$5.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Winter-Amid-Ice-Jules-Verne/dp/1497351332?_encoding=UTF8&qid=1651090375&sr=1-4&linkCode=ll1&tag=78443782665-20&linkId=b906c83b4ff053acc8f3140cef1f6b14&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Oblomov",//102
            bookAuthor: "Ivan Goncharov", bookPage:"496", bookPrice:"$16.14", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Oblomov-Penguin-Classics-Ivan-Goncharov/dp/0140449876?crid=2AC58LSNQ3BR1&keywords=Oblomov&qid=1651090542&s=books&sprefix=oblomov%2Cstripbooks-intl-ship%2C178&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=5c8313c905a22e249e3d65ecc1cb6cc3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Brave New World",//103
            bookAuthor: "Aldous Huxley", bookPage:"268", bookPrice:"$8.38", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523?&linkCode=ll1&tag=78443782665-20&linkId=ef26f4683ed301964d013779db1f34d1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Count of Monte Cristo - Part One",//104
            bookAuthor: "Alexandre Dumas", bookPage:"470", bookPrice:"$4.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Count-Monte-Cristo-Part/dp/1721115536?&linkCode=ll1&tag=78443782665-20&linkId=29a855c7492b20c5e72f72f886341317&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Collector",//105
            bookAuthor: "John Fowles", bookPage:"305", bookPrice:"$9.16", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Collector-Back-Bay-Books/dp/0316290238?&linkCode=ll1&tag=78443782665-20&linkId=896d968e81ea45990094740b5dd2a210&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Myth of Sisyphus",//106
            bookAuthor: "Albert Camus", bookPage:"192", bookPrice:"$5.55", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Myth-Sisyphus-Penguin-Great-Ideas/dp/0141023996?&linkCode=ll1&tag=78443782665-20&linkId=dd6deedc222ccdb364ed5384ae4e5ae7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Philosophy of Walking",//107
            bookAuthor: "Frédéric Gros", bookPage:"224", bookPrice:"$15.33", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Philosophy-Walking-Frederic-Gros/dp/1781682704?&linkCode=ll1&tag=78443782665-20&linkId=a6ea9330991836c4294809cfc5e0df44&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Unbearable Lightness of Being",//108
            bookAuthor: "Milan Kundera", bookPage:"320", bookPrice:"$12.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Unbearable-Lightness-Being-Perennial-Classics/dp/0061148520?&linkCode=ll1&tag=78443782665-20&linkId=edede6bd088b61fea48df04ea8e7b9b6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Wisdom of Life",//109
            bookAuthor: "Arthur Schopenhauer", bookPage:"96", bookPrice:"$7.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wisdom-Life-Arthur-Schopenhauer/dp/0486435504?&linkCode=ll1&tag=78443782665-20&linkId=3157bae64f8fe49086e94fce004d0486&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Ecce Homo",//110
            bookAuthor: "Friedrich Nietzsche", bookPage:"144", bookPrice:"$15.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Ecce-Homo-Alexander-Zagorulko-dp-1598009796/dp/1598009796?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=1bd4ad22faa8ddf2eaf115d5e6ddd4a0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Before Adam",//111
            bookAuthor: "Jack London", bookPage:"112", bookPrice:"$8.08", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Before-Adam-Jack-London/dp/1612034748?&linkCode=ll1&tag=78443782665-20&linkId=9eb12ec5f52eb4b3ba610f254b7ac942&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Social Contract",//112
            bookAuthor: "Jean-Jacques Rousseau", bookPage:"188", bookPrice:"$4.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Social-Contract-Jean-Jacques-Rousseau/dp/149617268X?&linkCode=ll1&tag=78443782665-20&linkId=b6c597ea0fe2ae8d6a0a935bb024ffb2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"East of Eden",//113
            bookAuthor: "John Steinbeck", bookPage:"601", bookPrice:"$8.68", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/East-Eden-Penguin-Orange-Collection/dp/0143129481?&linkCode=ll1&tag=78443782665-20&linkId=96088f06b1fe4e9b5791ef28ba7b6489&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Master and Margarita",//114
            bookAuthor: "Mikhail Bulgakov", bookPage:"432", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Master-Margarita-Mikhail-Bulgakov/dp/0679760806?&linkCode=ll1&tag=78443782665-20&linkId=8632e0862ee70c17185bc158633e998b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Man Outside",//115
            bookAuthor: "Wolfgang Borchert", bookPage:"270", bookPrice:"$7.68", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Man-Outside-Play-stories/dp/0811200116?&linkCode=ll1&tag=78443782665-20&linkId=723342e3206d5898e080e4c120d86cd4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"In Dubious Battle",//116
            bookAuthor: "John Steinbeck", bookPage:"330", bookPrice:"$16.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Dubious-Battle-Penguin-Classics/dp/0143039636?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=637ddccbf6b19fb9e12730ccbd3ec567&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Devils",//117
            bookAuthor: "Fyodor Dostoevsky", bookPage:"694", bookPrice:"$4.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Devils-Wordsworth-Classics-Dostoevsky/dp/1840220996?&linkCode=ll1&tag=78443782665-20&linkId=f9b20a56a421256a5b53a20f7dd9a31d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Bartleby the Scrivener",//118
            bookAuthor: "Herman Melville", bookPage:"64", bookPrice:"$3.55", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Bartleby-Scrivener-Wall-Street-Herman-Melville/dp/1617206881?&linkCode=ll1&tag=78443782665-20&linkId=8cbd1c877cbdb3c3ba74b4fe77a3ee74&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Emma",//119
            bookAuthor: "Jane Austen", bookPage:"474", bookPrice:"$3.89", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Emma-Jane-Austen/dp/1546669752?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=72f6ceadde9d9254f545d8599d490f1e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Odyssey",//120
            bookAuthor: "Homer", bookPage:"541", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Odyssey-Homer/dp/0140268863?&linkCode=ll1&tag=78443782665-20&linkId=701e2d61afd4b83d10d987b1b57040a5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Song of Achilles",//121
            bookAuthor: "Madeline Miller", bookPage:"416", bookPrice:"$10.35", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Song-Achilles-Novel-Madeline-Miller/dp/0062060627?&linkCode=ll1&tag=78443782665-20&linkId=57627ebee622e981cea4a092896a4062&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Distance Between Me and the Cherry Tree",//122
            bookAuthor: "Paola Peretti", bookPage:"256", bookPrice:"$8.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Distance-Between-Me-Cherry-Tree/dp/1471407551?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=3834104a112517bee6eb4660f068298a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Warcross",//123
            bookAuthor: "Marie Lu", bookPage:"353", bookPrice:"$6.74", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Warcross-Marie-Lu/dp/1984815768?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=86f9d630873320410d7848763f4e7831&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Little Women",//124
            bookAuthor: "Louisa May Alcott", bookPage:"449", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Little-Women-Puffin-Louisa-Alcott/dp/0147514010?crid=24FF5YLQSZQFV&keywords=Little+Women&qid=1651091655&s=books&sprefix=little+women%2Cstripbooks-intl-ship%2C276&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=9b79758242053a9d0c923274f4ed9a6b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Anne of Avonlea",//125
            bookAuthor: "L.M. Montgomery", bookPage:"276", bookPrice:"$4.69", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Anne-Avonlea-Green-Gables-Book/dp/0553213148?&linkCode=ll1&tag=78443782665-20&linkId=e39edd44c0aad1a0ae107e6e23c67dd6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Charlie and the Chocolate Factory",//126
            bookAuthor: "Roald Dahl", bookPage:"176", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Charlie-Chocolate-Factory-Puffin-Classics/dp/0142401080?&linkCode=ll1&tag=78443782665-20&linkId=198097ccc49735a18e1635056e0da9b9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Sadako and the 1000 Paper Cranes",//127
            bookAuthor: "Eleanor Coerr", bookPage:"92", bookPrice:"$6.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sadako-Paper-Cranes-Eleanor-Coerr/dp/0698118022?&linkCode=ll1&tag=78443782665-20&linkId=a1845a4c5d337cfe775e0068557fcbda&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Invisible Man",//128
            bookAuthor: "H.G. Wells", bookPage:"92", bookPrice:"$6.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Invisible-Man-Ralph-Ellison/dp/0679732764?&linkCode=ll1&tag=78443782665-20&linkId=bdd1299fef3880949d30a8f6d0f0cdc2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"No One Writes to the Colonel",//129
            bookAuthor: "Gabriel García Márquez", bookPage:"69", bookPrice:"$10.87", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/No-One-Writes-Colonel-Perennial/dp/0060751576?&linkCode=ll1&tag=78443782665-20&linkId=6e93732f44b423f4306ef0da6646f8b9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Dune Messiah",//130
            bookAuthor: "Frank Herbert", bookPage:"337", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Dune-Messiah-Frank-Herbert/dp/0593098234?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=a6d21183e64c424665a9f96195f3b24e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Hitchhiker's Guide to the Galaxy",//131
            bookAuthor: "Douglas Adams", bookPage:"216", bookPrice:"$11.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Hitchhikers-Guide-Galaxy-Douglas-Adams/dp/0345391802?&linkCode=ll1&tag=78443782665-20&linkId=84aaf25691d39d1f689ceca9864da401&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Hobbit",//132
            bookAuthor: "J.R.R. Tolkien", bookPage:"300", bookPrice:"$11.91", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X?crid=2VH1FGNRKAWK8&keywords=the+hobbit&qid=1651336703&s=books&sprefix=the+h%2Cstripbooks-intl-ship%2C446&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=03987d131bedf4e815519b97fe45a2bf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Return of the King",//133
            bookAuthor: "J.R.R. Tolkien", bookPage:"464", bookPrice:"$8.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Return-King-Lord-Rings-Part/dp/0345339738?&linkCode=ll1&tag=78443782665-20&linkId=bdc9ce9bfc72f4e721e05409d49a16f0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Two Towers",//134
            bookAuthor: "J.R.R. Tolkien", bookPage:"398", bookPrice:"$11.16", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Two-Towers-Being-Second-Rings-ebook/dp/B007978PKY?&linkCode=ll1&tag=78443782665-20&linkId=dbffc5edd38110ee6ea0e5ca87eb5310&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Fellowship of the Ring",//135
            bookAuthor: "J.R.R. Tolkien", bookPage:"398", bookPrice:"$6.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fellowship-Ring-Lord-Rings-Part/dp/0345339703?&linkCode=ll1&tag=78443782665-20&linkId=d72271070e4f5016f2cbc19c5eea7a9b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Tale of the Unknown Island",//136
            bookAuthor: "José Saramago", bookPage:"64", bookPrice:"$8.89", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Tale-Island-Jose-Saramago/dp/0156013037?&linkCode=ll1&tag=78443782665-20&linkId=9f12a98608e6d6afbbd7d6b82fb995eb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Star Rover",//137
            bookAuthor: "Jack London", bookPage:"288", bookPrice:"$19.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Star-Rover-Jack-London/dp/1420939106?&linkCode=ll1&tag=78443782665-20&linkId=0332a42c7772ad4e49a45aa761e11d98&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Red and the Black",//138
            bookAuthor: "Stendhal", bookPage:"608", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Red-Black-Penguin-Classics/dp/0140447644?&linkCode=ll1&tag=78443782665-20&linkId=9e87f5af980ff6bfa4ac32d8d507553e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Comedy of Errors",//139
            bookAuthor: "William Shakespeare", bookPage:"216", bookPrice:"$7.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Comedy-Errors-William-Shakespeare/dp/1420926233?&linkCode=ll1&tag=78443782665-20&linkId=e3a7e9435f16434757702e100527f852&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"King Lear",//140
            bookAuthor: "William Shakespeare", bookPage:"338", bookPrice:"$9.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/King-Lear-Folger-Shakespeare-Library/dp/074348276X?&linkCode=ll1&tag=78443782665-20&linkId=f00ff85d41af307aafd97ac1f833f4f9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Prometheus Bound",//141
            bookAuthor: "Aeschylus", bookPage:"144", bookPrice:"$12.74", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Prometheus-Bound-Review-Books-Classics/dp/1590178602?&linkCode=ll1&tag=78443782665-20&linkId=5bc00e8b517efbd6e61550d4aa360b98&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Tempest",//142
            bookAuthor: "William Shakespeare", bookPage:"218", bookPrice:"$2.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Tempest-Folger-Shakespeare-Library/dp/0743482832?&linkCode=ll1&tag=78443782665-20&linkId=4fff2b1ceb0d0e169c0a46512354d003&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Shakespeare's Sonnets",//143
            bookAuthor: "William Shakespeare", bookPage:"504", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sonnets-Poems-Love-William-Shakespeare/dp/0312744994?_encoding=UTF8&qid=1651092431&sr=8-2&linkCode=ll1&tag=78443782665-20&linkId=5a8933e3935781961430c183ec3ae47f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Winter's Tale",//144
            bookAuthor: "William Shakespeare", bookPage:"306", bookPrice:"$11.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0521293731?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=acb2f2ba8d9662208f0385606c67165a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"To Build a Fire",//145
            bookAuthor: "Jack London", bookPage:"123", bookPrice:"$3.45", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Build-Fire-Jack-London/dp/1453607943?&linkCode=ll1&tag=78443782665-20&linkId=ab5d0c3e9c0a6c9c477d86340764db43&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Uncle Vanya",//146
            bookAuthor: "Anton Chekhov", bookPage:"116", bookPrice:"$4.93", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Uncle-Vanya-Anton-Chekhov/dp/1482673010?&linkCode=ll1&tag=78443782665-20&linkId=76c8755d387f6ce6c7dc89ff92033899&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Master and Man",//147
            bookAuthor: "Leo Tolstoy", bookPage:"108", bookPrice:"$4.55", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Master-Man-Leo-Tolstoy/dp/1479402737?&linkCode=ll1&tag=78443782665-20&linkId=0e8e9e04a667fa9b63d85c6c422a9eab&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Childhood",//148
            bookAuthor: "Leo Tolstoy", bookPage:"100", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Childhood-Boyhood-Youth-Leo-Tolstoy/dp/B086L98PZ8?_encoding=UTF8&qid=1651092640&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=89f4a00cc52b888dbca14cd5e798d467&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Kreutzer Sonata",//149
            bookAuthor: "Leo Tolstoy", bookPage:"128", bookPrice:"$12.05", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Kreutzer-Sonata-Modern-Library-Classics/dp/0812968239?&linkCode=ll1&tag=78443782665-20&linkId=f87168f76a51a788401f0b2104b2b71f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Elegance of the Hedgehog",//150
            bookAuthor: "Muriel Barbery", bookPage:"325", bookPrice:"$10.35", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Elegance-Hedgehog-Muriel-Barbery/dp/1933372605?&linkCode=ll1&tag=78443782665-20&linkId=9d967918d9fb914990dffe2aba653ddf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Swann's Way",//151
            bookAuthor: "Marcel Proust", bookPage:"615", bookPrice:"$16.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Swanns-Way-Search-Penguin-Classics/dp/0142437964?&linkCode=ll1&tag=78443782665-20&linkId=73659ef01fe328d1c81924074acb0eb2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Totem and Taboo: Resemblances Between the Psychic Lives of Savages and Neurotics",//152
            bookAuthor: "Sigmund Freud", bookPage:"224", bookPrice:"$14.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Totem-Taboo-Resemblances-Between-Neurotics/dp/0394701240?&linkCode=ll1&tag=78443782665-20&linkId=717e8759f0952dff3d6a61b610b15ce0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Art of Loving",//153
            bookAuthor: "Erich Fromm", bookPage:"133", bookPrice:"$10.11", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Art-Loving-Erich-Fromm/dp/0061129739?&linkCode=ll1&tag=78443782665-20&linkId=7b968ff6643cdc0a9bbf735e7052ea19&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Gentle Creature",//154
            bookAuthor: "Fyodor Dostoevsky", bookPage:"48", bookPrice:"$15.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Gentle-Creature-Other-Stories-Ridiculous-ebook/dp/B00AQH7CNK?&linkCode=ll1&tag=78443782665-20&linkId=8eba8a963da430c29718f8904bcc07aa&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Inspector General",//155
            bookAuthor: "Nikolai Gogol", bookPage:"80", bookPrice:"$2.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Inspector-General-Dover-Thrift-Editions/dp/0486285006?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=7d21b6796cd87cc76b0c855048413a97&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Adolescent",//156
            bookAuthor: "Fyodor Dostoevsky", bookPage:"580", bookPrice:"$16.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Adolescent-Vintage-Classics-Fyodor-Dostoevsky/dp/0375719008?&linkCode=ll1&tag=78443782665-20&linkId=4c7a387f52b593c9d341c3f04273a555&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Call of the Wild",//157
            bookAuthor: "Jack London", bookPage:"192", bookPrice:"$2.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Call-Wild-Jack-London/dp/1945644516?&linkCode=ll1&tag=78443782665-20&linkId=1d59f7ef4ead907de43a94a45bc14242&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"From the Earth to the Moon",//158
            bookAuthor: "Jules Verne", bookPage:"136", bookPrice:"$12.45", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Earth-Moon-Bantam-Classics/dp/0553214209?&linkCode=ll1&tag=78443782665-20&linkId=6ea26ac9be2d3a688ecb9ce5adf3c1cd&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Moby-Dick",//159
            bookAuthor: "Herman Melville", bookPage:"555", bookPrice:"$5.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Moby-Dick-Bantam-Classics-Herman-Melville/dp/0553213113?&linkCode=ll1&tag=78443782665-20&linkId=3b26208efeb3cb5d0bd3d7a10f7bf79a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Heart of a Dog",//160
            bookAuthor: "Mikhail Bulgakov", bookPage:"123", bookPrice:"$12.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0802150594?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=60fbe75cf798f1c91b3c839a625b726f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"No Longer Human",//161
            bookAuthor: "Osamu Dazai", bookPage:"176", bookPrice:"$11.10", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0811204812?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=51931b909d2b8666a3b08b2e82097db1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Oedipus the King",//162
            bookAuthor: "Sophocles", bookPage:"104", bookPrice:"$6.22", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Oedipus-King-Enriched-Classics-Sophocles/dp/1416500332?keywords=Oedipus+the+King&qid=1651152406&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=1ed523d2b8c16afdbad9637ed1e18de6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Beyond Good and Evil: Prelude to a Philosophy of the Future",//163
            bookAuthor: "Friedrich Nietzsche", bookPage:"240", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/014044923X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=21a1f003b406013ddebf728f5cbba6f1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Twilight of the Idols",//164
            bookAuthor: "Friedrich Nietzsche", bookPage:"176", bookPrice:"$11.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/019955496X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f63bda63d527c093a00d9d35b5bdf72f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Rebel",//165
            bookAuthor: "Albert Camus", bookPage:"320", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0679733841?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=6f4f408492bc35a0e5d298225d48fefc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"On the Shortness of Life",//166
            bookAuthor: "Seneca", bookPage:"106", bookPrice:"$13.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0143036327?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=90e835f71f48cfd6f37e5c365bb784c4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Consolations of Philosophy",//167
            bookAuthor: "Alain de Botton", bookPage:"265", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Consolations-Philosophy-Alain-Botton/dp/0679779175?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=The+Consolations+of+Philosophy&qid=1651153151&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e72f744ca03b050671e4bdd129787835&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Jitterbug Perfume",//168
            bookAuthor: "Tom Robbins", bookPage:"342", bookPrice:"$11.13", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1842430351?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=d6ae43be04193fd204e305cff5d2a251&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Love in the Time of Cholera",//169
            bookAuthor: "Gabriel García Márquez", bookPage:"448", bookPrice:"$7.40", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0307388816?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=200ca10fd93de8b8ed60df6de2886cee&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"1Q84",//170
            bookAuthor: "Haruki Murakami", bookPage:"944", bookPrice:"$15.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0307593312?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=86ff721ebc6df41698616457d2bf6e22&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Happy Death",//171
            bookAuthor: "Albert Camus", bookPage:"144", bookPrice:"$14.41", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Happy-Death-Penguin-Modern-Classics/dp/0141186585?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=fbd0eef7d79a0cf5cff0c0cb8be402e7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Republic of Plato",//172
            bookAuthor: "Plato", bookPage:"512", bookPrice:"$9.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0465069347?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=248554d5b1918f1f6659e94158a5b190&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Praise of Folly",//173
            bookAuthor: "Erasmus", bookPage:"256", bookPrice:"$15.40", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140446087?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=6824ca1fcfbc6c5231b7bf723fde31ea&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"In the Shadow of Young Girls in Flower",//174
            bookAuthor: "Marcel Proust", bookPage:"608", bookPrice:"$21.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Shadow-Young-Girls-Flower-Classics/dp/0143039075?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=f5261a83e523df45d2e0092a64ecf1d0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Life Before Us ('Madame Rosa')",//175
            bookAuthor: "Romain Gary", bookPage:"192", bookPrice:"$33.83", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/081120961X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=add168983ca8daa2d1896ded0dc617f2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Magus",//176
            bookAuthor: "John Fowles", bookPage:"656", bookPrice:"$13.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0316296198?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=1cc6923c5545ff30d0390e78968a71b8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The French Lieutenant's Woman",//177
            bookAuthor: "John Fowles", bookPage:"480", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0099478331?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=0afec86136828d8a3a0ae3ce0af96971&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sound and the Fury",//178
            bookAuthor: "William Faulkner", bookPage:"288", bookPrice:"$6.78", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sound-Fury-Vintage-Classics/dp/0099475014?keywords=The+Sound+and+the+Fury&qid=1651262249&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=bbd75251ce7d8b6138a1b353691af9da&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The People of the Abyss",//179
            bookAuthor: "Jack London", bookPage:"208", bookPrice:"$14.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1598189735?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f1bf4b553129391e091dbf183d568278&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Village of Stepanchikovo",//180
            bookAuthor: "Fyodor Dostoevsky", bookPage:"224", bookPrice:"$16.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140446583?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=1eafa8d6024be9d8eafd890597113f79&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Woman of No Importance",//181
            bookAuthor: "Oscar Wilde", bookPage:"96", bookPrice:"$3.70", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Woman-No-Importance-Oscar-Wilde-dp-B087SCDQKX/dp/B087SCDQKX?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=3b599e324e102b53cc9dcc64050fa32f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Twelfth Night: or, What You Will",//182
            bookAuthor: "William Shakespeare", bookPage:"188", bookPrice:"$5.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0451526767?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=79daa56ed16b01c3275b723b5296052f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Candide",//183
            bookAuthor: "Voltaire", bookPage:"112", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0486266893?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=5e587e336e597b1471f95ed9d0c9376e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Sense and Sensibility",//184
            bookAuthor: "Jane Austen", bookPage:"384", bookPrice:"$3.58", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0192804782?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=eeba90f3831e279efe597c7266379088&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Herland",//185
            bookAuthor: "Charlotte Perkins Gilman", bookPage:"176", bookPrice:"$14.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0394736656?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=45d84477ab86f0f2439a021bb3ae4639&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Epic of Gilgamesh",//186
            bookAuthor: "Unknown", bookPage:"304", bookPrice:"$13.40", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140449191?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=cd6de2ad7a4d7cfc2351058b36f47fc6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Antigone",//187
            bookAuthor: "Sophocles", bookPage:"80", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1580493882?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=1f4291316d34d4f906a0603c93c06ab9&language=en_US&ref_=as_li_ss_tlhttps://www.amazon.com/gp/product/1580493882?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=1f4291316d34d4f906a0603c93c06ab9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Julius Caesar",//188
            bookAuthor: "William Shakespeare", bookPage:"96", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Julius-Caesar-Annotated-William-Shakespeare-dp-1533199108/dp/1533199108?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=f01ba880b8412063353fae3c0956f47a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sea of Monsters",//189
            bookAuthor: "Rick Riordan", bookPage:"320", bookPrice:"$5.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Monsters-Percy-Jackson-Olympians-Book/dp/1423103343?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=9cbfb3609fe7de261ba9f0f056bdbb87&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Death Note, Vol. 1: Boredom",//190
            bookAuthor: "Tsugumi Ohba", bookPage:"195", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1421501686?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=206c92ec9be7c5bc2802330ef5d54ac9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Anne of the Island",//191
            bookAuthor: "L.M. Montgomery", bookPage:"368", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1442490047?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=396d6812ee54d01126431662fe29e47e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Petey",//192
            bookAuthor: "Ben Mikaelsen", bookPage:"256", bookPrice:"$6.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0786813369?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=eb46ab324ab4f043c3a9bf17b9615bca&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Girl Gone Viral",//193
            bookAuthor: "Arvin Ahmadi", bookPage:"416", bookPrice:"$12.90", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Girl-Gone-Viral-Arvin-Ahmadi/dp/0425289907?crid=17Z4ZI7AK7NEA&keywords=Girl+Gone+Viral&qid=1651313981&s=books&sprefix=girl+gone+viral%2Cstripbooks-intl-ship%2C386&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=222dfe4fc9c50ca6c623e6a14e826759&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Ready Player One",//194
            bookAuthor: "Ernest Cline", bookPage:"384", bookPrice:"$11.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/0307887448?keywords=ready+player+one+by+ernest+cline&qid=1651314032&s=books&sprefix=Ready+Player+One+by%2Cstripbooks-intl-ship%2C238&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=1c5a00922efc081a0362af4ff2d9892c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Illuminae",//195
            bookAuthor: "Jay Kristoff and Amie Kaufman", bookPage:"608", bookPrice:"$13.45", isWrite:false, bookPoint:0, bookLink:"https://www.amazon.com/Illuminae-Files-Amie-Kaufman/dp/0553499114?&linkCode=ll1&tag=78443782665-20&linkId=3496214834575021224594083ebae896&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Across the Universe",//196
            bookAuthor: "Beth Revis", bookPage:"448", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Across-Universe-Beth-Revis/dp/1595144676?_encoding=UTF8&qid=1651314188&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=ef61128981106d28817192e1570aaf8d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Waning Age",//197
            bookAuthor: "S.E. Grove", bookPage:"352", bookPrice:"$12.77", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Waning-Age-S-Grove/dp/0451479858?_encoding=UTF8&qid=1651314240&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=93950ff95ecbf4ed734996b9fd0e92b8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Wildcard",//198
            bookAuthor: "Marie Lu", bookPage:"368", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wildcard-Warcross-Marie-Lu/dp/0399548009?crid=2B4WEBTWKUEK9&keywords=warcross&qid=1651314344&s=books&sprefix=warcros%2Cstripbooks-intl-ship%2C278&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=2dde92c4b04e3c18f11c587f958eff0c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Peter Pan",//199
            bookAuthor: "J.M. Barrie", bookPage:"74", bookPrice:"$3.87", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Peter-Pan-Wendy-J-M-Barrie/dp/1724523899?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=a9a3becfb641878b2bbdf464f2c76ae6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Treasure Island",//200
            bookAuthor: "Robert Louis Stevenson", bookPage:"352", bookPrice:"$6.90", isWrite:false, bookPoint:0, bookLink:"https://www.amazon.com/gp/product/0753453800?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=8b3e01f16beee367d996c2ac8d38a69b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Air Awakens",//201
            bookAuthor: "Elise Kova", bookPage:"342", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/B01M7VAPO4?caller=Goodreads&callerLink=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F23127048-air-awakens&linkCode=ll1&tag=78443782665-20&linkId=67a903fabcb7fc9d9f063fe51c463f11&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Alice's Adventures in Wonderland / Through the Looking-Glass",//202
            bookAuthor: "Lewis Carroll", bookPage:"125", bookPrice:"$4.18", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Alice-Adventures-Wonderland-Through-Looking-Glass/dp/B085RSFCDM?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=be63235534fb345d5551f7b67dbd80f7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The War of the Worlds",//203
            bookAuthor: "H.G. Wells", bookPage:"224", bookPrice:"$8.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0375759239?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=d82e48b5fb24024e1980c606354c9403&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Island of Dr. Moreau",//204
            bookAuthor: "H.G. Wells", bookPage:"208", bookPrice:"$4.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Island-Dr-Moreau-Signet-Classics/dp/045146866X?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=2abe3939364e552a32a3d8b3f9430e2f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Planet of Exile",//205
            bookAuthor: "Ursula K. Le Guin", bookPage:"126", bookPrice:"$4.44", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Planet-Exile-Ursula-K-Guin/dp/0426064291?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=6db1f97b6700d3fdbe758379a54b8a18&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Black Monk",//206
            bookAuthor: "Anton Chekhov", bookPage:"48", bookPrice:"$15.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1419154192?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f26c2f7c7961c627c4c62a9b5055e2a1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Planet of the Apes",//207
            bookAuthor: "Pierre Boulle", bookPage:"272", bookPrice:"$7.59", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0345447980?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=3445f3116e251b0ed8f1a78befe1de83&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Red Laugh",//208
            bookAuthor: "Leonid Andreyev", bookPage:"100", bookPrice:"$18.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1425478158?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=1c188ba2e1bb1c9b8699d43b83315ff2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Of Love and Other Demons",//209
            bookAuthor: "Gabriel García Márquez", bookPage:"160", bookPrice:"$6.33", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0141032545?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=a79566af6dee8c990c2bb228cb95a7de&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Nana",//210
            bookAuthor: "Émile Zola", bookPage:"480", bookPrice:"$14.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140442634?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=07662a33da4926aaf17ffe6c38b8a621&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Three Sisters",//211
            bookAuthor: "Anton Chekhov", bookPage:"416", bookPrice:"$14.19", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Three-Sisters-Novel-Heather-Morris/dp/1250276896?_encoding=UTF8&qid=1651335586&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=282db6ae599678545456637ce37c6694&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Hero of Our Time",//212
            bookAuthor: "Mikhail Lermontov", bookPage:"185", bookPrice:"$4.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Hero-Our-Time-Mikhail-Lermontov-dp-148017355X/dp/148017355X?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=4e56daaa2d1a793b8241d7a544a2368b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"God Emperor of Dune",//213
            bookAuthor: "Frank Herbert", bookPage:"464", bookPrice:"$8.80", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0575075066?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=e9bb90a422eda6b246f88ca0eb1cef44&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Children of Dune",//214
            bookAuthor: "Frank Herbert", bookPage:"624", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0593098242?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=bd1179339fb157371f25a9600d67a364&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Dance with Dragons 1: Dreams and Dust",//215
            bookAuthor: "George R.R. Martin", bookPage:"690", bookPrice:"$15.65", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/DANCE-DRAGON-PT1-DREAM-DU-GEORGE-MARTIN/dp/000812230X?_encoding=UTF8&qid=1651335937&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=9d7966dc61b97c12ef3407c8cba78333&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Dance with Dragons 2: After the Feast",//216
            bookAuthor: "George R.R. Martin", bookPage:"560", bookPrice:"$8.08", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Dance-Dragons-Part-After-Feast/dp/000754829X?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=A+Dance+with+Dragons+2&qid=1651336173&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=d9417778353e875fb0945d49279964fa&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Children of Húrin",//217
            bookAuthor: "J.R.R. Tolkien", bookPage:"336", bookPrice:"$12.43", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0007252269?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=58d09e00427dd76d9f19f0dd21c08d6b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Lord of the Rings",//218
            bookAuthor: "J.R.R. Tolkien", bookPage:"1216", bookPrice:"$22.10", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/s?k=The+Lord+of+the+Rings&i=stripbooks&adid=082VK13VJJCZTQYGWWCZ&campaign=211041&linkCode=ll2&tag=78443782665-20&linkId=e0117ed4d7c9c6d871511d0867179632&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"I, Robot",//219
            bookAuthor: "Isaac Asimov", bookPage:"256", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/I-Robot-Isaac-Asimov/dp/055338256X?crid=HVBZAR1VO3SD&keywords=I%2C+robot&qid=1651336548&s=books&sprefix=i%2C+robo%2Cstripbooks-intl-ship%2C276&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=432e13221823dbb68f4f365dec228a97&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Harry Potter and the Cursed Child: Parts One and Two",//220
            bookAuthor: " by John Tiffany (Adaptation), Jack Thorne, J.K. Rowling", bookPage:"336", bookPrice:"$10.38", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/B073P962D9?caller=Goodreads&callerLink=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F29056083-harry-potter-and-the-cursed-child&linkCode=ll1&tag=78443782665-20&linkId=8456b91d83671b01ec8e7ec9b9ade593&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Silmarillion",//221
            bookAuthor: "J.R.R. Tolkien", bookPage:"384", bookPrice:"$12.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Silmarillion-J-R-R-Tolkien/dp/0544338014?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=fb0dac45505b047f91da11dd86b4e4c2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sea Wolf",//222
            bookAuthor: "Jack London", bookPage:"288", bookPrice:"$4.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sea-Wolf-Jack-London/dp/0553212257?_encoding=UTF8&qid=1651338015&sr=1-3&linkCode=ll1&tag=78443782665-20&linkId=97e7ec21f4a9b2b59d324694984f4ef5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Antony and Cleopatra",//223
            bookAuthor: "William Shakespeare", bookPage:"352", bookPrice:"$12.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1904271014?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=61f321bfd61533eb57b7b677e0a51076&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Taming of the Shrew",//224
            bookAuthor: "William Shakespeare", bookPage:"304", bookPrice:"$5.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/074347757X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=21e272a742bdde4c670886a57a89ef5e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Bourgeois Gentleman",//225
            bookAuthor: "Molière", bookPage:"64", bookPrice:"$6.67", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0486415929?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=ed60ce5f5696063512a90f9aa58c70d4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Three Years",//226
            bookAuthor: "Anton Chekhov", bookPage:"128", bookPrice:"$8.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Three-Years-101-Pages-Classics/dp/1847497667?crid=1QPUXHJBUAHDU&keywords=three+years+anton+chekhov&qid=1651347655&s=books&sprefix=three+years+anton+chekho%2Cstripbooks-intl-ship%2C183&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=ea42fea11e933841e04f9fb587d670ba&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Three Deaths",//227
            bookAuthor: "Leo Tolstoy", bookPage:"25", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/B09R8S5P39?caller=Goodreads&callerLink=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F9505913-three-deaths&linkCode=ll1&tag=78443782665-20&linkId=6f5f34be817fb7b81bb333d46f71da1c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Devil",//228
            bookAuthor: "Leo Tolstoy", bookPage:"60", bookPrice:"$5.38", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Devil-Lev-Nikolayevich-Tolstoy/dp/1548393037?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=ba3ad40091538ee45f515c95cbcecdeb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Family Happiness",//229
            bookAuthor: "Leo Tolstoy", bookPage:"99", bookPrice:"$6.98", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Family-Happiness-Lev-Tolstoy/dp/B08CPCBPX8?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=Family+Happiness&qid=1651348732&s=books&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=039bc4905b276364958a065830da2091&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Uncle's Dream",//230
            bookAuthor: "Fyodor Dostoevsky", bookPage:"244", bookPrice:"$12.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Uncles-Dream-101-Pages-Classics/dp/1847497683?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=Uncle%27s+Dream&qid=1651498927&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e6f090691eb0e755fdfcd881cefef91e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Cossacks",//231
            bookAuthor: "Leo Tolstoy", bookPage:"268", bookPrice:"$13.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Cossacks-Leo-Nikolayevich-Tolstoy/dp/1595406751?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=73e130a82a12bd6c954305cc19f40e3c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Another Man's Wife And A Husband Under The Bed",//232
            bookAuthor: "Fyodor Dostoevsky", bookPage:"60", bookPrice:"$1.17", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/B00YFQV53Q?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=dcc460b80caeaacdf5671f9ebdcaa3b8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Flowers for Algernon",//233
            bookAuthor: "Daniel Keyes", bookPage:"311", bookPrice:"$8.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Flowers-Algernon-Daniel-Keyes/dp/0156030306?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=56af48a74940f741f65fd3c6a49e8e02&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Fugitive: In Search of Lost Time, Volume 6",//234
            bookAuthor: "Marcel Proust", bookPage:"352", bookPrice:"$16.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fugitive-Search-Penguin-Classics-Deluxe/dp/0143133705?crid=2DVJJ1ITTJJ0C&keywords=the+fugitive+by+marcel+proust&qid=1651395189&s=books&sprefix=the+fugitive+by+marcel+prous%2Cstripbooks-intl-ship%2C197&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=172088cd0fb460da37f7acbf618ed26b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Man Without Qualities: Volume I",//235
            bookAuthor: "Robert Musil", bookPage:"752", bookPrice:"$24.96", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0679767878?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f37889ff16f3e7762bec0e9142e94759&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Death in Venice",//236
            bookAuthor: "Thomas Mann", bookPage:"160", bookPrice:"$7.89", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0060576170?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=b2dd07c10c3bf8031b6ac4207d9f9d94&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Group Psychology and the Analysis of the Ego",//237
            bookAuthor: "Sigmund Freud", bookPage:"80", bookPrice:"$5.75", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/B004X5RMYA?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=a4113227539533be732ade1ff8b4eab8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Three Essays on the Theory of Sexuality",//238
            bookAuthor: "Sigmund Freud", bookPage:"192", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0465097081?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=307b33ab36dfb47071823b45e1e3394f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Undiscovered Self",//239
            bookAuthor: "C.G. Jung", bookPage:"128", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0451217322?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=51ebe6eafcacc8d40c57f72ccb39b8b4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Man's Search for Meaning",//240
            bookAuthor: "Viktor E. Frankl", bookPage:"192", bookPrice:"$11.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=9c34a0c71cb7a787cdfd1dc05291309c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Women Who Run With the Wolves: Myths and Stories of the Wild Woman Archetype",//241
            bookAuthor: "Clarissa Pinkola Estés", bookPage:"608", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0345409876?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=ee229739af3eb5a4ab7332bd758c3a8d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Feeling Good: The New Mood Therapy",//242
            bookAuthor: "David D. Burns", bookPage:"706", bookPrice:"$11.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380731762?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=e7359f36ea03ac3c972555134fce852d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Netocika Nezvanova",//243
            bookAuthor: "Fyodor Dostoevsky", bookPage:"176", bookPrice:"$11.16", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140444556?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=6873163d75a769579487c9ce50ec65cc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Eternal Husband",//244
            bookAuthor: "Fyodor Dostoevsky", bookPage:"224", bookPrice:"$8.02", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/097614073X?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=59adda10cd0482c9d2d28f3d07fb4f69&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Twenty Thousand Leagues Under the Sea",//245
            bookAuthor: "Jules Verne", bookPage:"190", bookPrice:"$5.30", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Twenty-Thousand-Leagues-Under-Sea/dp/B086PNZCKP?_encoding=UTF8&qid=1651592379&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=f57b9ab946c009eee849ae12e8120210&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Journey to the Center of the Earth",//246
            bookAuthor: "Jules Verne", bookPage:"240", bookPrice:"$3.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0553213970?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=2b32cc3b8795f5321eb02151feafa7cf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Around the World in Eighty Days",//247
            bookAuthor: "Jules Verne", bookPage:"248", bookPrice:"$11.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/014044906X?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=638f0c4bf6941a25aaa2fc1d71aad5d9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Gulliver's Travels: Travels into Several Remote Nations of the World",//248
            bookAuthor: "Jonathan Swift", bookPage:"336", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0141439491?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=5415c4b69dbd2fd4d9a9d36700d848a3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"David Copperfield",//249
            bookAuthor: "Charles Dickens", bookPage:"928", bookPrice:"$9.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Copperfield-Signet-Classics-Charles-Dickens/dp/0451530047?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=bc4a2d97bfb4252c7492e8a805fe6af1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Five Weeks in a Balloon",//250
            bookAuthor: "Jules Verne", bookPage:"296", bookPrice:"$9.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Best-Verne-Balloon-Illustrated-Classic/dp/1953649114?crid=29OAKRTM5BESM&keywords=Five+Weeks+in+a+Balloon&qid=1651593041&s=books&sprefix=five+weeks+in+a+balloon%2Cstripbooks-intl-ship%2C177&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=e1ed22cd12735cf7095b53a8f501a460&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Three Musketeers",//251
            bookAuthor: "Alexandre Dumas", bookPage:"592", bookPrice:"$1.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Three-Musketeers-Wordsworth-Classics/dp/1853260401?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=The+Three+Musketeers&qid=1651593146&s=books&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=3f18330d77b6ea8d7085dc46802987fb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Country Doctor's Notebook",//252
            bookAuthor: "Mikhail Bulgakov", bookPage:"160", bookPrice:"$8.59", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Young-Doctors-Notebook-Mikhail-Bulgakov/dp/184749286X?crid=3Q9IT1MJKIKY6&keywords=A+Country+Doctor%27s+Notebook&qid=1651593365&s=books&sprefix=a+country+doctor%27s+notebook%2Cstripbooks-intl-ship%2C177&sr=1-4&linkCode=ll1&tag=78443782665-20&linkId=351b90116dd1ee559d8ea9dbfff428e1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Suicide",//253
            bookAuthor: "Édouard Levé", bookPage:"104", bookPrice:"$12.10", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Suicide-French-Literature-Edouard-Lev%C3%A9/dp/1564786285?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=b9b640190dc8e681dd73ff91fd035a37&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Suicide Shop",//254
            bookAuthor: "Jean Teulé", bookPage:"169", bookPrice:"$9.06", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1906040095?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=2f53f182610e455ac1c52509a0a3d6e2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Trouble with Being Born",//255
            bookAuthor: "Emil M. Cioran", bookPage:"224", bookPrice:"$9.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Trouble-Being-Born-M-Cioran/dp/1611457408?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=The+Trouble+with+Being+Born&qid=1651594227&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=f73334175c054f2ee3cf7b12c7d8f4c9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Only Dull People Are Brilliant at Breakfast",//256
            bookAuthor: "Oscar Wilde", bookPage:"52", bookPrice:"$2.47", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/024125180X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=9d3a7a1e2ef56743bd0534dc6b30e978&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sailor Who Fell from Grace with the Sea",//257
            bookAuthor: "Yukio Mishima", bookPage:"192", bookPrice:"$9.89", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sailor-Who-Fell-Grace-Sea/dp/0679750150?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=The+Sailor+Who+Fell+from+Grace+with+the+Sea&qid=1651594581&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=69a08ce536ee2a79e7893e1f218af85d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"De Profundis",//258
            bookAuthor: "Oscar Wilde", bookPage:"80", bookPrice:"$5.78", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Profundis-Worlds-Classics-Oscar-Wilde/dp/B09FC6HDXD?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=De+Profundis&qid=1651594694&s=books&sr=1-3&linkCode=ll1&tag=78443782665-20&linkId=c89ce9277297b681f9bcd413f8adcb57&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"All Gall Is Divided: Aphorisms",//259
            bookAuthor: "Emil M. Cioran", bookPage:"128", bookPrice:"$9.91", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1559704713?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=7561614e77d4a6ada209dde438612f4e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Symposium",//260
            bookAuthor: "Plato", bookPage:"128", bookPrice:"$14.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Symposium-Penguin-Great-Ideas-dp-0143037536/dp/0143037536?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=0392b23d7c394d716eeafc927a2a1dbe&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Antichrist",//261
            bookAuthor: "Friedrich Nietzsche", bookPage:"91", bookPrice:"$5.56", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1884365205?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=9e4dc133372f7cf0a766e26b9595a9ed&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"History of Madness",//262
            bookAuthor: "Michel Foucault", bookPage:"728", bookPrice:"$29.23", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/History-Madness-Michel-Foucault-dp-0415477263/dp/0415477263?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=c8ed1bf9f5cd5d87b86f371233430a50&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"On the Genealogy of Morals",//263
            bookAuthor: "Friedrich Nietzsche", bookPage:"208", bookPrice:"$9.27", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Genealogy-Morals-Oxford-Worlds-Classics-dp-0199537089/dp/0199537089?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=03c68e5ed4fbf8dbc2156474f47a5211&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Age of Reason",//264
            bookAuthor: "Jean-Paul Sartre", bookPage:"416", bookPrice:"$9.77", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0679738959?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=52b180766afe8e296cbf685c68a8a727&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Seducer's Diary",//265
            bookAuthor: "Søren Kierkegaard", bookPage:"232", bookPrice:"$11.66", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Seducers-Diary-S%C3%B8ren-Kierkegaard/dp/069115841X?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=8354cd11649157e00ae8a57924970b95&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",//266
            bookAuthor: "James Clear", bookPage:"320", bookPrice:"$11.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=42efc9c8ec086d154e2977cb2b55be4f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Courage to Create",//267
            bookAuthor: "Rollo May", bookPage:"144", bookPrice:"$8.93", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0393311066?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f4ce72862c59545b171160be1fe46675&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Buddenbrooks: The Decline of a Family",//268
            bookAuthor: "Thomas Mann", bookPage:"731", bookPrice:"$11.70", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Buddenbrooks-Decline-Family-Thomas-Mann/dp/0679752609?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=5027f1be6ea0a71d58d4b9c3f14e24c9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Mirrors: Stories of Almost Everyone",//269
            bookAuthor: "Eduardo Galeano", bookPage:"399", bookPrice:"$13.37", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Mirrors-Stories-Everyone-Eduardo-Galeano/dp/1568586124?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=c94b15d27e29f3665a6dc329017763cb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"One, No One and One Hundred Thousand",//270
            bookAuthor: "Luigi Pirandello", bookPage:"186", bookPrice:"$12.97", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/One-No-Hundred-Thousand/dp/1946774774?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=c3300483ed9d8688e6acdacf97bddb60&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Never Let Me Go",//271
            bookAuthor: "Kazuo Ishiguro", bookPage:"282", bookPrice:"$6.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Never-Let-Me-Kazuo-Ishiguro/dp/0571258093?keywords=Never+Let+Me+Go&qid=1651597121&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=dc0642a12826731d5fa7cc8ecff23fd4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Sputnik Sweetheart",//272
            bookAuthor: "Haruki Murakami", bookPage:"240", bookPrice:"$8.59", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0099448475?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=e41e7877b66b7928c773f37971603025&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"South of the Border, West of the Sun",//273
            bookAuthor: "Haruki Murakami", bookPage:"192", bookPrice:"$10.90", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0099448572?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=57c4037a1dccc50d9f0173a484aa24b3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Kafka on the Shore",//274
            bookAuthor: "Haruki Murakami", bookPage:"480", bookPrice:"$10.87", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1400079276?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=b607335606e3feb434753761c184b23f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Norwegian Wood",//275
            bookAuthor: "Haruki Murakami", bookPage:"298", bookPrice:"$12.80", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0375704027?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=efca6579da836a3a3b0be586d7c4bcc2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Wall",//276
            bookAuthor: "Jean-Paul Sartre", bookPage:"256", bookPrice:"$11.84", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wall-Jean-Paul-Sartre/dp/0714548510?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=3dfd5657c8b1e7b9c57e379cfc319b99&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Apology",//277
            bookAuthor: "Plato", bookPage:"127", bookPrice:"$18.82", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0865163480?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=4b254ae61b7184803f5f9db9bdc86690&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Utopia",//278
            bookAuthor: "Thomas More", bookPage:"100", bookPrice:"$12.06", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Utopia-Mint-Editions-Political-Social-Narratives-dp-1513135465/dp/1513135465?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=790f6940f721f89330ca5296699d8cd3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Guermantes Way",//279
            bookAuthor: "Marcel Proust", bookPage:"864", bookPrice:"$12.48", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Search-Lost-Time-Vol-III/dp/0375752331?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=216f8fd6caaf10cd95f233a57eca1451&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Time Regained: In Search of Lost Time, Vol. VI",//280
            bookAuthor: "Marcel Proust", bookPage:"784", bookPrice:"$9.60", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Time-Regained-Search-Library-Classics/dp/0375753125?keywords=Time+Regained&qid=1651612379&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=ca2f4782bb1e78242184b217c9562828&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Prisoner: In Search of Lost Time, Volume 5",//281
            bookAuthor: "Marcel Proust", bookPage:"448", bookPrice:"$18.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Prisoner-Search-Penguin-Classics-Deluxe/dp/0143133594?crid=I92U157ILJHG&keywords=The+Prisoner%3A+In+Search+of+Lost+Time%2C+Volume+5&qid=1651612775&s=books&sprefix=the+prisoner+in+search+of+lost+time%2C+volume+5%2Cstripbooks-intl-ship%2C182&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=d481c79fe06f841c95884b8913aaa37b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Sodom and Gomorrah: In Search of Lost Time, Volume IV",//282
            bookAuthor: "Marcel Proust", bookPage:"784", bookPrice:"$12.70", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Search-Gomorrah-Modern-Library-Classics/dp/0375753109?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=2283f1f1590df339edc21c5a5ecd3df8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Reader",//283
            bookAuthor: "Bernhard Schlink", bookPage:"218", bookPrice:"$6.28", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Reader-Bernhard-Schlink/dp/0375707972?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=a8658ca1b025374a81e9b3217f229cbe&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Years, Months, Days: Two Novellas",//284
            bookAuthor: "Yan Lianke", bookPage:"155", bookPrice:"$5.70", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Years-Months-Days-Two-Novellas/dp/0802126650?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=d8140db853b2974e6bbc6e593d52f0f9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Disgrace",//285
            bookAuthor: "J.M. Coetzee", bookPage:"220", bookPrice:"$12.19", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Disgrace-Novel-J-M-Coetzee/dp/0140296409?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=a6becedb7e6c4fc86d91233eb12b3995&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Iza's Ballad",//286
            bookAuthor: "Magda Szabó", bookPage:"352", bookPrice:"$16.13", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Izas-Ballad-Review-Books-Classics/dp/1681370344?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=82a837d7733f012602a9d17d2a9166ad&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Magic Mountain",//287
            bookAuthor: "Thomas Mann", bookPage:"720", bookPrice:"$11.88", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0679772871?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=5e719369f7d93fdf14051700aa1eb548&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Beloved",//288
            bookAuthor: "Toni Morrison", bookPage:"321", bookPrice:"$6.39", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1400033411?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=fbc133d201335cde9dc0824e2a314516&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The House of the Spirits",//289
            bookAuthor: "Isabel Allende", bookPage:"496", bookPrice:"$9.75", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/House-Spirits-Novel-Isabel-Allende/dp/1501117017?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=4697ba21a67a15ece49bf0bbc485a888&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Ulysses",//290
            bookAuthor: "James Joyce", bookPage:"783", bookPrice:"$9.08", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Ulysses-James-Joyce/dp/0679722769?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=Ulysses&qid=1651614112&s=books&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=e4ae48de58149dd02d3ac6b2edcb0ce7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Cruise of the Dazzler",//291
            bookAuthor: "Jack London", bookPage:"68", bookPrice:"$4.20", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Cruise-Dazzler-Jack-London/dp/1975735226?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=77a02a8103da13453b318272bae9e439&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Moon Is Down",//292
            bookAuthor: "John Steinbeck", bookPage:"112", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Moon-Down-John-Steinbeck/dp/0140187464?keywords=The+Moon+Is+Down&qid=1651658098&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=15b31a0cf235b5886d6d84bde9cc4ba0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Road",//293
            bookAuthor: "Jack London", bookPage:"118", bookPrice:"$12.90", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Road-Mint-Editions-Jack-London/dp/1513205625?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=e18b26812c85b64406c538282ffbd32b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sebastopol Sketches",//294
            bookAuthor: "Leo Tolstoy", bookPage:"192", bookPrice:"$9.48", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140444688?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=681fb3c57da02116c59374f7ea40122b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Poetics",//295
            bookAuthor: "Aristotle", bookPage:"64", bookPrice:"$2.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/048629577X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f55f2431bbccc8b8f95ca226ae36449f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Normal People",//296
            bookAuthor: "Sally Rooney", bookPage:"288", bookPrice:"$13.36", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1984822179?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=5b76af6c5aac2cc2b565eeaad23ab2ff&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Far From the Madding Crowd",//297
            bookAuthor: "Thomas Hardy", bookPage:"480", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Far-Madding-Crowd-Penguin-Classics/dp/0141439653?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=Far+From+the+Madding+Crowd&qid=1651661601&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=0811743037a1c1e9f8379d653141a278&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Waves",//298
            bookAuthor: "Virginia Woolf", bookPage:"304", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0156949601?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=176065376cfc420542b23c89603c61be&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Childhood's End",//299
            bookAuthor: "Arthur C. Clarke", bookPage:"224", bookPrice:"$15.22", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Childhoods-End-Arthur-C-Clarke/dp/0330514016?keywords=Childhood%27s+End&qid=1651661823&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=db6474d1eb1f2162c87bc3ed931aed05&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Electra",//300
            bookAuthor: "Sophocles", bookPage:"128", bookPrice:"$10.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1854597566?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=2403739a1da9adead33e4c6a2775ee30&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Battle of the Labyrinth",//301
            bookAuthor: "Rick Riordan", bookPage:"400", bookPrice:"$7.96", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Battle-Labyrinth-Percy-Jackson-Olympians/dp/1423101499?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=The+Battle+of+the+Labyrinth&qid=1651662271&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=620ed2ae27b5515340b60c41529dbb8d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Titan's Curse",//302
            bookAuthor: "Rick Riordan", bookPage:"352", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Titans-Curse-Percy-Jackson-Olympians/dp/1423101480?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=f59bd6e27f6a2e033bf18ac3978bad4b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Last Olympian",//303
            bookAuthor: "Rick Riordan", bookPage:"432", bookPrice:"$6.14", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Last-Olympian-Percy-Jackson-Olympians/dp/1423101502?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=cb4cbd23c03602c45a24526058e97e09&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Lightning Thief",//304
            bookAuthor: "Rick Riordan", bookPage:"416", bookPrice:"$5.97", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Lightning-Thief-Percy-Jackson-Olympians/dp/0786838655?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=The+Lightning+Thief&qid=1651662436&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=87c54a721189436fe305b650b60d566a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Crooked Kingdom",//305
            bookAuthor: "Leigh Bardugo", bookPage:"576", bookPrice:"$9.62", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Crooked-Kingdom-Sequel-Six-Crows/dp/1250076978?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=2498793dd52b3ea69426f9812a4c5625&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"City of Ashes",//306
            bookAuthor: "Cassandra Clare", bookPage:"512", bookPrice:"$9.78", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Ashes-Mortal-Instruments-Cassandra-Clare/dp/1481455974?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=6e698e9ca5d78f6f15d9f902b28a65ca&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Death Note, Vol. 2: Confluence",//307
            bookAuthor: "Tsugumi Ohba", bookPage:"200", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1421501694?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=d2ce0ba5a61f116f3f8512c8d548f7d5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Death Note, Vol. 3: Hard Run",//308
            bookAuthor: "Tsugumi Ohba", bookPage:"200", bookPrice:"$14.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1421501708?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=0b34f0a1a7b33e7757e99057921e9c0b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Serpent & Dove",//309
            bookAuthor: "Shelby Mahurin", bookPage:"544", bookPrice:"$10.39", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Serpent-Dove-Shelby-Mahurin/dp/0062878034?keywords=Serpent+%26+Dove&qid=1651662846&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=fa4f7e03f39c22b58a114eee21d082be&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Blended",//310
            bookAuthor: "Sharon M. Draper", bookPage:"320", bookPrice:"$7.53", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Blended-Sharon-M-Draper/dp/1442495014?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=e5772d5a6572dd8a55746ef8713440e9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Anne of Windy Poplars",//311
            bookAuthor: "L.M. Montgomery", bookPage:"228", bookPrice:"$6.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Anne-Windy-Poplars-L-Montgomery/dp/1517411165?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=46d248ec5b9ea438686c07717e031360&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Northanger Abbey",//312
            bookAuthor: "Jane Austen", bookPage:"125", bookPrice:"$3.90", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Northanger-Abbey-Illustrated-Jane-Austen-dp-1549724177/dp/1549724177?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=0fa4db74d33e8927fbd7aa8c722a0be5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Trash",//313
            bookAuthor: "Andy Mulligan", bookPage:"240", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Trash-Andy-Mulligan/dp/0385752164?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=2810bb11c1c59b4ccc295c7a30fdf44d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Boy Who Harnessed the Wind: Creating Currents of Electricity and Hope",//314
            bookAuthor: "William Kamkwamba", bookPage:"273", bookPrice:"$13.41", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0061730327?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=6f51cfb8fe304af122fcd3b64319ce3e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Matilda",//315
            bookAuthor: "Roald Dahl", bookPage:"256", bookPrice:"$15.66", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0141365463?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=de79e0e50de658d2a15c2a647d6c1b5c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Road to Woodbury",//316
            bookAuthor: "Robert Kirkman", bookPage:"288", bookPrice:"$14.70", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0312547749?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=05ffb89d62672eb90960de06b96237ab&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Red Seas Under Red Skies",//317
            bookAuthor: "Scott Lynch", bookPage:"640", bookPrice:"$16.36", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Red-Seas-Under-Skies-Gollancz/dp/0575079673?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=8a050b80bf93a296e50e4535f87647fa&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Slow Regard of Silent Things",//318
            bookAuthor: "Patrick Rothfuss", bookPage:"159", bookPrice:"$10.34", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1473209331?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=b2877c119e6ed7abf5a3ec1e072af9da&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The 5th Wave",//319
            bookAuthor: "Rick Yancey", bookPage:"480", bookPrice:"$10.81", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0399162410?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=59caa486d971229d1b7e61b464a87ccf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Invincible",//320
            bookAuthor: "Stanisław Lem", bookPage:"240", bookPrice:"$15.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Invincible-MIT-Press-Stanislaw-Lem/dp/0262538474?crid=1I428E8X5V1X4&keywords=The+Invincible&qid=1651668166&s=books&sprefix=%2Cstripbooks-intl-ship%2C173&sr=1-2&linkCode=ll1&tag=78443782665-20&linkId=7c79938c6800a5c44c6f0e453dd18b0f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Way of Kings",//321
            bookAuthor: "Brandon Sanderson", bookPage:"1008", bookPrice:"$16.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Way-Kings-Book-Stormlight-Archive/dp/0765376679?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=1e049f5c49f088236adfbc45d51580ea&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Midnight Star",//322
            bookAuthor: "Marie Lu", bookPage:"368", bookPrice:"$11.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Midnight-Star-Young-Elites/dp/0147511704?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=33abb8674174c321e4d8e43b819419c2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"One of Us Is Lying",//323
            bookAuthor: "Karen M. McManus", bookPage:"360", bookPrice:"$8.69", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/One-Of-Us-Is-Lying/dp/0241562015?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=35765be23f6fee6db356268fd86cb971&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Rose Society",//324
            bookAuthor: "Marie Lu", bookPage:"398", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Rose-Society-Young-Elites/dp/0147511690?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=08d145055ec231e9cf05051156a7e203&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Champion",//325
            bookAuthor: "Marie Lu", bookPage:"416", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Champion-Marie-Lu/dp/014751228X?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=69ca30d6f8bb47f329e8f5683731b54d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Book of M",//326
            bookAuthor: "Peng Shepherd", bookPage:"496", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Book-M-Novel-Peng-Shepherd/dp/0062669613?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=c534b568a7c969b71b8a29bf193913c5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Million Suns",//327
            bookAuthor: "Beth Revis", bookPage:"400", bookPrice:"$22.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/159514398X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=616d2b762f3e7bcbf7410ccacdf79e44&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Shades of Earth",//328
            bookAuthor: "Beth Revis", bookPage:"448", bookPrice:"$10.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Shades-Earth-Across-Universe-Novel/dp/1595146156?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=0d04e471147b2d6a47a6220cc2931d63&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Elite",//329
            bookAuthor: "Kiera Cass", bookPage:"352", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Elite-Selection-Kiera-Cass/dp/0062059971?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=92e0bc0aa85e855260d17c4b99dcba0b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Between the Lives",//330
            bookAuthor: "Jessica Shirvington", bookPage:"336", bookPrice:"$17.82", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Between-Lives-Jessica-Shirvington/dp/140833173X?_encoding=UTF8&qid=1651681506&sr=1-1-fkmr0&linkCode=ll1&tag=78443782665-20&linkId=cda678cc3428b6ba62b28b830e85bc8f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Dragon Actually",//331
            bookAuthor: "G.A. Aiken", bookPage:"353", bookPrice:"$7.07", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Dragon-Actually-Kin-Book-ebook/dp/B01LY7ECLB?_encoding=UTF8&qid=1651681638&sr=8-1&linkCode=ll1&tag=78443782665-20&linkId=dd08c302bb1424bf8d87960c233bf3bf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Different Blue",//332
            bookAuthor: "Amy Harmon", bookPage:"368", bookPrice:"$10.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Different-Blue-Novel-Amy-Harmon/dp/1633920968?keywords=A+Different+Blue&qid=1651681706&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=eefd6b46b562b9de0e0b6db717356e0d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Young Elites",//333
            bookAuthor: "Marie Lu", bookPage:"355", bookPrice:"$9.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Young-Elites-Marie-Lu/dp/0147511682?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=eb23f27f89f3f4942c513481543140eb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Prodigy",//334
            bookAuthor: "Marie Lu", bookPage:"416", bookPrice:"$10.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Prodigy-Marie-Lu/dp/0142427551?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=af4117a162b11e55df98ee7081390d34&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Legend",//335
            bookAuthor: "Marie Lu", bookPage:"352", bookPrice:"$7.68", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Legend-Marie-Lu/dp/014242207X?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=Legend&qid=1651682154&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=fec0c69e5c8feb1fb39d8089ed6847c4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Merry Adventures of Robin Hood",//336
            bookAuthor: "Howard Pyle", bookPage:"400", bookPrice:"$17.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1595406557?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=886823c188508104dc61b82593d65980&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Pinocchio",//337
            bookAuthor: "Carlo Collodi", bookPage:"272", bookPrice:"$5.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140382623?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=09f749ab845e5547c6df66f9353f28f9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Heidi",//338
            bookAuthor: "Johanna Spyri", bookPage:"352", bookPrice:"$7.22", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0753454947?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=3e188d7a8abb2453d63931e045d803d1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Adventures of Huckleberry Finn",//339
            bookAuthor: "Mark Twain", bookPage:"304", bookPrice:"$8.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0375757376?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=b0dcf5932fcc6f17b887207576381dc3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Fatal Eggs",//340
            bookAuthor: "Mikhail Bulgakov", bookPage:"110", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fatal-Eggs-Mikhail-Bulgakov/dp/0981269524?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=d2d55eb1204b117f771166dd546561cc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Crystal Crowned",//341
            bookAuthor: "Elise Kova", bookPage:"395", bookPrice:"$15.02", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Crystal-Crowned-Air-Awakens-Book/dp/B08DSX6YPH?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=9438211890f564b06be2630674c16d1c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Fire Falling",//342
            bookAuthor: "Elise Kova", bookPage:"380", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1619849526?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f7af4e7350c1ec955ee5ab8192b41fb9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Earth's End",//343
            bookAuthor: "Elise Kova", bookPage:"350", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Earths-End-Air-Awakens-Book/dp/1619844214?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=b0eade7c60f2a1c3ae338575230c54d2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Water's Wrath",//344
            bookAuthor: "Elise Kova", bookPage:"380", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1619844257?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=1fa03b4bb507d9fc3371a36f1c9ae9ad&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Throne of Glass",//345
            bookAuthor: "Sarah J. Maas", bookPage:"432", bookPrice:"$9.96", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Throne-Glass-Sarah-J-Maas/dp/1619630346?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=Throne+of+Glass&qid=1651693227&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=0220078ef7b28783492de9ee86c4679d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Adventures of Tom Sawyer",//346
            bookAuthor: "Mark Twain", bookPage:"192", bookPrice:"$9.32", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Adventures-Tom-Sawyer-Mint-Editions-dp-1513221183/dp/1513221183?_encoding=UTF8&me=&qid=1651693357&linkCode=ll1&tag=78443782665-20&linkId=3fc29a99e266d5e9f6f44d4d3c4d57dc&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Martian Chronicles",//347
            bookAuthor: "Ray Bradbury", bookPage:"192", bookPrice:"$7.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0553278223?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=d92c9dafe91f1393d31da87885377fc4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"2001: A Space Odyssey",//348
            bookAuthor: "Arthur C. Clarke", bookPage:"296", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0451457994?ie=UTF8&linkCode=ll1&tag=78443782665-20&linkId=9a33fc86678fe1690f508e264f33c466&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Girl Who Was Plugged In",//349
            bookAuthor: "James Tiptree Jr.", bookPage:"35", bookPrice:"$2.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/s?k=The+Girl+Who+Was+Plugged+In&i=stripbooks&adid=082VK13VJJCZTQYGWWCZ&campaign=211041&linkCode=ll2&tag=78443782665-20&linkId=9232c024be1fdad43420bed0ccde753a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Olalla",//350
            bookAuthor: "Robert Louis Stevenson", bookPage:"48", bookPrice:"$15.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1419137883?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=abceb4cece1322af9efd8a646b03359a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Lower Depths",//351
            bookAuthor: "Maxim Gorky", bookPage:"80", bookPrice:"$2.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Lower-Depths-Dover-Thrift-Editions/dp/048641115X?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=27c31ce31953cb1db80b534bf9859b87&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Amphibian",//352
            bookAuthor: "Alexander Belyaev", bookPage:"127", bookPrice:"$10.92", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/5050006597?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=46142c0ba3dcd5c4a8101c7ef5f90e1a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Monster",//353
            bookAuthor: "Stephen Crane", bookPage:"64", bookPrice:"$16.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1419174487?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=6a777f0cf68bc661abd77ecb40164b14&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Satan's Diary",//354
            bookAuthor: "Leonid Andreyev", bookPage:"284", bookPrice:"$23.16", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1166989348?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=1daeb56970238d648f8c47c248fa6759&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Charterhouse of Parma",//355
            bookAuthor: "Stendhal", bookPage:"560", bookPrice:"$16.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0679783180?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=656f96923df0a492ac259df116021470&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"L'Assommoir (The Dram Shop)",//356
            bookAuthor: "Émile Zola", bookPage:"480", bookPrice:"$9.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140447539?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=919cf46e11ef6812c688646ae0bec7f3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Beast Within",//357
            bookAuthor: "Émile Zola", bookPage:"405", bookPrice:"$15.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140449639?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=4bacb0e332e31cef2714f0d449e137ed&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Thérèse Raquin",//358
            bookAuthor: "Émile Zola", bookPage:"240", bookPrice:"$10.40", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140449442?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=f17854c256342b26664e58c150ce0d40&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Mist",//359
            bookAuthor: "Miguel de Unamuno", bookPage:"352", bookPrice:"$23.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0252068947?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=e8a7fc8614f238ac1f102a086c528b8b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Heretics of Dune",//360
            bookAuthor: "Frank Herbert", bookPage:"480", bookPrice:"$7.90", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0441328008?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=f6af50aefba5dac6ca8ae557f09f741e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Chapterhouse: Dune",//361
            bookAuthor: "Frank Herbert", bookPage:"624", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0593098277?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=bed9b4ace3c1b6fac018a37c8b5446c5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Time of Contempt",//362
            bookAuthor: "Andrzej Sapkowski", bookPage:"352", bookPrice:"$15.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Time-Contempt-Witcher-Andrzej-Sapkowski/dp/0316219134?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=f520fe1853ad9703964f714060cab50d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Beren and Lúthien",//363
            bookAuthor: "J.R.R. Tolkien", bookPage:"288", bookPrice:"$30.36", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0008214190?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=38e19848bc6301b78932f3ee193a2414&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Second Foundation",//364
            bookAuthor: "Isaac Asimov", bookPage:"272", bookPrice:"$12.59", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Second-Foundation-Isaac-Asimov/dp/0553382594?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=4f5552c0ed53408db18ed1320182c857&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Feast for Crows",//365
            bookAuthor: "George R.R. Martin", bookPage:"784", bookPrice:"$12.54", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Feast-Crows-HBO-Tie-Song/dp/0553390570?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=9bacb32b961e7ab00580fae4bb0e5804&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Storm of Swords 1: Steel and Snow",//366
            bookAuthor: "George R.R. Martin", bookPage:"688", bookPrice:"$12.57", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0006479901?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=79ed99d77d9b5d9e93fa226e4dade356&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Storm of Swords 2: Blood and Gold",//367
            bookAuthor: "George R.R. Martin", bookPage:"607", bookPrice:"$10.21", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0007119550?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=4552547e0c8dec3c2e27ef2a0526cbd5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Clash of Kings",//368
            bookAuthor: "George R.R. Martin", bookPage:"784", bookPrice:"$15.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0553381695?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=0a6ff984a9c80cc954fc8d3dc20c4655&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Game of Thrones",//369
            bookAuthor: "George R.R. Martin", bookPage:"835", bookPrice:"$12.24", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0553588486?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=ee064028aa4633c1e259307519e872a3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Unfinished Tales of Númenor and Middle-Earth",//370
            bookAuthor: "J.R.R. Tolkien", bookPage:"624", bookPrice:"$13.48", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Unfinished-Tales-J-R-R-Tolkien/dp/0261103628?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=c28725fcbbc39853e1f11c838c7182be&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Roverandom",//371
            bookAuthor: "J.R.R. Tolkien", bookPage:"128", bookPrice:"$12.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Roverandom-J-R-R-Tolkien/dp/0395957990?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=0772e62acba37ef6b84d8b96569823c3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Tales of Beedle the Bard",//372
            bookAuthor: "J.K. Rowling", bookPage:"144", bookPrice:"$11.44", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Tales-Beedle-Bard-J-Rowling/dp/1408883090?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=5b4026048f915e80789af63592b0efb8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Timon of Athens",//373
            bookAuthor: "William Shakespeare", bookPage:"189", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Timon-Athens-William-Shakespeare-dp-B08DBNH813/dp/B08DBNH813?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=aeea141b7171c87f2c0973333b1f15fd&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"All's Well That Ends Well",//374
            bookAuthor: "William Shakespeare", bookPage:"200", bookPrice:"$26.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Alls-Well-That-Shakespeare-Folios-dp-1854597191/dp/1854597191?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=39dc7b9c63e11cb33bdd9005e8c40ca1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"As You Like It",//375
            bookAuthor: "William Shakespeare", bookPage:"368", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/You-Like-Folger-Shakespeare-Library/dp/1982109408?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=c93ab4f302d609af8ac60cead6d62c31&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Much Ado About Nothing",//376
            bookAuthor: "William Shakespeare", bookPage:"246", bookPrice:"$5.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0743482751?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=38b773818a72be56867232426eb77faf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Boyhood",//377
            bookAuthor: "Leo Tolstoy", bookPage:"64", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Boyhood-Annotated-Leo-Tolstoy/dp/1523319763?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=7305b3c42c4f31d1666cc3454c1307f9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Youth",//378
            bookAuthor: "Leo Tolstoy", bookPage:"86", bookPrice:"$5.38", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Youth-Leo-Tolstoy/dp/1535299584?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=16433127d64e3afefd6722cc44a75270&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Prisoner In The Caucasus",//379
            bookAuthor: "Leo Tolstoy", bookPage:"48", bookPrice:"$15.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1425472052?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=05bd8b1a9fa3723e4aeaa99d83ee4fa5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Vindication of the Rights of Woman",//380
            bookAuthor: "Mary Wollstonecraft", bookPage:"352", bookPrice:"$12.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0141441259?ie=UTF8&linkCode=sl1&tag=78443782665-20&linkId=08a45165e65476357c6c1645166fce86&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Civilization and Its Discontents",//381
            bookAuthor: "Sigmund Freud", bookPage:"64", bookPrice:"$4.24", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Civilization-its-Discontents-Sigmund-Freud-dp-1985757389/dp/1985757389?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=30d35d282ab64124b79c36f29df17351&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"An Outline of Psycho-Analysis",//382
            bookAuthor: "Sigmund Freud", bookPage:"144", bookPrice:"$13.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0393001512?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=4a6dcc1d0510e1dd2f94d980a8f16d6a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Interpretation of Dreams",//383
            bookAuthor: "Sigmund Freud", bookPage:"510", bookPrice:"$5.77", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1566195764?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=e81bfce5a47268a55e6e3ebd52e3ca51&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Psychopathology of Everyday Life",//384
            bookAuthor: "Sigmund Freud", bookPage:"320", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0141184035?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=f44eb9cd9d002c58c716283eaba5533c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Four Archetypes",//385
            bookAuthor: "C.G. Jung", bookPage:"173", bookPrice:"$11.96", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0691017662?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=2eef0ad2a59717884fd31b61aa80f62e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Being and Nothingness",//386
            bookAuthor: "Jean-Paul Sartre", bookPage:"928", bookPrice:"$16.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Being-Nothingness-Jean-Paul-Sartre-dp-1982105453/dp/1982105453?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=7814a9e1b20e860dda9e68b4c7797edb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Heart of Man: Its Genius for Good and Evil",//387
            bookAuthor: "Erich Fromm", bookPage:"144", bookPrice:"$19.89", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Heart-Man-Genius-Good-Evil/dp/1590561864?_encoding=UTF8&qid=1651823134&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=4e71f6e082eaae5f8e27cb8b31889a80&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Neurotic Personality of Our Time",//388
            bookAuthor: "Karen Horney", bookPage:"256", bookPrice:"$18.56", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0393310973?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=d6796257fc3f95ba6b3cf966595c4c6f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Name of the Rose",//389
            bookAuthor: "Umberto Eco", bookPage:"502", bookPrice:"$21.12", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0156001314?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=29b92ec4af349d244ce5b0656aae5e89&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Dr. Jekyll and Mr. Hyde",//390
            bookAuthor: "Robert Louis Stevenson", bookPage:"64", bookPrice:"$2.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Strange-Jekyll-Dover-Thrift-Editions/dp/0486266885?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=3ee80c700d7474777482b3ccea451104&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Shibumi",//391
            bookAuthor: "Trevanian", bookPage:"480", bookPrice:"$18.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Shibumi-Novel-Trevanian/dp/1400098033?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=a23c022d293f82595009a8dfb8a203ef&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"It Didn't Start with You: How Inherited Family Trauma Shapes Who We Are and How to End the Cycle",//392
            bookAuthor: "Mark Wolynn", bookPage:"256", bookPrice:"$13.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Didnt-Start-You-Inherited-Family/dp/1101980389?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=41403adaf22a7d87fd147783ceec0e56&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Power of your Subconscious Mind",//393
            bookAuthor: "Joseph Murphy", bookPage:"312", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/8192910962?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=9d759c5caf2ebc6f5a23b8754b048788&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Boy Who Was Raised as a Dog: And Other Stories from a Child Psychiatrist's Notebook",//394
            bookAuthor: "Bruce D. Perry,  Maia Szalavitz", bookPage:"448", bookPrice:"$9.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Boy-Who-Raised-Psychiatrists-Notebook-What/dp/0465094457?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=01c09f84d0d1836c063be9a62e79c1b9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Love's Executioner & Other Tales of Psychotherapy",//395
            bookAuthor: "Irvin D. Yalom", bookPage:"312", bookPrice:"$12.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Loves-Executioner-Other-Tales-Psychotherapy/dp/0465020119?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=a935777b492d7b255b537174261eb5e0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Wizard of Oz",//396
            bookAuthor: "L. Frank Baum", bookPage:"208", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0142427500?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=211a474022bb83698788ee39b0953fc9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Adrift in the Pacific: Two Years Holiday (Extraordinary Voyages #32)",//397
            bookAuthor: "Jules Verne", bookPage:"300", bookPrice:"$24.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1410102157?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=38693bcb6f711709ba2e0db7fc85c892&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Eugénie Grandet",//398
            bookAuthor: "Honoré de Balzac", bookPage:"242", bookPrice:"$15.82", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Eugenie-Grandet-Everymans-Library-Classics/dp/1857151194?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=3beed98c8113f15cc608167aec904ad5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The World of Yesterday",//399
            bookAuthor: "Stefan Zweig", bookPage:"472", bookPrice:"$20.87", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/World-Yesterday-Stefan-Zweig/dp/0803226616?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=7f616f705ec7889730f6fac9f3cfb7bf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Christmas Carol",//400
            bookAuthor: "Charles Dickens", bookPage:"96", bookPrice:"$9.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Christmas-Carol-Sterling-Unabridged-Classics/dp/1402766904?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=d02fee44fdecf340758e841faf99b123&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Girl with the Dragon Tattoo",//401
            bookAuthor: "Stieg Larsson", bookPage:"480", bookPrice:"$13.74", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Girl-Dragon-Tattoo-Millennium/dp/0857054031?_encoding=UTF8&qid=1652776438&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=9a208baa604a6df5657cd25dd6f62976&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Deception Point",//402
            bookAuthor: "Dan Brown", bookPage:"576", bookPrice:"$10.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0671027387?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=1839dc4d61d6aff489ce693bad3a953a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Where We Going, Daddy? Life with Two Sons Unlike Any Other",//403
            bookAuthor: "Jean-Louis Fournier", bookPage:"128", bookPrice:"$9.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/159051338X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=803c60ddbbbd91580e58830404fe97ca&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Little Life",//404
            bookAuthor: "Hanya Yanagihara", bookPage:"832", bookPrice:"$12.32", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Little-Life-Hanya-Yanagihara/dp/0804172706?crid=BD8D6867E8SS&keywords=A+Little+Life&qid=1652793635&s=books&sprefix=a+little+life,stripbooks,128&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=f2108198d8965b70b1ebe4f30c501d97&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"They Both Die at the End",//405
            bookAuthor: "Adam Silvera", bookPage:"416", bookPrice:"$8.37", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/They-Both-Die-at-End/dp/0062457802?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=f1716c5f062daaa2afc92e6ddf1e2f2f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"It Ends with Us",//406
            bookAuthor: "Colleen Hoover", bookPage:"384", bookPrice:"$10.80", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Ends-Us-Novel-Colleen-Hoover/dp/1501110365?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=7e25de98ba8ae3cb2213b85b8dc19edf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Seven Husbands of Evelyn Hugo",//407
            bookAuthor: "Taylor Jenkins Reid", bookPage:"400", bookPrice:"$9.42", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Seven-Husbands-Evelyn-Hugo-Novel/dp/1501161938?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=c2a56d6ae1034e903e87842020af7125&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"On the Heights of Despair",//408
            bookAuthor: "Emil M. Cioran", bookPage:"150", bookPrice:"$29.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Heights-Despair-M-Cioran/dp/0226106713?crid=3JKJ921BAUG7Y&keywords=On+the+Heights+of+Despair&qid=1652794929&s=books&sprefix=on+the+heights+of+despair,stripbooks-intl-ship,185&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=5dc8b67842a9bc2f3405a4b63db996b0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Tears and Saints",//409
            bookAuthor: "Emil M. Cioran", bookPage:"154", bookPrice:"$23.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0226106748?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=d72e080d0410aa731a46f31e3e32dde8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"A Simple Heart",//410
            bookAuthor: "Gustave Flaubert", bookPage:"68", bookPrice:"$11.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0811213188?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=ff42902ff7726b79dda57c56f53e1f1a&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sense of an Ending",//411
            bookAuthor: "Julian Barnes", bookPage:"160", bookPrice:"$6.07", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sense-Ending-Julian-Barnes/dp/0307360822?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=d50125d49edc0e5e240076ba57e59396&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Woman in the Dunes",//412
            bookAuthor: "Kōbō Abe", bookPage:"256", bookPrice:"$11.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0679733787?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=6312208dac3d8211566fb91c02f4cd34&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sound of Waves",//413
            bookAuthor: "Yukio Mishima", bookPage:"183", bookPrice:"$14.04", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0099289989?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=1bc5c922679d0f47292901b714d00374&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The House of the Spirits",//414
            bookAuthor: "Isabel Allende", bookPage:"448", bookPrice:"$7.83", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0553273914?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=332126ffd4ffa48791e3521b50a2dfa3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Halfway House",//415
            bookAuthor: "Guillermo Rosales", bookPage:"121", bookPrice:"$14.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Halfway-House-New-Directions-Paperbook/dp/0811218023?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=96bbd2b48259bc6470dd10edfcaaed8b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Chronicle of a Blood Merchant",//416
            bookAuthor: "Yu Hua", bookPage:"272", bookPrice:"$11.14", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Chronicle-Blood-Merchant-Yu-Hua/dp/1400031850?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=9ec9d2040c106de9a49a12e78785bd95&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Ballad of Reading Gaol",//417
            bookAuthor: "Oscar Wilde", bookPage:"64", bookPrice:"$3.65", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Ballad-Reading-Gaol-Oscar-Wilde-dp-1646793196/dp/1646793196?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=6d14c77e5f4413ff7d6b062d2d71a6cf&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Duino Elegies",//418
            bookAuthor: "Rainer Maria Rilke", bookPage:"204", bookPrice:"$13.97", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0393328848?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=9ecb40c8d8cce1b3ffb7cbfc6a654d2c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Crito",//419
            bookAuthor: "Plato", bookPage:"26", bookPrice:"$2.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Crito-Plato/dp/1629101508?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=c1561721a7df2ffa73bb3e4351484fd7&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Discourse on Method",//420
            bookAuthor: "René Descartes", bookPage:"58", bookPrice:"$8.50", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Discourse-Method-Hackett-Classics-Descartes-dp-0872204227/dp/0872204227?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=79c192f8896a745181eb0d2a3f1baca8&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Ethics",//421
            bookAuthor: "Baruch Spinoza", bookPage:"134", bookPrice:"$14.35", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140435719?ie=UTF8&linkCode=sl1&tag=78443782665-20&linkId=eae56ef81da71ca1d32a13f52cb4e26c&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Human, All Too Human",//422
            bookAuthor: "Friedrich Nietzsche", bookPage:"304", bookPrice:"$14.52", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140446176?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=8aa89b377d9746e5c5649f632a7c72f6&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Order of Things: An Archaeology of the Human Sciences",//423
            bookAuthor: "Michel Foucault", bookPage:"416", bookPrice:"$15.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Order-Things-Archaeology-Human-Sciences-dp-0679753354/dp/0679753354?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=d2fe7d146669eaf6c631bd968db96eb4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Discipline and Punish: The Birth of the Prison",//424
            bookAuthor: "Michel Foucault", bookPage:"354", bookPrice:"$9.43", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Discipline-Punish-Prison-Michel-Foucault-ebook/dp/B007OLYO7I?_encoding=UTF8&qid=&sr=&linkCode=ll1&tag=78443782665-20&linkId=02f1cd5e70d98f838c380da74c9780d9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Sickness unto Death",//425
            bookAuthor: "Søren Kierkegaard", bookPage:"192", bookPrice:"$14.24", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Sickness-unto-Death-Psychological-Anti-Climacus-dp-0140445331/dp/0140445331?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=f2070f6b41da21a5c4796fe0773d0da5&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"This Is Not a Pipe",//426
            bookAuthor: "Michel Foucault", bookPage:"104", bookPrice:"$16.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/This-Not-Pipe-Quantum-Books-dp-0520236947/dp/0520236947?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=a121921a63e5e8836fef2d9b1ac63075&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Society of the Spectacle",//427
            bookAuthor: "Guy Debord", bookPage:"160", bookPrice:"$11.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0942299795?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=d22ceafd97a262c4477ccf85398caac4&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Birth of Tragedy",//428
            bookAuthor: "Friedrich Nietzsche", bookPage:"160", bookPrice:"$11.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140433392?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=cc7883380cb0992c3bb587850b66812e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Schopenhauer as Educator",//429
            bookAuthor: "Friedrich Nietzsche", bookPage:"80", bookPrice:"$9.85", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1409941671?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=8f3c45b8a165a1deb558f18fe1b9f7d1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Words",//430
            bookAuthor: "Jean-Paul Sartre", bookPage:"160", bookPrice:"$15.43", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Penguin-Modern-Classics-Jean-Paul-Sartre/dp/0141183462?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=c01229d18926467037663d5263662872&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Existentialism is a Humanism",//431
            bookAuthor: "Jean-Paul Sartre", bookPage:"108", bookPrice:"$8.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0300115466?ie=UTF8&linkCode=sl1&tag=78443782665-20&linkId=44048c260ddbeb776f1129446ba05538&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Fear and Trembling",//432
            bookAuthor: "Søren Kierkegaard", bookPage:"98", bookPrice:"$5.00", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Fear-Trembling-Soren-Kierkegaard/dp/1731702302?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=c0e772decb2eb0803fe5c3ad767e2f70&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Deep Work: Rules for Focused Success in a Distracted World",//433
            bookAuthor: "Cal Newport", bookPage:"304", bookPrice:"$14.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1455586692?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=3e3c98ca559b52550739c19d75d09b63&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Richest Man in Babylon",//434
            bookAuthor: "George S. Clason", bookPage:"105", bookPrice:"$3.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Richest-Man-Babylon-Notes-Review/dp/B09PW8L85V?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=06d4484d7d1224183c7a136ff0ac2924&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century",//435
            bookAuthor: "Napoleon Hill", bookPage:"320", bookPrice:"$7.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1585424331?ie=UTF8&linkCode=sl1&tag=78443782665-20&linkId=92a0c236ef2a95eab24094aa24a113e3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Power of Habit: Why We Do What We Do in Life and Business",//436
            bookAuthor: "Charles Duhigg", bookPage:"416", bookPrice:"$10.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=9d7471ab57234bccf454162f6f35e885&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change",//437
            bookAuthor: "Stephen R. Covey", bookPage:"464", bookPrice:"$12.26", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274?crid=2SMYX6VQAWZNS&keywords=The+7+Habits+of+Highly+Effective+People&qid=1652945918&s=books&sprefix=the+7+habits+of+highly+effective+people,stripbooks-intl-ship,172&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=7e5537de23e99190b8ad9584ba83b663&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Thinking, Fast and Slow",//438
            bookAuthor: "Daniel Kahneman", bookPage:"499", bookPrice:"$11.29", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=dfd80cf01bd336d1caaa95898908a584&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Man's Search for Himself",//439
            bookAuthor: "Rollo May", bookPage:"224", bookPrice:"$14.79", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Mans-Search-Himself-Rollo-May/dp/0393333159?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=a59618ebad1af3bb32df08edab660fe3&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",//440
            bookAuthor: "Bessel van der Kolk", bookPage:"464", bookPrice:"$11.40", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=097cdeea807abb5ee5aef752561063f9&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Neurotic Personality of Our Time",//441
            bookAuthor: "Karen Horney", bookPage:"256", bookPrice:"$18.56", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0393310973?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=sl1&tag=78443782665-20&linkId=dfc762b8f6e512babaf41ba45dfb5095&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Existential Psychotherapy",//442
            bookAuthor: "Irvin D. Yalom", bookPage:"544", bookPrice:"$52.59", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Existential-Psychotherapy-Irvin-D-Yalom/dp/0465021476?crid=372SNA9T35YT4&keywords=Existential+Psychotherapy&qid=1652959729&s=books&sprefix=existential+psychotherapy+,stripbooks-intl-ship,177&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=0224e1659dc27de6feb9b25857934153&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Jungle",//443
            bookAuthor: "Upton Sinclair", bookPage:"206", bookPrice:"$12.81", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Jungle-Upton-Sinclair-dp-1680921916/dp/1680921916?_encoding=UTF8&me=&qid=&linkCode=ll1&tag=78443782665-20&linkId=8c43c347106a6f1e565e83e77699f867&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Children of the Days: A Calendar of Human History",//444
            bookAuthor: "Eduardo Galeano", bookPage:"448", bookPrice:"$18.07", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Children-Days-Calendar-Human-History/dp/0141975989?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=a577ffe6d79ee1006f2213b83398f63f&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Remains of the Day",//445
            bookAuthor: "Kazuo Ishiguro", bookPage:"245", bookPrice:"$8.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Remains-Day-Kazuo-Ishiguro/dp/0679731725?keywords=The+Remains+of+the+Day&qid=1652960719&s=books&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=a48fb5e98ac6606dc5bb842114d4270e&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Doppler",//446
            bookAuthor: "Erlend Loe", bookPage:"192", bookPrice:"$6.60", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/1770893008?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=e7f7847c05338444894a92d1a0231a92&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Hear the Wind Sing",//447
            bookAuthor: "Haruki Murakami", bookPage:"130", bookPrice:"$13.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wind-Pinball-Novels-Vintage-International/dp/0804170142/ref=sr_1_1?crid=3736HTL1Z2GYI&keywords=Hear+The+wind+sing&qid=1653288776&s=books&sprefix=hear+the+wind+sin%2Cstripbooks-intl-ship%2C176&sr=1-1",
        },
        {
            bookName:"What I Talk About When I Talk About Running",//448
            bookAuthor: "Haruki Murakami", bookPage:"192", bookPrice:"$10.22", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/What-Talk-About-When-Running/dp/0307389839?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=80a9b9f1a2551b1ac29caf164102ce16&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"After Dark",//449
            bookAuthor: "Haruki Murakami", bookPage:"256", bookPrice:"$15.94", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/After-Vintage-International-Haruki-Murakami/dp/0307278735?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=65fb59b3cf1245bceaf54cc3f1e01c78&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Hard-Boiled Wonderland and the End of the World",//450
            bookAuthor: "Haruki Murakami", bookPage:"416", bookPrice:"$14.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Hard-Boiled-Wonderland-End-World-International/dp/0679743464?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=7358542229b7bdb82b21d65f3d9bf7a1&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Wind-Up Bird Chronicle",//451
            bookAuthor: "Haruki Murakami", bookPage:"607", bookPrice:"$15.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Wind-Up-Bird-Chronicle-Novel/dp/0679775439?crid=ORO6R2JCLF37&keywords=The+Wind-Up+Bird+Chronicle&qid=1653289050&s=books&sprefix=the+wind-up+bird+chronicle,stripbooks-intl-ship,177&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=a3a3f6db69bd38a3ca010d40249d38eb&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Men Without Women",//452
            bookAuthor: "Haruki Murakami", bookPage:"240", bookPrice:"$10.49", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Men-Without-Women-Stories-International/dp/1101974524?crid=OBW9Q7VULSS4&keywords=man+without+women&qid=1653289151&s=books&sprefix=men+without+women,stripbooks-intl-ship,177&sr=1-1&linkCode=sl1&tag=78443782665-20&linkId=47d4b2e8fe66dd08b7eb8b3740160d86&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Colorless Tsukuru Tazaki and His Years of Pilgrimage",//453
            bookAuthor: "Haruki Murakami", bookPage:"336", bookPrice:"$12.19", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Colorless-Tsukuru-Tazaki-Years-Pilgrimage/dp/0804170126?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=84eab274e08e84aa022f804eca5692ad&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Killing Commendatore",//454
            bookAuthor: "Haruki Murakami", bookPage:"752", bookPrice:"$15.82", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Killing-Commendatore-novel-Haruki-Murakami/dp/052543576X?crid=DIHAC0X1SH4&keywords=Killing+Commendatore&qid=1653289462&s=books&sprefix=killing+commendatore%2Cstripbooks-intl-ship%2C172&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=8a08de2d2be98f86cecd0a115959959b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Demian",//455
            bookAuthor: "Hermann Hesse", bookPage:"176", bookPrice:"$11.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0060931914?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=a1d3ac3755334d73d03bd4abea133f53&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"To the Lighthouse",//456
            bookAuthor: "Virginia Woolf", bookPage:"209", bookPrice:"$10.26", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Lighthouse-Virginia-Woolf/dp/0156907399?adid=082VK13VJJCZTQYGWWCZ&campaign=211041&keywords=To+the+Lighthouse&qid=1653290067&s=books&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=78af8ca777c3a19fef90c82861bf9851&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Art of War",//457
            bookAuthor: "Sun Tzu", bookPage:"68", bookPrice:"$4.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Art-War-Sun-Tzu/dp/1599869772?crid=BPYN4UPJPR7N&keywords=the+art+of+war&qid=1653290636&s=books&sprefix=the+art+of+war%2Cstripbooks-intl-ship%2C213&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=ef1007fe2c3f44c4878ffa97a89ff2ba&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Prince",//458
            bookAuthor: "Niccolò Machiavelli", bookPage:"114", bookPrice:"$7.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Prince-Niccol%C3%B2-Machiavelli/dp/B08WZHBPW6?crid=2UBNSP6D2LNV0&keywords=the+prince+machiavelli&qid=1653290894&s=books&sprefix=The+prince%2Cstripbooks-intl-ship%2C222&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=6a2bf1c31bd97f02a2503a10536a267d&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Pleasures and Days",//459
            bookAuthor: "Marcel Proust", bookPage:"194", bookPrice:"$4.23", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/184391090X?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=533689931fa76f09f456810fd84cf9c0&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Waiting for the Barbarians",//460
            bookAuthor: "J.M. Coetzee", bookPage:"152", bookPrice:"$16.53", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0140283358?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=225b1de27648689df585ebf853779bf2&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"The Fixer",//461
            bookAuthor: "Bernard Malamud", bookPage:"352", bookPrice:"$9.99", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/gp/product/0374529388?ie=UTF8&SubscriptionId=1MGPYB6YW3HWK55XCGG2&linkCode=ll1&tag=78443782665-20&linkId=4eb2c3c7d5163ee9e9e177e443e96292&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Foam Of The Daze",//462
            bookAuthor: "Boris Vian", bookPage:"262", bookPrice:"$10.16", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Foam-Daze-Lecume-Boris-Vian/dp/0966234634?crid=17IUTECD1E6P&keywords=Foam+of+the+Daze&qid=1653468345&s=books&sprefix=froth+on+the+daydream%2Cstripbooks-intl-ship%2C367&sr=1-1&linkCode=ll1&tag=78443782665-20&linkId=25f2f85f6016e5892be2e01456c7eb8b&language=en_US&ref_=as_li_ss_tl",
        },
        {
            bookName:"Children of the Alley",//463
            bookAuthor: "Naguib Mahfouz", bookPage:"464", bookPrice:"$17.95", bookPoint:0, isWrite:false, bookLink:"https://www.amazon.com/Children-Alley-Novel-Naguib-Mahfouz/dp/0385264739?_encoding=UTF8&qid=&sr=&linkCode=sl1&tag=78443782665-20&linkId=34768c66de6d7002ef8055e09508d99c&language=en_US&ref_=as_li_ss_tl",
        },
        /*{
            bookName:"",
            bookAuthor: "", bookPage:"176", bookPrice:"$11.99", bookPoint:0, isWrite:false, bookLink:"",
        },*/
        
    ]
}

var suggestNumber = 0;
var sayi = 0;
var kitapGir= document.getElementById('kitaplar');
var puanGir=document.getElementById("enterPoint")
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        addBook();
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        addBook();
    }
    searchWrapper.classList.remove("active");
}



function addBook(){
    $(".icon").click(function (e) { 
        e.preventDefault();
        for (let i = 0; i < books.books.length; i++) {
            if(($("#giris").val())==books.books[i].bookName){
                if(books.books[i].isWrite==true){
                $("#giris").val("");  
                alert("This book is already added.");
                break;
                } else{
                    $("#giris").val("");
                    books.books[i].isWrite=true;
                    kitapGir.innerHTML+="<tr><td>"+(sayi+=1)+"</td><td class='bookname'>"+books.books[i].bookName+"</td><td>"+books.books[i].bookAuthor+"</td><td>"+books.books[i].bookPage+"</td><td>"+books.books[i].bookPrice+"</td><td><a href='"+books.books[i].bookLink+"' target='_blank'><button class='btn btn-success buyBook'>Buy</button></a></td></tr>";
                    switch (i) {
                        case 0:
                            books.books[1].bookPoint++;
                            books.books[2].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[4].bookPoint++;
                            books.books[5].bookPoint++;
                            books.books[6].bookPoint++;
                            break;
                        case 1:
                            books.books[8].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[4].bookPoint++;
                            books.books[10].bookPoint++;
                            books.books[11].bookPoint++;
                            books.books[9].bookPoint++;
                            break;
                        case 2:
                            books.books[9].bookPoint++;
                            books.books[12].bookPoint++;
                            books.books[11].bookPoint++;
                            books.books[8].bookPoint++;
                            books.books[13].bookPoint++;
                            books.books[4].bookPoint++;
                            break;
                        case 3:
                            books.books[9].bookPoint++;
                            books.books[8].bookPoint++;
                            books.books[14].bookPoint++;
                            books.books[10].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[1].bookPoint++;
                            break;
                        case 4:   
                            books.books[9].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[12].bookPoint++;
                            books.books[17].bookPoint++;
                            books.books[18].bookPoint++;  
                            break; 
                        case 5: 
                            books.books[9].bookPoint++;
                            books.books[13].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[4].bookPoint++;
                            books.books[11].bookPoint++;
                            books.books[8].bookPoint++;     
                            break;
                        case 6:
                            books.books[2].bookPoint++;
                            books.books[7].bookPoint++;
                            books.books[13].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[5].bookPoint++;
                            books.books[1].bookPoint++;  
                            break;  
                        case 7:
                            books.books[6].bookPoint++;
                            books.books[4].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[19].bookPoint++;
                            books.books[11].bookPoint++;
                            books.books[20].bookPoint++;    
                            break;
                        case 8:     
                            books.books[21].bookPoint++;
                            books.books[22].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[14].bookPoint++;
                            books.books[1].bookPoint++;
                            books.books[3].bookPoint++;    
                            break;      
                        case 9:     
                            books.books[15].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[11].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[24].bookPoint++;
                            books.books[25].bookPoint++;    
                            break;
                        case 10:
                            books.books[22].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[14].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[8].bookPoint++;    
                            break;
                        case 11:   
                            books.books[9].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[24].bookPoint++;
                            books.books[12].bookPoint++;
                            break;
                        case 12:
                            books.books[23].bookPoint++;
                            books.books[26].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[24].bookPoint++;
                            books.books[9].bookPoint++;
                            break;
                        case 13:
                            books.books[12].bookPoint++;
                            books.books[11].bookPoint++;
                            books.books[26].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[2].bookPoint++;
                            books.books[9].bookPoint++;
                            break;
                        case 14:
                            books.books[16].bookPoint++;
                            books.books[21].bookPoint++;
                            books.books[27].bookPoint++;
                            books.books[8].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[10].bookPoint++;
                            break;
                        case 15:
                            books.books[16].bookPoint++;
                            books.books[26].bookPoint++;
                            books.books[27].bookPoint++;
                            books.books[28].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[29].bookPoint++;
                            break;
                        case 16:
                            books.books[28].bookPoint++;
                            books.books[30].bookPoint++;
                            books.books[31].bookPoint++;
                            books.books[22].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[32].bookPoint++;
                            break;
                        case 17:
                            books.books[31].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[24].bookPoint++;
                            books.books[25].bookPoint++;
                            books.books[16].bookPoint++;
                            break;
                        case 18:
                            books.books[22].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[35].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[26].bookPoint++;
                            books.books[16].bookPoint++;
                            break;
                        case 19:
                            books.books[37].bookPoint++;
                            books.books[22].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[17].bookPoint++;
                            break;
                        case 20:
                            books.books[36].bookPoint++;
                            books.books[25].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[12].bookPoint++;
                            books.books[9].bookPoint++;
                            break;
                        case 21:
                            books.books[22].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[8].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[10].bookPoint++;
                            books.books[9].bookPoint++;
                            break;
                        case 22:
                            books.books[10].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[3].bookPoint++;
                            books.books[8].bookPoint++;
                            books.books[15].bookPoint++;
                            break;
                        case 23:
                            books.books[38].bookPoint++;
                            books.books[31].bookPoint++;
                            books.books[26].bookPoint++;
                            books.books[29].bookPoint++;
                            books.books[17].bookPoint++;
                            books.books[39].bookPoint++;
                            break;
                        case 24:
                            books.books[40].bookPoint++;
                            books.books[25].bookPoint++;
                            books.books[28].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[17].bookPoint++;
                            books.books[23].bookPoint++;
                            break;
                        case 25 :
                            books.books[31].bookPoint++;
                            books.books[17].bookPoint++;
                            books.books[24].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[41].bookPoint++;
                            break;
                        case 26 :
                            books.books[31].bookPoint++;
                            books.books[42].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[29].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[12].bookPoint++;
                            break;
                        case 27 :
                            books.books[43].bookPoint++;
                            books.books[44].bookPoint++;
                            books.books[45].bookPoint++;
                            books.books[45].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[15].bookPoint++;
                            break;
                        case 28 :
                            books.books[31].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[41].bookPoint++;
                            books.books[30].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[27].bookPoint++;
                            break;
                        case 29 :
                            books.books[47].bookPoint++;
                            books.books[35].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[36].bookPoint++;
                            books.books[32].bookPoint++;
                            break;
                        case 30 :
                            books.books[50].bookPoint++;
                            books.books[49].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[31].bookPoint++;
                            break;
                        case 31 :
                            books.books[16].bookPoint++;
                            books.books[51].bookPoint++;
                            books.books[52].bookPoint++;
                            books.books[53].bookPoint++;
                            books.books[54].bookPoint++;
                            books.books[55].bookPoint++;
                            break;
                        case 32 :
                            books.books[66].bookPoint++;
                            books.books[57].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[27].bookPoint++;
                            books.books[29].bookPoint++;
                            break;
                        case 33 :
                            books.books[52].bookPoint++;
                            books.books[57].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[61].bookPoint++;
                            break;
                        case 34 :
                            books.books[39].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[28].bookPoint++;
                            books.books[29].bookPoint++;
                            books.books[49].bookPoint++;
                            break;
                        case 35 :
                            books.books[30].bookPoint++;
                            books.books[36].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[12].bookPoint++;
                            books.books[49].bookPoint++;
                            break;
                        case 36 :
                            books.books[47].bookPoint++;
                            books.books[49].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[39].bookPoint++;
                            books.books[56].bookPoint++;
                            books.books[12].bookPoint++;
                            break;
                        case 37 :
                            books.books[19].bookPoint++;
                            books.books[4].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[12].bookPoint++;
                            books.books[62].bookPoint++;
                            books.books[63].bookPoint++;
                            break;
                        case 38 :
                            books.books[60].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[51].bookPoint++;
                            books.books[15].bookPoint++;
                            books.books[42].bookPoint++;
                            books.books[29].bookPoint++;
                            break;
                        case 39 :
                            books.books[29].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[64].bookPoint++;
                            break;
                        case 40 :
                            books.books[65].bookPoint++;
                            books.books[66].bookPoint++;
                            books.books[67].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[60].bookPoint++;
                            break;
                        case 41 :
                            books.books[33].bookPoint++;
                            books.books[28].bookPoint++;
                            books.books[30].bookPoint++;
                            books.books[37].bookPoint++;
                            books.books[68].bookPoint++;
                            books.books[31].bookPoint++;
                            break;
                        case 42 :
                            books.books[48].bookPoint++;
                            books.books[51].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[39].bookPoint++;
                            break;
                        case 43 :
                            books.books[27].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[69].bookPoint++;
                            books.books[70].bookPoint++;
                            books.books[71].bookPoint++;
                            books.books[51].bookPoint++;
                            break;
                        case 44 :
                            books.books[27].bookPoint++;
                            books.books[72].bookPoint++;
                            books.books[73].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[53].bookPoint++;
                            books.books[60].bookPoint++;
                            break;
                        case 45 :
                            books.books[74].bookPoint++;
                            books.books[75].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[77].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[38].bookPoint++;
                            break;
                        case 46 :
                            books.books[78].bookPoint++;
                            books.books[79].bookPoint++;
                            books.books[80].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[82].bookPoint++;
                            books.books[83].bookPoint++;
                            break;
                        case 47 :
                            books.books[84].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[29].bookPoint++;
                            books.books[53].bookPoint++;
                            books.books[42].bookPoint++;
                            books.books[34].bookPoint++;
                            break;
                        case 48 :
                            books.books[60].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[52].bookPoint++;
                            break;
                        case 49 :
                            books.books[64].bookPoint++;
                            books.books[85].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[57].bookPoint++;
                            break;
                        case 50 :
                            books.books[51].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[57].bookPoint++;
                            break;
                        case 51 :
                            books.books[86].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[87].bookPoint++;
                            books.books[88].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[71].bookPoint++;
                            break;
                        case 52 :
                            books.books[89].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[57].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[58].bookPoint++;
                            break;
                        case 53 :
                            books.books[90].bookPoint++;
                            books.books[91].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            break;
                        case 54 :
                            books.books[60].bookPoint++;
                            books.books[89].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[92].bookPoint++;
                            books.books[57].bookPoint++;
                            books.books[31].bookPoint++;
                            break;
                        case 55 :
                            books.books[41].bookPoint++;
                            books.books[28].bookPoint++;
                            books.books[94].bookPoint++;
                            books.books[93].bookPoint++;
                            books.books[86].bookPoint++;
                            books.books[51].bookPoint++;
                            break;
                        case 56 :
                            books.books[95].bookPoint++;
                            books.books[67].bookPoint++;
                            books.books[69].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[40].bookPoint++;
                            break;
                        case 57 :
                            books.books[58].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[69].bookPoint++;
                            books.books[52].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[33].bookPoint++;
                            break;
                        case 58 :
                            books.books[96].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[52].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[57].bookPoint++;
                            books.books[33].bookPoint++;
                            break;
                        case 59 :
                            books.books[60].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[52].bookPoint++;
                            books.books[31].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[97].bookPoint++;
                            break;
                        case 60 :
                            books.books[98].bookPoint++;
                            books.books[99].bookPoint++;
                            books.books[100].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[88].bookPoint++;
                            break;
                        case 61 :
                            books.books[33].bookPoint++;
                            books.books[49].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[31].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[64].bookPoint++;
                            break;
                        case 62 :
                            books.books[36].bookPoint++;
                            books.books[29].bookPoint++;
                            books.books[28].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[23].bookPoint++;
                            books.books[102].bookPoint++;
                            break;
                        case 63 :
                            books.books[16].bookPoint++;
                            books.books[36].bookPoint++;
                            books.books[12].bookPoint++;
                            books.books[4].bookPoint++;
                            books.books[103].bookPoint++;
                            books.books[16].bookPoint++;
                            break;
                        case 64 :
                            books.books[33].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[49].bookPoint++;
                            books.books[102].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[104].bookPoint++;
                            break;
                        case 65 :
                            books.books[105].bookPoint++;
                            books.books[106].bookPoint++;
                            books.books[107].bookPoint++;
                            books.books[108].bookPoint++;
                            books.books[66].bookPoint++;
                            books.books[74].bookPoint++;
                            break;
                        case 66 :
                            books.books[74].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[40].bookPoint++;
                            books.books[108].bookPoint++;
                            books.books[70].bookPoint++;
                            books.books[90].bookPoint++;
                            break;
                        case 67 :
                            books.books[56].bookPoint++;
                            books.books[106].bookPoint++;
                            books.books[86].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[109].bookPoint++;
                            books.books[110].bookPoint++;
                            break;
                        case 68 :
                            books.books[59].bookPoint++;
                            books.books[95].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[111].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[112].bookPoint++;
                            break;
                        case 69 :
                            books.books[113].bookPoint++;
                            books.books[114].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[116].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[105].bookPoint++;
                            break;
                        case 70 :
                            books.books[105].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[118].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[53].bookPoint++;
                            break;
                        case 71 :
                            books.books[119].bookPoint++;
                            books.books[120].bookPoint++;
                            books.books[121].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[105].bookPoint++;
                            break;
                        case 72 :
                            books.books[122].bookPoint++;
                            books.books[123].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[44].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[27].bookPoint++;
                            break;
                        case 73 :
                            books.books[125].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[126].bookPoint++;
                            books.books[127].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[72].bookPoint++;
                            break;
                        case 74 :
                            books.books[121].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[128].bookPoint++;
                            break;
                        case 75 :
                            books.books[74].bookPoint++;
                            books.books[45].bookPoint++;
                            books.books[77].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[129].bookPoint++;
                            break;
                        case 76 :
                            books.books[74].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[131].bookPoint++;
                            books.books[132].bookPoint++;
                            books.books[133].bookPoint++;
                            books.books[134].bookPoint++;
                            break;
                        case 77 :
                            books.books[136].bookPoint++;
                            books.books[137].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[45].bookPoint++;
                            books.books[75].bookPoint++;
                            books.books[114].bookPoint++;
                            break;
                        case 78 :
                            books.books[46].bookPoint++;
                            books.books[79].bookPoint++;
                            books.books[80].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[82].bookPoint++;
                            books.books[83].bookPoint++;
                            break;
                        case 79 :
                            books.books[46].bookPoint++;
                            books.books[78].bookPoint++;
                            books.books[80].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[82].bookPoint++;
                            books.books[83].bookPoint++;
                            break;
                        case 80 :
                            books.books[46].bookPoint++;
                            books.books[78].bookPoint++;
                            books.books[79].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[82].bookPoint++;
                            books.books[83].bookPoint++;
                            break;
                        case 81 :
                            books.books[46].bookPoint++;
                            books.books[78].bookPoint++;
                            books.books[79].bookPoint++;
                            books.books[80].bookPoint++;
                            books.books[82].bookPoint++;
                            books.books[83].bookPoint++;
                            break;
                        case 82 :
                            books.books[46].bookPoint++;
                            books.books[78].bookPoint++;
                            books.books[79].bookPoint++;
                            books.books[80].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[83].bookPoint++;
                            break;
                        case 83 :
                            books.books[79].bookPoint++;
                            books.books[80].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[82].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[27].bookPoint++;
                            break;
                        case 84 :
                            books.books[87].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[71].bookPoint++;
                            books.books[101].bookPoint++;
                            break;
                        case 85 :
                            books.books[117].bookPoint++;
                            books.books[71].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[69].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[138].bookPoint++;
                            break;
                        case 86 :
                            books.books[139].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[142].bookPoint++;
                            books.books[143].bookPoint++;
                            books.books[93].bookPoint++;
                            break;
                        case 87 :
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[99].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[88].bookPoint++;
                            break;
                        case 88 :
                            books.books[146].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[87].bookPoint++;
                            books.books[92].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[143].bookPoint++;
                            break;
                        case 89 :
                            books.books[147].bookPoint++;
                            books.books[148].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[149].bookPoint++;
                            break;
                        case 90 :
                            books.books[74].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[53].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[150].bookPoint++;
                            books.books[151].bookPoint++;
                            break;
                        case 91 :
                            books.books[74].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[87].bookPoint++;
                            books.books[88].bookPoint++;
                            books.books[92].bookPoint++;
                            books.books[101].bookPoint++;
                            break;
                        case 92 :
                            books.books[74].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[88].bookPoint++;
                            books.books[86].bookPoint++;
                            books.books[51].bookPoint++;
                            books.books[143].bookPoint++;
                            break;
                        case 93 :
                            books.books[86].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[55].bookPoint++;
                            books.books[94].bookPoint++;
                            books.books[41].bookPoint++;
                            books.books[143].bookPoint++;
                            break;
                        case 94 :
                            books.books[93].bookPoint++;
                            books.books[55].bookPoint++;
                            books.books[41].bookPoint++;
                            books.books[51].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[28].bookPoint++;
                            break;
                        case 95 :
                            books.books[152].bookPoint++;
                            books.books[153].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[143].bookPoint++;
                            books.books[109].bookPoint++;
                            books.books[112].bookPoint++;
                            break;
                        case 96 :
                            books.books[154].bookPoint++;
                            books.books[155].bookPoint++;
                            books.books[156].bookPoint++;
                            books.books[147].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[59].bookPoint++;
                            break;
                        case 97 :
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[157].bookPoint++;
                            books.books[114].bookPoint++;
                            books.books[111].bookPoint++;
                            break;
                        case 98 :
                            books.books[60].bookPoint++;
                            books.books[99].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[88].bookPoint++;
                            break;
                        case 99 :
                            books.books[87].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[98].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[158].bookPoint++;
                            break;
                        case 100 :
                            books.books[120].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[143].bookPoint++;
                            books.books[121].bookPoint++;
                            break;
                        case 101 :
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[98].bookPoint++;
                            books.books[99].bookPoint++;
                            books.books[87].bookPoint++;
                            break;
                            case 102 :
                            books.books[31].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[33].bookPoint++;
                            books.books[61].bookPoint++;
                            books.books[104].bookPoint++;
                            books.books[66].bookPoint++;
                            break;
                        case 103 :
                            books.books[63].bookPoint++;
                            books.books[16].bookPoint++;
                            books.books[26].bookPoint++;
                            books.books[9].bookPoint++;
                            books.books[32].bookPoint++;
                            books.books[18].bookPoint++;
                            break;
                        case 104 :
                            books.books[60].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[51].bookPoint++;
                            books.books[160].bookPoint++;
                            break;
                        case 105 :
                            books.books[74].bookPoint++;
                            books.books[150].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[161].bookPoint++;
                            books.books[142].bookPoint++;
                            break;
                        case 106 :
                            books.books[141].bookPoint++;
                            books.books[162].bookPoint++;
                            books.books[163].bookPoint++;
                            books.books[164].bookPoint++;
                            books.books[110].bookPoint++;
                            books.books[117].bookPoint++;
                            break;
                        case 107 :
                            books.books[105].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[165].bookPoint++;
                            books.books[166].bookPoint++;
                            books.books[167].bookPoint++;
                            break;
                        case 108 :
                            books.books[74].bookPoint++;
                            books.books[114].bookPoint++;
                            books.books[168].bookPoint++;
                            books.books[169].bookPoint++;
                            books.books[170].bookPoint++;
                            books.books[115].bookPoint++;
                            break;
                        case 109 :
                            books.books[163].bookPoint++;
                            books.books[164].bookPoint++;
                            books.books[165].bookPoint++;
                            books.books[110].bookPoint++;
                            books.books[171].bookPoint++;
                            books.books[141].bookPoint++;
                            break;
                        case 110 :
                            books.books[109].bookPoint++;
                            books.books[163].bookPoint++;
                            books.books[164].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[139].bookPoint++;
                            break;
                        case 111 :
                            books.books[145].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[97].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[157].bookPoint++;
                            break;
                        case 112 :
                            books.books[110].bookPoint++;
                            books.books[100].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[109].bookPoint++;
                            books.books[172].bookPoint++;
                            books.books[173].bookPoint++;
                            break;
                        case 113 :
                            books.books[74].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[175].bookPoint++;
                            books.books[176].bookPoint++;
                            break;
                        case 114 :
                            books.books[105].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[160].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[118].bookPoint++;
                            break;
                        case 115 :
                            books.books[105].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[175].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[178].bookPoint++;
                            break;
                        case 116 :
                            books.books[155].bookPoint++;
                            books.books[179].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[181].bookPoint++;
                            books.books[182].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 117 :
                            books.books[156].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[58].bookPoint++;
                            books.books[52].bookPoint++;
                            books.books[114].bookPoint++;
                            break;
                        case 118 :
                            books.books[113].bookPoint++;
                            books.books[146].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[154].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[183].bookPoint++;
                            break;
                        case 119 :
                            books.books[184].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[47].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[185].bookPoint++;
                            break;
                        case 120 :
                            books.books[100].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[162].bookPoint++;
                            books.books[186].bookPoint++;
                            books.books[187].bookPoint++;
                            books.books[188].bookPoint++;
                            break;
                        case 121 :
                            books.books[161].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[38].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[189].bookPoint++;
                            books.books[190].bookPoint++;
                            break;
                        case 122 :
                            books.books[74].bookPoint++;
                            books.books[191].bookPoint++;
                            books.books[127].bookPoint++;
                            books.books[44].bookPoint++;
                            books.books[192].bookPoint++;
                            books.books[125].bookPoint++;
                            break;
                        case 123 :
                            books.books[193].bookPoint++;
                            books.books[194].bookPoint++;
                            books.books[195].bookPoint++;
                            books.books[196].bookPoint++;
                            books.books[197].bookPoint++;
                            books.books[198].bookPoint++;
                            break;
                        case 124 :
                            books.books[119].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[184].bookPoint++;
                            books.books[121].bookPoint++;
                            books.books[199].bookPoint++;
                            books.books[200].bookPoint++;
                            break;
                        case 125 :
                            books.books[73].bookPoint++;
                            books.books[191].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[199].bookPoint++;
                            books.books[201].bookPoint++;
                            break;
                        case 126 :
                            books.books[199].bookPoint++;
                            books.books[122].bookPoint++;
                            books.books[127].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[200].bookPoint++;
                            books.books[202].bookPoint++;
                            break;
                        case 127 :
                            books.books[122].bookPoint++;
                            books.books[126].bookPoint++;
                            books.books[199].bookPoint++;
                            books.books[44].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[125].bookPoint++;
                            break;
                        case 128 :
                            books.books[203].bookPoint++;
                            books.books[204].bookPoint++;
                            books.books[205].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[207].bookPoint++;
                            books.books[208].bookPoint++;
                            break;
                        case 129 :
                            books.books[169].bookPoint++;
                            books.books[209].bookPoint++;
                            books.books[210].bookPoint++;
                            books.books[211].bookPoint++;
                            books.books[212].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 130 :
                            books.books[213].bookPoint++;
                            books.books[214].bookPoint++;
                            books.books[215].bookPoint++;
                            books.books[216].bookPoint++;
                            books.books[217].bookPoint++;
                            books.books[76].bookPoint++;
                            break;
                        case 131 :
                            books.books[76].bookPoint++;
                            books.books[214].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[218].bookPoint++;
                            books.books[219].bookPoint++;
                            break;
                        case 132 :
                            books.books[133].bookPoint++;
                            books.books[134].bookPoint++;
                            books.books[135].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[220].bookPoint++;
                            break;
                        case 133 :
                            books.books[221].bookPoint++;
                            books.books[134].bookPoint++;
                            books.books[135].bookPoint++;
                            books.books[132].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[218].bookPoint++;
                            break;
                        case 134 :
                            books.books[221].bookPoint++;
                            books.books[133].bookPoint++;
                            books.books[135].bookPoint++;
                            books.books[132].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[218].bookPoint++;
                            break;
                        case 135 :
                            books.books[221].bookPoint++;
                            books.books[133].bookPoint++;
                            books.books[132].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[46].bookPoint++;
                            books.books[78].bookPoint++;
                            break;
                        case 136 :
                            books.books[60].bookPoint++;
                            books.books[45].bookPoint++;
                            books.books[75].bookPoint++;
                            books.books[77].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[51].bookPoint++;
                            break;
                        case 137 :
                            books.books[222].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[203].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[179].bookPoint++;
                            break;
                        case 138 :
                            books.books[163].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[69].bookPoint++;
                            books.books[147].bookPoint++;
                            books.books[222].bookPoint++;
                            break;
                        case 139 :
                            books.books[182].bookPoint++;
                            books.books[223].bookPoint++;
                            books.books[188].bookPoint++;
                            books.books[142].bookPoint++;
                            books.books[225].bookPoint++;
                            books.books[224].bookPoint++;
                            break;
                        case 140 :
                            books.books[141].bookPoint++;
                            books.books[142].bookPoint++;
                            books.books[86].bookPoint++;
                            books.books[182].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[188].bookPoint++;
                            break;
                        case 141 :
                            books.books[120].bookPoint++;
                            books.books[188].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[100].bookPoint++;
                            books.books[187].bookPoint++;
                            books.books[162].bookPoint++;
                            break;
                        case 142 :
                            books.books[182].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[188].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[224].bookPoint++;
                            books.books[225].bookPoint++;
                            break;
                        case 143 :
                            books.books[182].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[142].bookPoint++;
                            books.books[86].bookPoint++;
                            books.books[141].bookPoint++;
                            break;
                        case 144 :
                            books.books[86].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[55].bookPoint++;
                            books.books[94].bookPoint++;
                            books.books[41].bookPoint++;
                            books.books[143].bookPoint++;
                            break;
                        case 145 :
                            books.books[60].bookPoint++;
                            books.books[98].bookPoint++;
                            books.books[111].bookPoint++;
                            books.books[137].bookPoint++;
                            books.books[222].bookPoint++;
                            books.books[155].bookPoint++;
                            break;
                        case 146 :
                            books.books[206].bookPoint++;
                            books.books[211].bookPoint++;
                            books.books[155].bookPoint++;
                            books.books[208].bookPoint++;
                            books.books[226].bookPoint++;
                            books.books[88].bookPoint++;
                            break;
                        case 147 :
                            books.books[148].bookPoint++;
                            books.books[227].bookPoint++;
                            books.books[228].bookPoint++;
                            books.books[229].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[231].bookPoint++;
                            break;
                        case 148 :
                            books.books[228].bookPoint++;
                            books.books[147].bookPoint++;
                            books.books[228].bookPoint++;
                            books.books[232].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[231].bookPoint++;
                            break;
                        case 149 :
                            books.books[117].bookPoint++;
                            books.books[147].bookPoint++;
                            books.books[148].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[89].bookPoint++;
                            books.books[96].bookPoint++;
                            break;
                        case 150 :
                            books.books[74].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[233].bookPoint++;
                            break;
                        case 151 :
                            books.books[174].bookPoint++;
                            books.books[177].bookPoint++;
                            books.books[178].bookPoint++;
                            books.books[234].bookPoint++;
                            books.books[235].bookPoint++;
                            books.books[236].bookPoint++;
                            break;
                        case 152 :
                            books.books[237].bookPoint++;
                            books.books[238].bookPoint++;
                            books.books[239].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[163].bookPoint++;
                            books.books[164].bookPoint++;
                            break;
                        case 153 :
                            books.books[240].bookPoint++;
                            books.books[241].bookPoint++;
                            books.books[242].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[66].bookPoint++;
                            break;
                        case 154 :
                            books.books[180].bookPoint++;
                            books.books[232].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[156].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[227].bookPoint++;
                            break;
                        case 155 :
                            books.books[225].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[227].bookPoint++;
                            break;
                        case 156 :
                            books.books[243].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[244].bookPoint++;
                            books.books[232].bookPoint++;
                            break;
                        case 157 :
                            books.books[97].bookPoint++;
                            books.books[98].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[59].bookPoint++;
                            books.books[111].bookPoint++;
                            books.books[112].bookPoint++;
                            break;
                        case 158 :
                            books.books[245].bookPoint++;
                            books.books[246].bookPoint++;
                            books.books[247].bookPoint++;
                            books.books[248].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[200].bookPoint++;
                            break;
                        case 159 :
                            books.books[177].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[249].bookPoint++;
                            books.books[250].bookPoint++;
                            books.books[248].bookPoint++;
                            books.books[251].bookPoint++;
                            break;
                        case 160 :
                            books.books[60].bookPoint++;
                            books.books[114].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[88].bookPoint++;
                            books.books[87].bookPoint++;
                            books.books[252].bookPoint++;
                            break;
                        case 161 :
                            books.books[253].bookPoint++;
                            books.books[254].bookPoint++;
                            books.books[255].bookPoint++;
                            books.books[256].bookPoint++;
                            books.books[257].bookPoint++;
                            books.books[258].bookPoint++;
                            break;
                        case 162 :
                            books.books[187].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[120].bookPoint++;
                            books.books[155].bookPoint++;
                            books.books[225].bookPoint++;
                            books.books[100].bookPoint++;
                            break;
                        case 163 :
                            books.books[164].bookPoint++;
                            books.books[259].bookPoint++;
                            books.books[110].bookPoint++;
                            books.books[260].bookPoint++;
                            books.books[261].bookPoint++;
                            books.books[141].bookPoint++;
                            break;
                        case 164 :
                            books.books[163].bookPoint++;
                            books.books[259].bookPoint++;
                            books.books[110].bookPoint++;
                            books.books[261].bookPoint++;
                            books.books[165].bookPoint++;
                            books.books[141].bookPoint++;
                            break;
                        case 165 :
                            books.books[262].bookPoint++;
                            books.books[259].bookPoint++;
                            books.books[171].bookPoint++;
                            books.books[263].bookPoint++;
                            books.books[265].bookPoint++;
                            books.books[264].bookPoint++;
                            break;
                        case 166 :
                            books.books[259].bookPoint++;
                            books.books[266].bookPoint++;
                            books.books[265].bookPoint++;
                            books.books[239].bookPoint++;
                            books.books[109].bookPoint++;
                            books.books[260].bookPoint++;
                            break;
                        case 167 :
                            books.books[262].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[267].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[269].bookPoint++;
                            books.books[265].bookPoint++;
                            break;
                        case 168 :
                            books.books[176].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[270].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 169 :
                            books.books[105].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[271].bookPoint++;
                            books.books[129].bookPoint++;
                            books.books[114].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 170 :
                            books.books[272].bookPoint++;
                            books.books[273].bookPoint++;
                            books.books[274].bookPoint++;
                            books.books[275].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 171 :
                            books.books[165].bookPoint++;
                            books.books[276].bookPoint++;
                            books.books[264].bookPoint++;
                            books.books[106].bookPoint++;
                            books.books[255].bookPoint++;
                            books.books[259].bookPoint++;
                            break;
                        case 172 :
                            books.books[60].bookPoint++;
                            books.books[112].bookPoint++;
                            books.books[277].bookPoint++;
                            books.books[278].bookPoint++;
                            books.books[48].bookPoint++;
                            books.books[51].bookPoint++;
                            break;
                        case 173 :
                            books.books[110].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[109].bookPoint++;
                            books.books[143].bookPoint++;
                            books.books[95].bookPoint++;
                            books.books[112].bookPoint++;
                            break;
                        case 174 :
                            books.books[234].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[279].bookPoint++;
                            books.books[280].bookPoint++;
                            books.books[281].bookPoint++;
                            books.books[282].bookPoint++;
                            break;
                        case 175 :
                            books.books[283].bookPoint++;
                            books.books[284].bookPoint++;
                            books.books[285].bookPoint++;
                            books.books[286].bookPoint++;
                            books.books[115].bookPoint++;
                            books.books[258].bookPoint++;
                            break;
                        case 176 :
                            books.books[177].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[288].bookPoint++;
                            books.books[258].bookPoint++;
                            break;
                        case 177 :
                            books.books[280].bookPoint++;
                            books.books[289].bookPoint++;
                            books.books[176].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[281].bookPoint++;
                            break;
                        case 178 :
                            books.books[268].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[177].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[290].bookPoint++;
                            books.books[283].bookPoint++;
                            break;
                        case 179 :
                            books.books[222].bookPoint++;
                            books.books[291].bookPoint++;
                            books.books[292].bookPoint++;
                            books.books[293].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[258].bookPoint++;
                            break;
                        case 180 :
                            books.books[243].bookPoint++;
                            books.books[294].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[117].bookPoint++;
                            books.books[156].bookPoint++;
                            break;
                        case 181 :
                            books.books[256].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[91].bookPoint++;
                            books.books[225].bookPoint++;
                            books.books[294].bookPoint++;
                            books.books[144].bookPoint++;
                            break;
                        case 182 :
                            books.books[139].bookPoint++;
                            books.books[223].bookPoint++;
                            books.books[224].bookPoint++;
                            books.books[188].bookPoint++;
                            books.books[142].bookPoint++;
                            books.books[140].bookPoint++;
                            break;
                        case 183 :
                            books.books[283].bookPoint++;
                            books.books[259].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[212].bookPoint++;
                            books.books[295].bookPoint++;
                            break;
                        case 184 :
                            books.books[119].bookPoint++;
                            books.books[296].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[181].bookPoint++;
                            books.books[297].bookPoint++;
                            books.books[298].bookPoint++;
                            break;
                        case 185 :
                            books.books[206].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[205].bookPoint++;
                            books.books[203].bookPoint++;
                            books.books[161].bookPoint++;
                            books.books[299].bookPoint++;
                            break;
                        case 186 :
                            books.books[141].bookPoint++;
                            books.books[300].bookPoint++;
                            books.books[100].bookPoint++;
                            books.books[120].bookPoint++;
                            books.books[187].bookPoint++;
                            books.books[225].bookPoint++;
                            break;
                        case 187 :
                            books.books[300].bookPoint++;
                            books.books[162].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[120].bookPoint++;
                            books.books[294].bookPoint++;
                            books.books[223].bookPoint++;
                            break;
                        case 188 :
                            books.books[223].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[224].bookPoint++;
                            books.books[182].bookPoint++;
                            books.books[140].bookPoint++;
                            books.books[142].bookPoint++;
                            break;
                        case 189 :
                            books.books[301].bookPoint++;
                            books.books[302].bookPoint++;
                            books.books[303].bookPoint++;
                            books.books[304].bookPoint++;
                            books.books[305].bookPoint++;
                            books.books[306].bookPoint++;
                            break;
                        case 190 :
                            books.books[307].bookPoint++;
                            books.books[308].bookPoint++;
                            books.books[309].bookPoint++;
                            books.books[310].bookPoint++;
                            books.books[305].bookPoint++;
                            books.books[198].bookPoint++;
                            break;
                        case 191 :
                            books.books[311].bookPoint++;
                            books.books[310].bookPoint++;
                            books.books[73].bookPoint++;
                            books.books[125].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[312].bookPoint++;
                            break;
                        case 192 :
                            books.books[310].bookPoint++;
                            books.books[313].bookPoint++;
                            books.books[314].bookPoint++;
                            books.books[315].bookPoint++;
                            books.books[122].bookPoint++;
                            books.books[127].bookPoint++;
                            break;
                        case 193 :
                            books.books[123].bookPoint++;
                            books.books[194].bookPoint++;
                            books.books[195].bookPoint++;
                            books.books[196].bookPoint++;
                            books.books[197].bookPoint++;
                            books.books[198].bookPoint++;
                            break;
                        case 194 :
                            books.books[316].bookPoint++;
                            books.books[317].bookPoint++;
                            books.books[318].bookPoint++;
                            books.books[319].bookPoint++;
                            books.books[320].bookPoint++;
                            books.books[321].bookPoint++;
                            break;
                        case 195 :
                            books.books[322].bookPoint++;
                            books.books[198].bookPoint++;
                            books.books[323].bookPoint++;
                            books.books[324].bookPoint++;
                            books.books[325].bookPoint++;
                            books.books[326].bookPoint++;
                            break;
                        case 196 :
                            books.books[327].bookPoint++;
                            books.books[328].bookPoint++;
                            books.books[329].bookPoint++;
                            books.books[330].bookPoint++;
                            books.books[331].bookPoint++;
                            books.books[332].bookPoint++;
                            break;
                        case 197 :
                            books.books[193].bookPoint++;
                            books.books[194].bookPoint++;
                            books.books[195].bookPoint++;
                            books.books[196].bookPoint++;
                            books.books[123].bookPoint++;
                            books.books[198].bookPoint++;
                            break;
                        case 198 :
                            books.books[123].bookPoint++;
                            books.books[324].bookPoint++;
                            books.books[326].bookPoint++;
                            books.books[333].bookPoint++;
                            books.books[334].bookPoint++;
                            books.books[335].bookPoint++;
                            break;
                        case 199 :
                            books.books[336].bookPoint++;
                            books.books[337].bookPoint++;
                            books.books[338].bookPoint++;
                            books.books[250].bookPoint++;
                            books.books[200].bookPoint++;
                            books.books[248].bookPoint++;
                            break;
                        case 200 :
                            books.books[199].bookPoint++;
                            books.books[250].bookPoint++;
                            books.books[336].bookPoint++;
                            books.books[339].bookPoint++;
                            books.books[340].bookPoint++;
                            books.books[248].bookPoint++;
                            break;
                        case 201 :
                            books.books[341].bookPoint++;
                            books.books[342].bookPoint++;
                            books.books[343].bookPoint++;
                            books.books[344].bookPoint++;
                            books.books[345].bookPoint++;
                            books.books[309].bookPoint++;
                            break;
                        case 202 :
                            books.books[346].bookPoint++;
                            books.books[87].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[246].bookPoint++;
                            books.books[245].bookPoint++;
                            break;
                        case 203 :
                            books.books[204].bookPoint++;
                            books.books[128].bookPoint++;
                            books.books[347].bookPoint++;
                            books.books[205].bookPoint++;
                            books.books[213].bookPoint++;
                            books.books[299].bookPoint++;
                            break;
                        case 204 :
                            books.books[203].bookPoint++;
                            books.books[128].bookPoint++;
                            books.books[208].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[214].bookPoint++;
                            break;
                        case 204 :
                            books.books[348].bookPoint++;
                            books.books[349].bookPoint++;
                            books.books[347].bookPoint++;
                            books.books[214].bookPoint++;
                            books.books[213].bookPoint++;
                            books.books[130].bookPoint++;
                            break;
                        case 205 :
                            books.books[348].bookPoint++;
                            books.books[349].bookPoint++;
                            books.books[347].bookPoint++;
                            books.books[214].bookPoint++;
                            books.books[213].bookPoint++;
                            books.books[130].bookPoint++;
                            break;
                        case 206 :
                            books.books[350].bookPoint++;
                            books.books[351].bookPoint++;
                            books.books[256].bookPoint++;
                            books.books[211].bookPoint++;
                            books.books[226].bookPoint++;
                            books.books[300].bookPoint++;
                            break;
                        case 207 :
                            books.books[299].bookPoint++;
                            books.books[214].bookPoint++;
                            books.books[205].bookPoint++;
                            books.books[203].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[352].bookPoint++;
                            break;
                        case 208 :
                            books.books[353].bookPoint++;
                            books.books[340].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[350].bookPoint++;
                            books.books[351].bookPoint++;
                            books.books[354].bookPoint++;
                            break;
                        case 209 :
                            books.books[177].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[296].bookPoint++;
                            books.books[121].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 210 :
                            books.books[355].bookPoint++;
                            books.books[356].bookPoint++;
                            books.books[357].bookPoint++;
                            books.books[358].bookPoint++;
                            books.books[294].bookPoint++;
                            books.books[117].bookPoint++;
                            break;
                        case 211 :
                            books.books[226].bookPoint++;
                            books.books[225].bookPoint++;
                            books.books[146].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[208].bookPoint++;
                            books.books[88].bookPoint++;
                            break;
                        case 212 :
                            books.books[359].bookPoint++;
                            books.books[243].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[258].bookPoint++;
                            break;
                        case 213 :
                            books.books[360].bookPoint++;
                            books.books[361].bookPoint++;
                            books.books[362].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[214].bookPoint++;
                            break;
                        case 214 :
                            books.books[213].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[363].bookPoint++;
                            books.books[364].bookPoint++;
                            books.books[205].bookPoint++;
                            break;
                        case 215 :
                            books.books[365].bookPoint++;
                            books.books[366].bookPoint++;
                            books.books[367].bookPoint++;
                            books.books[368].bookPoint++;
                            books.books[369].bookPoint++;
                            books.books[216].bookPoint++;
                            break;
                        case 216 :
                            books.books[365].bookPoint++;
                            books.books[366].bookPoint++;
                            books.books[367].bookPoint++;
                            books.books[368].bookPoint++;
                            books.books[369].bookPoint++;
                            books.books[215].bookPoint++;
                            break;
                        case 217 :
                            books.books[363].bookPoint++;
                            books.books[221].bookPoint++;
                            books.books[370].bookPoint++;
                            books.books[371].bookPoint++;
                            books.books[360].bookPoint++;
                            books.books[213].bookPoint++;
                            break;
                        case 218 :
                            books.books[214].bookPoint++;
                            books.books[221].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[132].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[133].bookPoint++;
                            break;
                        case 219 :
                            books.books[299].bookPoint++;
                            books.books[128].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[207].bookPoint++;
                            books.books[76].bookPoint++;
                            books.books[204].bookPoint++;
                            break;
                        case 220 :
                            books.books[372].bookPoint++;
                            books.books[46].bookPoint++;
                            books.books[78].bookPoint++;
                            books.books[79].bookPoint++;
                            books.books[81].bookPoint++;
                            books.books[80].bookPoint++;
                            break;
                        case 221 :
                            books.books[214].bookPoint++;
                            books.books[218].bookPoint++;
                            books.books[133].bookPoint++;
                            books.books[134].bookPoint++;
                            books.books[130].bookPoint++;
                            books.books[132].bookPoint++;
                            break;
                        case 222 :
                            books.books[137].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[179].bookPoint++;
                            books.books[340].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[208].bookPoint++;
                            break;
                        case 223 :
                            books.books[144].bookPoint++;
                            books.books[373].bookPoint++;
                            books.books[374].bookPoint++;
                            books.books[375].bookPoint++;
                            books.books[376].bookPoint++;
                            books.books[188].bookPoint++;
                            break;
                        case 224 :
                            books.books[144].bookPoint++;
                            books.books[223].bookPoint++;
                            books.books[373].bookPoint++;
                            books.books[182].bookPoint++;
                            books.books[139].bookPoint++;
                            books.books[188].bookPoint++;
                            break;
                        case 225 :
                            books.books[139].bookPoint++;
                            books.books[300].bookPoint++;
                            books.books[155].bookPoint++;
                            books.books[181].bookPoint++;
                            books.books[223].bookPoint++;
                            books.books[141].bookPoint++;
                            break;
                        case 226 :
                            books.books[211].bookPoint++;
                            books.books[206].bookPoint++;
                            books.books[350].bookPoint++;
                            books.books[146].bookPoint++;
                            books.books[353].bookPoint++;
                            books.books[351].bookPoint++;
                            break;
                        case 227 :
                            books.books[294].bookPoint++;
                            books.books[377].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[147].bookPoint++;
                            books.books[144].bookPoint++;
                            books.books[229].bookPoint++;
                            break;
                        case 228 :
                            books.books[294].bookPoint++;
                            books.books[227].bookPoint++;
                            books.books[377].bookPoint++;
                            books.books[147].bookPoint++;
                            books.books[378].bookPoint++;
                            books.books[231].bookPoint++;
                            break;
                        case 229 :
                            books.books[294].bookPoint++;
                            books.books[377].bookPoint++;
                            books.books[379].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[378].bookPoint++;
                            books.books[180].bookPoint++;
                            break;
                        case 230 :
                            books.books[244].bookPoint++;
                            books.books[243].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[294].bookPoint++;
                            books.books[232].bookPoint++;
                            books.books[96].bookPoint++;
                            break;
                        case 231 :
                            books.books[229].bookPoint++;
                            books.books[243].bookPoint++;
                            books.books[228].bookPoint++;
                            books.books[378].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[227].bookPoint++;
                            break;
                        case 232 :
                            books.books[244].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[243].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[294].bookPoint++;
                            books.books[227].bookPoint++;
                            break;
                        case 233 :
                            books.books[74].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[113].bookPoint++;
                            books.books[271].bookPoint++;
                            books.books[359].bookPoint++;
                            books.books[168].bookPoint++;
                            break;
                        case 234 :
                            books.books[279].bookPoint++;
                            books.books[280].bookPoint++;
                            books.books[281].bookPoint++;
                            books.books[282].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[174].bookPoint++;
                            break;
                        case 235 :
                            books.books[280].bookPoint++;
                            books.books[279].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[290].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[380].bookPoint++;
                            break;
                        case 236 :
                            books.books[268].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[178].bookPoint++;
                            books.books[174].bookPoint++;
                            break;
                        case 237 :
                            books.books[263].bookPoint++;
                            books.books[238].bookPoint++;
                            books.books[381].bookPoint++;
                            books.books[382].bookPoint++;
                            books.books[383].bookPoint++;
                            books.books[384].bookPoint++;
                            break;
                        case 238 :
                            books.books[237].bookPoint++;
                            books.books[384].bookPoint++;
                            books.books[382].bookPoint++;
                            books.books[152].bookPoint++;
                            books.books[239].bookPoint++;
                            books.books[259].bookPoint++;
                            break;
                        case 239 :
                            books.books[263].bookPoint++;
                            books.books[385].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[387].bookPoint++;
                            books.books[388].bookPoint++;
                            books.books[262].bookPoint++;
                            break;
                        case 240 :
                            books.books[389].bookPoint++;
                            books.books[53].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[91].bookPoint++;
                            books.books[390].bookPoint++;
                            books.books[58].bookPoint++;
                            break;
                        case 241 :
                            books.books[74].bookPoint++;
                            books.books[65].bookPoint++;
                            books.books[100].bookPoint++;
                            books.books[70].bookPoint++;
                            books.books[124].bookPoint++;
                            books.books[58].bookPoint++;
                            break;
                        case 242 :
                            books.books[153].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[392].bookPoint++;
                            books.books[393].bookPoint++;
                            books.books[394].bookPoint++;
                            books.books[395].bookPoint++;
                            break;
                        case 243 :
                            books.books[180].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[156].bookPoint++;
                            books.books[96].bookPoint++;
                            books.books[244].bookPoint++;
                            books.books[294].bookPoint++;
                            break;
                        case 244 :
                            books.books[243].bookPoint++;
                            books.books[230].bookPoint++;
                            books.books[232].bookPoint++;
                            books.books[180].bookPoint++;
                            books.books[156].bookPoint++;
                            books.books[96].bookPoint++;
                            break;
                        case 245 :
                            books.books[246].bookPoint++;
                            books.books[247].bookPoint++;
                            books.books[158].bookPoint++;
                            books.books[248].bookPoint++;
                            books.books[251].bookPoint++;
                            books.books[346].bookPoint++;
                            break;
                        case 246 :
                            books.books[245].bookPoint++;
                            books.books[247].bookPoint++;
                            books.books[158].bookPoint++;
                            books.books[200].bookPoint++;
                            books.books[248].bookPoint++;
                            books.books[346].bookPoint++;
                            break;
                        case 247 :
                            books.books[245].bookPoint++;
                            books.books[246].bookPoint++;
                            books.books[158].bookPoint++;
                            books.books[251].bookPoint++;
                            books.books[396].bookPoint++;
                            books.books[346].bookPoint++;
                            break;
                        case 248 :
                            books.books[200].bookPoint++;
                            books.books[199].bookPoint++;
                            books.books[336].bookPoint++;
                            books.books[250].bookPoint++;
                            books.books[397].bookPoint++;
                            books.books[346].bookPoint++;
                            break;
                        case 249 :
                            books.books[339].bookPoint++;
                            books.books[340].bookPoint++;
                            books.books[398].bookPoint++;
                            books.books[250].bookPoint++;
                            books.books[399].bookPoint++;
                            books.books[400].bookPoint++;
                            break;
                        case 250 :
                            books.books[397].bookPoint++;
                            books.books[158].bookPoint++;
                            books.books[200].bookPoint++;
                            books.books[245].bookPoint++;
                            books.books[336].bookPoint++;
                            books.books[199].bookPoint++;
                            break;
                        case 251 :
                            books.books[200].bookPoint++;
                            books.books[248].bookPoint++;
                            books.books[346].bookPoint++;
                            books.books[141].bookPoint++;
                            books.books[145].bookPoint++;
                            books.books[159].bookPoint++;
                            break;
                        case 252 :
                            books.books[60].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[160].bookPoint++;
                            books.books[401].bookPoint++;
                            books.books[402].bookPoint++;
                            books.books[99].bookPoint++;
                            break;
                        case 253 :
                            books.books[254].bookPoint++;
                            books.books[161].bookPoint++;
                            books.books[255].bookPoint++;
                            books.books[403].bookPoint++;
                            books.books[404].bookPoint++;
                            books.books[259].bookPoint++;
                            break;
                        case 254 :
                            books.books[253].bookPoint++;
                            books.books[161].bookPoint++;
                            books.books[405].bookPoint++;
                            books.books[406].bookPoint++;
                            books.books[407].bookPoint++;
                            books.books[258].bookPoint++;
                            break;
                        case 255 :
                            books.books[259].bookPoint++;
                            books.books[408].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[409].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[263].bookPoint++;
                            break;
                        case 256 :
                            books.books[405].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[410].bookPoint++;
                            books.books[406].bookPoint++;
                            books.books[254].bookPoint++;
                            books.books[181].bookPoint++;
                            break;
                        case 257 :
                            books.books[411].bookPoint++;
                            books.books[412].bookPoint++;
                            books.books[413].bookPoint++;
                            books.books[414].bookPoint++;
                            books.books[415].bookPoint++;
                            books.books[416].bookPoint++;
                            break;
                        case 258 :
                            books.books[256].bookPoint++;
                            books.books[161].bookPoint++;
                            books.books[417].bookPoint++;
                            books.books[254].bookPoint++;
                            books.books[289].bookPoint++;
                            books.books[283].bookPoint++;
                            break;
                        case 259 :
                            books.books[255].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[263].bookPoint++;
                            books.books[418].bookPoint++;
                            books.books[165].bookPoint++;
                            break;
                        case 260 :
                            books.books[419].bookPoint++;
                            books.books[420].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[144].bookPoint++;
                            books.books[300].bookPoint++;
                            books.books[421].bookPoint++;
                            break;
                        case 261 :
                            books.books[263].bookPoint++;
                            books.books[422].bookPoint++;
                            books.books[164].bookPoint++;
                            books.books[163].bookPoint++;
                            books.books[110].bookPoint++;
                            books.books[259].bookPoint++;
                            break;
                        case 262 :
                            books.books[423].bookPoint++;
                            books.books[422].bookPoint++;
                            books.books[424].bookPoint++;
                            books.books[425].bookPoint++;
                            books.books[426].bookPoint++;
                            books.books[427].bookPoint++;
                            break;
                        case 263 :
                            books.books[408].bookPoint++;
                            books.books[428].bookPoint++;
                            books.books[429].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[422].bookPoint++;
                            books.books[163].bookPoint++;
                            break;
                        case 264 :
                            books.books[386].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[430].bookPoint++;
                            books.books[276].bookPoint++;
                            books.books[431].bookPoint++;
                            books.books[255].bookPoint++;
                            break;
                        case 265 :
                            books.books[425].bookPoint++;
                            books.books[432].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[259].bookPoint++;
                            books.books[255].bookPoint++;
                            break;
                        case 266 :
                            books.books[433].bookPoint++;
                            books.books[434].bookPoint++;
                            books.books[435].bookPoint++;
                            books.books[436].bookPoint++;
                            books.books[437].bookPoint++;
                            books.books[438].bookPoint++;
                            break;
                        case 267 :
                            books.books[439].bookPoint++;
                            books.books[385].bookPoint++;
                            books.books[440].bookPoint++;
                            books.books[441].bookPoint++;
                            books.books[442].bookPoint++;
                            books.books[262].bookPoint++;
                            break;
                        case 268 :
                            books.books[289].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[411].bookPoint++;
                            books.books[279].bookPoint++;
                            books.books[177].bookPoint++;
                            books.books[443].bookPoint++;
                            break;
                        case 269 :
                            books.books[444].bookPoint++;
                            books.books[289].bookPoint++;
                            books.books[386].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[288].bookPoint++;
                            break;
                        case 270 :
                            books.books[283].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[284].bookPoint++;
                            books.books[262].bookPoint++;
                            books.books[175].bookPoint++;
                            break;
                        case 271 :
                            books.books[161].bookPoint++;
                            books.books[445].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[446].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 272 :
                            books.books[447].bookPoint++;
                            books.books[448].bookPoint++;
                            books.books[449].bookPoint++;
                            books.books[450].bookPoint++;
                            books.books[451].bookPoint++;
                            books.books[452].bookPoint++;
                            break;
                        case 273 :
                            books.books[453].bookPoint++;
                            books.books[454].bookPoint++;
                            books.books[451].bookPoint++;
                            books.books[448].bookPoint++;
                            books.books[447].bookPoint++;
                            books.books[450].bookPoint++;
                            break;
                        case 274 :
                            books.books[170].bookPoint++;
                            books.books[275].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[113].bookPoint++;
                            break;
                        case 275 :
                            books.books[274].bookPoint++;
                            books.books[74].bookPoint++;
                            books.books[170].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[455].bookPoint++;
                            books.books[456].bookPoint++;
                            break;
                        case 276 :
                            books.books[264].bookPoint++;
                            books.books[431].bookPoint++;
                            books.books[255].bookPoint++;
                            books.books[259].bookPoint++;
                            books.books[265].bookPoint++;
                            books.books[171].bookPoint++;
                            break;
                        case 277 :
                            books.books[172].bookPoint++;
                            books.books[457].bookPoint++;
                            books.books[157].bookPoint++;
                            books.books[31].bookPoint++;
                            books.books[34].bookPoint++;
                            books.books[28].bookPoint++;
                            break;
                        case 278 :
                            books.books[112].bookPoint++;
                            books.books[173].bookPoint++;
                            books.books[60].bookPoint++;
                            books.books[172].bookPoint++;
                            books.books[101].bookPoint++;
                            books.books[458].bookPoint++;
                            break;
                        case 279 :
                            books.books[281].bookPoint++;
                            books.books[280].bookPoint++;
                            books.books[282].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[151].bookPoint++;
                            books.books[459].bookPoint++;
                            break;
                        case 280 :
                            books.books[281].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[282].bookPoint++;
                            books.books[279].bookPoint++;
                            books.books[234].bookPoint++;
                            books.books[459].bookPoint++;
                            break;
                        case 281 :
                            books.books[279].bookPoint++;
                            books.books[280].bookPoint++;
                            books.books[282].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[234].bookPoint++;
                            books.books[459].bookPoint++;
                            break;
                        case 282 :
                            books.books[234].bookPoint++;
                            books.books[281].bookPoint++;
                            books.books[280].bookPoint++;
                            books.books[174].bookPoint++;
                            books.books[279].bookPoint++;
                            books.books[459].bookPoint++;
                            break;
                        case 283 :
                            books.books[289].bookPoint++;
                            books.books[258].bookPoint++;
                            books.books[177].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[288].bookPoint++;
                            books.books[174].bookPoint++;
                            break;
                        case 284 :
                            books.books[415].bookPoint++;
                            books.books[283].bookPoint++;
                            books.books[254].bookPoint++;
                            books.books[412].bookPoint++;
                            books.books[286].bookPoint++;
                            books.books[416].bookPoint++;
                            break;
                        case 285 :
                            books.books[289].bookPoint++;
                            books.books[288].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[415].bookPoint++;
                            books.books[412].bookPoint++;
                            books.books[460].bookPoint++;
                            break;
                        case 286 :
                            books.books[289].bookPoint++;
                            books.books[177].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[284].bookPoint++;
                            books.books[105].bookPoint++;
                            books.books[461].bookPoint++;
                            break;
                        case 287 :
                            books.books[268].bookPoint++;
                            books.books[236].bookPoint++;
                            books.books[289].bookPoint++;
                            books.books[288].bookPoint++;
                            books.books[178].bookPoint++;
                            books.books[282].bookPoint++;
                            break;
                        case 288 :
                            books.books[289].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[285].bookPoint++;
                            books.books[462].bookPoint++;
                            books.books[463].bookPoint++;
                            break;
                        case 289 :
                            books.books[289].bookPoint++;
                            books.books[287].bookPoint++;
                            books.books[268].bookPoint++;
                            books.books[285].bookPoint++;
                            books.books[462].bookPoint++;
                            books.books[463].bookPoint++;
                            break;
                        default:
                            break;
                    }
                    break;//144'e baak bir ara düzenle
                }
            }
        }
        
    });
}


$(".bas").click(function (e) { 
    e.preventDefault();
    if (sayi<10) {
        alert("The number of books entered is less than 10. Please enter 10 or more books for correct suggestions.");
    }else{
        $(".wrapper").addClass("visually-hidden");
        $(".bas").addClass("visually-hidden");
        $(".kitapalani").addClass("py-5");
        books.books.sort((a, b) => b.bookPoint - a.bookPoint).slice(10);
        kitapGir.innerHTML="";
        puanGir.innerHTML="<th>#</th><th>Suggested Book</th><th>Suggested Book's Author Name</th><th>Suggested Book's Number of Pages</th><th>Suggested Book's Price</th><th>Suggested Book's Options</th><th>Suggested Book's Match</th>";
        for (let i = 0; suggestNumber < 10; i++) {
            if(books.books[i].isWrite==true){
                continue;
            }else{
            suggestNumber++;
            kitapGir.innerHTML+="<tr><td>"+(suggestNumber)+"</td><td class='bookname'>"+books.books[i].bookName+"</td><td>"+books.books[i].bookAuthor+"</td><td>"+books.books[i].bookPage+"</td><td>"+books.books[i].bookPrice+"</td><td><a href='"+books.books[i].bookLink+"' target='_blank'><button class='btn btn-success buyBook'>Buy</button></a></td><td>%"+(90+books.books[i].bookPoint*1.14)+"</td></tr>";
            }
        };
    }
    
});

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
