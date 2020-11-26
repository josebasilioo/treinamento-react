const keystone = require('keystone');

const { Types } = keystone.Field;

const banner = new keystone.List('banner', {
    map: { name: 'key' },
    nocreate: true,
    nodelete: true,
    unique: true
});

banner.add({
    key: {
        type: Types.Text,
        value: 'Banner',
        noedit: true
    },
    image: {
        type: Types.CloudinaryImage,
        required: true,
        unique: true,
        initial: true,
        index: true,
    }
});

banner.register();