```js
Math.random(); /* [0-0.9999999999999999]   */
Math.floor()
```

## if control flow
```js
if(track==="clear"){
goStright();
} 
else{
turnRight();
}  /* not semi colon end curly bracket */
```
|compare|  sign|
|----|------|
|===|equal|
| !===|not equal|
|>|greater than|
|< |lesser than|
|>=|greater than and equal|
|<=|lesser and equal|


-------
`==` `two equal` sign  doesnt care data type  but `===` `three equal` sign just care data type
```js
var a="2"; 
var b=2; 
if (a==b) { /* pass condition */
/* statement */
}
if (a===b){/* reject condition */
/* statement */
}
```
#  combine and comparitive
|co&co|  sign|
|----|------|
|&&|equal|
| [||] |not equal|
