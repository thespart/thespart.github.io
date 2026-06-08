export function tween(element, startvalue, endvalue, frames) {
    const inbeetwen = endvalue - startvalue;
    const step = inbeetwen/frames;
    return (currentframe) => {
        if (currentframe < frames) {
            element.position.x = startvalue + step*currentframe;
        }
    }
}