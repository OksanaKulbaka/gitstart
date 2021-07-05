let count, handshake;
count = 1;
handshake = 0;
while (handshake != 120) {
    count += 1;
    handshake += (count - 1); 
}
alert('Всего пришло ' + count + ' человек.')