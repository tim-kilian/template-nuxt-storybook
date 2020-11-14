const solid = [
    'star',
];

const regular = [
    'star',
];

export const icons = solid;

// @source https://stackoverflow.com/questions/4068573
const translateIcon = (icon) => {
    return 'fa' + icon.replace(/(\w)(\w*)/g, (_, g1, g2) => {
        return g1.toUpperCase() + g2.toLowerCase();
    }).replace('-', '').replace('-', '');
};

export const faIcons = {
    solid: solid.map(translateIcon),
    regular: regular.map(translateIcon),
};
