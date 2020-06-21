//数组中是否包含target
export let IsArrayContain = <T> (array: Array<T>, target:T): boolean=> {
    return array.indexOf(target) >= 0
}

//从数组中移除target
export let ArrayRemove = <T> (array: Array<T>, target: T) =>{
    var index = array.indexOf(target);
    if (index >= 0) {
        array.splice(index, 1);
    }
}

//复制数组
export let ArrayCopy =  <T>(array: Array<T>, target: Array<T>) => {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        target.push(element)
    }
}