INSERT INTO signUp ( username, email, password )
VALUES ("GreatGatsby", "TGGatyy191@xyz.co.uk", "123aaa" ),
       ("Huckleberry", "HFinny@xyz.co.uk", "132bbb"),
       ("Solitude", "100YS@xyz.co.uk", "321ccc"),
       ("Things", "TFA@xyz.co.uk", "xxx123ABC");


INSERT INTO profile ( id, picture, about)
VALUES(4, LOAD_FILE('../../public/tomal.jpeg'), 
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, but also the leap 
into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing 
Lorem Ipsum passages, and more recently with desktop publishing software like 
Aldus PageMaker including versions of Lorem Ipsum.");