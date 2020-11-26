const keystone = require("keystone")

const { Types } = keystone.Field

const quemSomos = new keystone.List("quemSomos", {
    map : { name: "key" },
    nocreate: true,
    nodelete: true,
    unique: true
})

quemSomos.add({
    key: {
        type: Types.Text,
        value: "Quem somos",
        noedit: true
    },
    texto: {
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
        index: true
    }
})

quemSomos.register()