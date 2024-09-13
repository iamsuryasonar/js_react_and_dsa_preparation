function decode(message) {
  let i = 0;
  let j = 0;
  let str = '';

  while(message[i] && message[i][j]){
    str += message[i][j];

    if(message[i+1]){
      i++;
    }else{
      i--;
    }

    j++;
  }

  return str;
}
