
const combineTypes = (first, second) => {
    return {
        id: [first.id, second.id],
        image: [first.image, second.image],
        imageHover: [first.imageHover, second.imageHover],
        name: `${first.name} + ${second.name}`
    };
};

const combineTypesInArray = (item, value) => {
    return {
        id: [...item.id, value.id],
        image: [...item.image, value.image],
        imageHover: [...item.imageHover, value.imageHover],
        name: `${item.name} + ${value.name}`,
        description: 'Establish your entire brand identity and save with this bundle.'
    }
};

export const getCombinedTypes = (array) => {
    let result = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            result.push(combineTypes(array[i], array[j]));
        }
    }
    for(let i = 0; i < array.length - 2; i++){
        for (let j = 0; j < array.length; j++){
            result.forEach((item)=>{
                let res = item.id.includes(array[j].id);
                if(!res){
                    const elem = combineTypesInArray(item, array[j]);
                    elem.id.sort();
                    result.push(elem);
                }
            });
        }
    }
    result = result.filter((item, index, array)=>{
        if(index<array.length-1){
            return item.id.toString() !== array[index+1].id.toString();
        }
        return true;
    });
    return result;
};