const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

//membuat folder jika belum ada folder
const dirPath = './data';
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada file tersebu
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf8');
}

const loadContact = () =>{
    const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(fileBuffer);

    return contacts;
}

const simpanConstant = (nama, email, noHP)=>{
    const contact = {nama, email, noHP};
    // const fileBuffer = fs.readFileSync('data/contacts.json','utf-8');
    // const contacts = JSON.parse(fileBuffer);
    const contacts = loadContact();


    //cek apakah data duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat){
        console.log(
            chalk.red.inverse.bold('nama yang anda gunakan adalah duplikat silahkan gunakan nama yang lain')
            );
        return false;
    }

    //cek email contact
if (email){
    if(!validator.isEmail(email)){
        console.log(
            chalk.red.inverse.bold('email yang anda gunakan bukanlah email yang valid')
            );
        return false;
    }
}

//cek no hanphone
if(!validator.isMobilePhone(noHP,'id-ID')){
    console.log(
        chalk.red.inverse.bold('Nomber HP tidak valid')
        );
    return false;
}

    contacts.push(contact);

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

    console.log(chalk.green.inverse.bold('terima kasih sudah memasukan data.'));
};

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Berikut adalah daftar kontak.'));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.email} - ${contact.noHP}`);
    });
};

//menampilkan detail dari contact
const detailContact = (nama) =>{
    const contacts = loadContact();

    const contact = contacts.find(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    );

    if(!contact) {
        console.log(chalk.red.inverse.bold(`tidak ada nama ${nama} kontak seperti yang anda maksut`));
        return false;
    };

    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log(contact.noHP);
    if(contact.email){
        console.log(contact.email);
    };

};

module.exports = {simpanConstant, listContact, detailContact};

