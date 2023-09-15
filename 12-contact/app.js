const contacts = require ('./contacts');

const main = async () =>{
    const nama = await contacts.tulisPertanyaan('Masukan nama anda :');
    const email = await contacts.tulisPertanyaan('Masukan email anda :');
    const noHP = await contacts.tulisPertanyaan('Masukan no-hp anda :');

    contacts.simpanConstant(nama,email,noHP);
}

main();
