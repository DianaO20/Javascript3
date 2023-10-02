const ziuaSaptamanii = 'Miercuri'

switch (ziuaSaptamanii) {
    case 'Luni':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
    case 'Marti':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
    case 'Miercuri':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
    case 'Joi':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
    case 'Vineri':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
    case 'Sambata':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
    case 'Duminica':
        console.log(`Azi este ${ziuaSaptamanii}`)
        break;
}

var variabila = 'Today was a Beautiful day'

console.log(variabila.toLowerCase())
console.log(variabila.toUpperCase())



const str = 'Buterflies are cute'
const lungimeaStr = str.length > 10 ? 'lungimea str este mai mare de 10' : "lungimea str este mai mica de 10"

console.log(lungimeaStr)

const str1 = 'Today I saw many places' 

const  str2 = str1.indexOf('saw')
const str3 = str1.indexOf('Today')

console.log(str1.slice(str3+8, str3-12))

const str4 = 'Today I saw many places' 

const  str5 = str4.indexOf('saw')
const str6 = str4.indexOf('many')
console.log(str4.slice(str5, str6-1))
