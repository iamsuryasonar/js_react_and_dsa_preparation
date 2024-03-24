/*  
        hello -> olleh
        hello ello h -> llo e h -> lo l e h -> o l l e h
                    hello
                /   \
                ello    h
            /  \
            llo  e
            / \
            lo l
        /\
        o l 
  
*/

function reverseSting(s) {
    if (s.length === 0) {
        return '';
    }

    return reverseSting(s.substring(1, s.length)) + s[0]

}

console.log(reverseSting('hello'))