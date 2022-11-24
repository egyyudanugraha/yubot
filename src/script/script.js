// Initial element
const labelText = document.querySelector('.label-text');
const inputJawaban = document.querySelector('input');
const buttonKirim = document.querySelector('button');
const probability = ['ga', 'gak', 'nga', 'ngga', 'nggak', 'g', 'blm', 'belum', 'blm', 'belom', 'beloom', 'belooom', 'ga tau', 'gak tau'];
const formatData = {
  nama: null,
  kegiatan: null,
  hubungan: null,
  pacar: null,
};
const listPertanyaan = (data) => ([
  'Halo aku Yubot, nama kamu siapa?',
  `Hai ${data.nama}, kamu lagi apa?`,
  `Ooh ${data.kegiatan}, kamu udah punya pacar?`,
  `Oalah ${data.hubungan} punya toh, siapa namanya?`,
  `Oke, semoga ${data.nama} dan ${data.pacar} langgeng yaa!`,
]);
let i = 0;

// Function
const question = () => {
  if (i > 4) {
    labelText.innerText = 'Dadaaahhh....';
    inputJawaban.setAttribute('disabled', 'true');
    buttonKirim.setAttribute('disabled', 'true');

    setTimeout(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }, 2000);

    return;
  }

  labelText.innerText = listPertanyaan(formatData)[i];
  inputJawaban.value = '';
};

buttonKirim.addEventListener('click', () => {
  if (i === 0) {
    formatData.nama = inputJawaban.value;
  }
  if (i === 1) {
    formatData.kegiatan = inputJawaban.value.toLocaleLowerCase();
  }
  if (i === 2) {
    formatData.hubungan = inputJawaban.value.toLocaleLowerCase();

    if (probability.includes(formatData.hubungan.toLocaleLowerCase())) {
      labelText.innerText = 'Kasian bgt, Awokowkowkwk 🤣🤣';

      i = 4;
      return;
    }
  }
  if (i === 3) {
    formatData.pacar = inputJawaban.value;
  }

  i += 1;
  question();
});

document.addEventListener('DOMContentLoaded', question);
