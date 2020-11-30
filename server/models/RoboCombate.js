  
const keystone = require('keystone');

const { Types } = keystone.Field;

const roboCombate = new keystone.List('roboCombate', {
    map: { name: 'nome' },
});

roboCombate.add({
    nome: { type: Types.Text, initial: true, required: true, noedit: true },
    descrição: { type: Types.Textarea, required: false, initial: true, index: true, max: 270 },
    imagem: {type: Types.CloudinaryImage, required: true, unique: true, initial: true, index: true},
});

roboCombate.register();