fetch('http://webapi.allegro.pl/').then( resp => {

if (resp.ok)

return resp.text();

else

throw new Error('Błąd sieci!!');

}).then( ip => {

console.log('Moje IP:', ip);

}).catch( err => {

console.log('Błąd!', err);

});
