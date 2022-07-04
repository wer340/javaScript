```js
Math.random(); /* [0-0.9999999999999999]   */
Math.floor()
```

## if control flow
```js
if(track==="clear"){
goStright();
} 
else if(track==wall){
turnRight();
} 
else{
turnLeft()
}/* not semi colon end curly bracket */

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
|sign|  name|type|
|----|------|-----|
|&&|ampersand|and|
| \|\| |pipe|or|
|!|exclamition|not|

-----
```js
list.includes(value)  /* check this value exist this list  return boolean true or false */
list.push() /* add item to list  */
list.pop() /* remove item to list return remoed item  */
```
# while loop  and for loop

```js
while(condition){
/* statement */
}
for(var i=0 */[start]*/;i<100 */[end]*/;i++ */[change]*/){
/* statement */
}
