Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.
Versions after first bad version are supposed to be all bad versions.

notes - 
Inputs are all non-negative integers
if none found, return -1

```javascript
function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
 // and should return a closure which accepts a version number(integer)

  let badVersion = null;

  return (version) => {
    // // write your code to return the first bad version
    // // if none found, return -1

    let i = 0;

    while(i<=version){
      if(isBad(i)){
        if(badVersion===null){
          badVersion = i;
          break;
        }
      }
      i++;
    }

    return badVersion ? badVersion : -1;
  }
}

(console.log(firstBadVersion((i) => i >= 4)(100))) // 4
(console.log(firstBadVersion((i) => i >= 5)(3))) // -1
```

intuition  - if bad version exist in the mid then first bad version
must exist to the left of mid otherwise it must be in the right of the mid
```javascript
function firstBadVersion(isBad) {

  let badVersion = false;

  return (version) => {
    let left = 0;
    let right = version;

    while(left<=right){
      let mid = Math.floor((left+right)/2);

      if(isBad(mid)){ 
        badVersion = true; // keeps check if atleast one bad version exists 
        right = mid-1;
      }else{
        left = mid+1;
      }
    }
    return badVersion?left:-1;
  }
}

(console.log(firstBadVersion((i) => i >= 4)(100))) // 4
(console.log(firstBadVersion((i) => i >= 5)(3))) // -1

```
