const keystone = require('keystone')

const { Types } = keystone.Field

const roboCombate = new keystone.List("roboCombate", {
    name: { map: "nome" },
    unique: true
})

roboCombate.add({

    key: {
        type: Types.Text,
        required: true,
        initial: true
    },
    descricao: {
        type: Types.Textarea,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    imagem: {
        type: Types.CloudinaryImage,
        required: true,
        unique: true,
        initial: true,
        index: true,
    }


})

roboCombate.register()