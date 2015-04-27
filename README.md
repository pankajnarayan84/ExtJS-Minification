# <h1>ExtJS-Minification</h1>
This is sample of how sencha cmd can be use to minify ExtJS 4 with non standard folder structure


<h2>Steps:</h2>
1. Download and install Sencha cmd from http://www.sencha.com/products/sencha-cmd/download 
2. add sencha command to PATH variable
3. create .jsb file at root level in project [<b>sequence of files in .jsb file is very important, check sample jsb for more details</b> ]
4. Open command promt
5. change derectory to directory containing .jsb file
6. fire command: <b>sencha build -p  app.jsb3 -d  . -v</b> [Note: app.jsb3 should be replaced with your .jsb file name]
