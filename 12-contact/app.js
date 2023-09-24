const yargs = require("yargs");
const contacts = require('./contacts')


yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
     nama:{  
        describe: 'Nama Lengakap',
        demandOption: true,
        type : 'string',
        },
    email:{
        describe: 'Email',
        demandOption: false,
        type : 'string',
    },
    noHP: {
        describe: 'Nomer Handphones',
        demandOption: true,
        type : 'string',
    }, 
   },
   handler: function(argv){
    contacts.simpanConstant(argv.nama, argv.email, argv.noHP)
   }
}).demandCommand();

//menampilkan daftar semua nama dan no hp contact
yargs.command({
    command: 'list',
    describe: 'menampilkan informasi semua kontak',
   handler(){
    contacts.listContact();
   },
});


//menampilkan detail contact
yargs.command({
    command: 'detail',
    describe: 'menampilkan detail contact berdasarkan nama ',
    builder:{
        nama: {
            describe : 'nama lengkap',
            demandOption : true,
            type:'string'
        },
    },
   handler(argv){
    contacts.detailContact(argv.nama);
   },
});


yargs.parse();