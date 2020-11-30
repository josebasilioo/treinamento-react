const keystone = require('keystone');

const { Types } = keystone.Field;

const parceiros = new keystone.List("parceiros", {
    map: { name: "nome" },
    unique: true
});

parceiros.add({
    nome: {
        type: Types.Text,
        value: "Parceiros",
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    descricao: {
        type: Types.Textarea,
        required: true,
        unique: true,
        initial: true,
        index: true,
        max: 250
    },
    link: {
        type: Types.Url,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    image: {
        type: Types.CloudinaryImage,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    
})

parceiros.register();