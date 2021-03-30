var tabel= document.getElementById('tabel'), 
    form = document.getElementById('frm'),
    pesan = document.getElementById('pesan'),
    btnTambah = document.getElementById('btnTambah'),
    db;

function tambahBaris(e) {
    var nama = document.getElementById('nama'),
    nim = document.getElementById('nim'),
    departemen = document.getElementById('departemen'),
    email= document.getElementById('email');
    //periksa apakah nim sudah ada
    if (tabel.rows.namedItem(nim.value)){
        pesan.textContent = 'NIM yang di input sudah terdaftar!';
        e.preventDefault();
        return;
    }
    data.nama = nama.value;
    data.nim = nim.value;
    data.departemen = departemen.value;
    data.email = email.value;

    //membuat baris baru
    var baris = tabel.insertRow();
    baris.id = nim.value;
    baris.insertCell().appendChild(document.createTextNode(data.nama));
    baris.insertCell().appendChild(document.createTextNode(data.nim));
    baris.insertCell().appendChild(document.createTextNode(data.departemen));
    baris.insertCell().appendChild(document.createTextNode(data.email));

    //membuat tombol hapus untuk setiap baris
    var tombolHapus = document.createElement('input');
    tombolHapus.type = 'button';
    tombolHapus.value = 'Hapus';
    tombolHapus.id = data.nim;
    baris.insertCell().appendChild(tombolHapus);

    e.preventDefault();
}
function hapusBaris(e){
    if (e.target.type=='button') {                
        tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
    }
}
form.addEventListener('submit',tambahBaris, false);
tabel.addEventListener('click', hapusBaris, true);

let data = {
    nama : '',
    nim : '',
    departemen :'',  
    email :'', 
    
    set setNama(newNama){
        this.nama = newNama;
    },
    get getNama(){
        return this.nama;
    },
    set setNim(newNim){
        this.nim = newNim;
    },
    get getNim(){
        return this.nim;
    },
    set setDepartemen(newDepartemen){
        this.departemen = newDepartemen;
    },
    get getDepartemen(){
        return this.departemen;
    },
    set setEmail(newEmail){
        this.email = newEmail;
    },
    get getEmail(){
        return this.email;
    } 
}
function reset() {
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("departemen").value = "";
    document.getElementById("email").value = "";
    location.reload();
}