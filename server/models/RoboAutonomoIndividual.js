const keystone = require('keystone')

const { Types } = keystone.Field

const roboAutonomoIndividual = new keystone.List("roboAutonomoIndividual", {
    name: { map: "nome" },
    unique: true
})

roboAutonomoIndividual.add({

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

roboAutonomoIndividual.register()