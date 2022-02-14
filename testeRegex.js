const str = 'di.dicenteronline.com.br';
const re = /[^www.]+/s;
const out = re.exec(str);
console.log(out);
