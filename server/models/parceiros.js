const keystone = require('keystone');

const { Types } = keystone.Field;

const parceiros = new keystone.List("parceiros", {
    map: { name: "key" },
    unique: true
});

parceiros.add({
    key: {
        type: Types.Text,
        value: "Parceiros",
    },
    image: {
        type: Types.CloudinaryImage,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    link: {
        type: Types.Url,
        required: true,
        unique: true,
        initial: true,
        index: true
    }
})

parceiros.register();