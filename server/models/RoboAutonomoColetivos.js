const keystone = require('keystone')

const { Types } = keystone.Field

const roboAutonomoColetivos = new keystone.List("roboAutonomoColetivos", {
    name: { map: "nome" },
    unique: true
})

roboAutonomoColetivos.add({

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

roboAutonomoColetivos.register()