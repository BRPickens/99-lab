var myFriends = ['Wade', 'Keenan', 'Darcell', 'Andrew', 'Barron']

for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i],':');
    for(code=99; code > 1; code--) {
        console.log(code + ' lines of code in the file,' + code +' lines of code; ' + myFriends[i], ' strikes one out, clears it all out, ' + (code-1) +'lines of code in the file');
    }
    if (code===1); {
        console.log(code + 'line of code in the file,' + code + ' line of code;' + myFriends[i], ' strikes one out, clears it all out,' + (code-1) +' no more lines of code in the file')
    }
}