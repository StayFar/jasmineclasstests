// 3) Write a function that *convert*s the **height of a cube** in **meters** to the **volume of the cube** in **cubic meters**. Test at least 3 volumes

function convertHeightToVolume(height) {
    if (height <= 0) {
        throw new Error("Height must be a positive number.");
    }
    return Math.pow(height, 3);
}

export { convertHeightToVolume }