// core module
// file system module
// const fs = require('fs');


//menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt','ini adalah data tulisan string yang di buat dengan node js');
// } catch (error) {
//     console.log(error);
// }


//menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt','ini adalah data string asynchronous dan data yang sebelumnya akan di timpa', (error) => {
//     console.log(error);
// });


//membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt','utf-8');
// console.log(data);


//membaca isi file (asynchronous)
// fs.readFile('data/test.txt','utf-8',(error, data)=>{
//     if (error) throw error;
//     console.log(data);
// });


//Readline 
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Masukkan nama anda :', (nama)=>{
//     console.log(`ini adalah data yang inputan nama saya : ${nama}`);
//     rl.close();
// })


//latihan 
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question ('Masukkan nama anda :', (nama)=>{
    rl.question('masukkan nomer telpon anda :', (nomer)=>{
        const contact = {nama,nomer};
        const file = fs.readFileSync('data/contacts.json','utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
        console.log('terima kasih sudah mengisi data');
        rl.close();
    });
});