const combineTypesInArray = (item, value) => {
    item.id.push(value.id);
    item.image.push(value.image);
    item.imageHover.push(value.imageHover);
    item.name = item.name ? `${item.name} + ${value.name}` : value.name;
};

export const getCombinedTypes = (array) => {
    const set = [];
    const listSize = array.length;
    const combinationsCount = (1 << listSize);

    for (let i = 1; i < combinationsCount; i++) {
        const merge = {
            id: [],
            image: [],
            imageHover: [],
            name: ''
        };
        for (let j = 0; j < listSize; j++) {
            if ((i & (1 << j))) {
                combineTypesInArray(merge, array[j]);
            }
        }
        set.push(merge);
    }
    return set.filter(item => item.id.length > 1);

};