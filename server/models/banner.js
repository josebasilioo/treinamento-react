const keystone = require('keystone');

const { Types } = keystone.Field;

const banner = new keystone.List('banner', {
    map: { name: 'image'},
    nocreate: true,
    nodelete: true,
});

banner.add({
    image: {
        type: Types.CloudinaryImage,
        required: true,
        initial: true,
        index: true,
        unique: true,
    }
});

banner.register();