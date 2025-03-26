export const skinTones = {
    pale: {
        r: [220, 255],
        g: [200, 255],
        b: [190, 255]
    },
    fair: {
        r: [200, 240],
        g: [180, 230],
        b: [160, 210]
    },
    light: {
        r: [180, 220],
        g: [160, 210],
        b: [140, 190]
    },
    medium: {
        r: [140, 190],
        g: [100, 170],
        b: [80, 150]
    },
    tan: {
        r: [100, 160],
        g: [80, 140],
        b: [60, 120]
    },
    deep: {
        r: [60, 120],
        g: [40, 100],
        b: [30, 90]
    }
};

export const eyeColors = {
    blue: {
        r: [80, 255],
        g: [120, 255],
        b: [200, 255]
    },
    green: {
        r: [80, 170],
        g: [160, 255],
        b: [80, 200]
    },
    hazel: {
        r: [120, 200],
        g: [100, 200],
        b: [60, 140] 
    },
    brown: {
        r: [90, 180],
        g: [60, 140],
        b: [30, 100] 
    },
    dark_brown: {
        r: [50, 120],
        g: [40, 100],
        b: [20, 80]
    },
    gray: {
        r: [160, 220],
        g: [160, 220],
        b: [170, 230]
    }
};

export const lipColors = {
    soft_pink: {
        r: [200, 255],
        g: [150, 200],
        b: [170, 230] 
    },
    rosy: {
        r: [180, 240],
        g: [100, 180],
        b: [140, 200] 
    },
    deep_rose: {
        r: [150, 210],
        g: [80, 150], 
        b: [100, 180] 
    },
    nude: {
        r: [180, 230],
        g: [140, 200],
        b: [120, 180] 
    },
    mauve: {
        r: [140, 200],
        g: [100, 160],
        b: [120, 190] 
    },
    berry: {
        r: [120, 180],
        g: [40, 120], 
        b: [70, 150]  
    },
    deep_red: {
        r: [150, 255],
        g: [50, 120], 
        b: [50, 130]  
    },
    brown: {
        r: [100, 180],
        g: [60, 130], 
        b: [30, 100]  
    },
    dark_brown: {
        r: [60, 140], 
        g: [40, 100], 
        b: [30, 90]   
    }
};


/*
* returns [string, num]
* Compares the data color set from specific areas of the users face, with the color sets above
* and assigns that area a general color that'll be used to determine what kind of makeup suits
* the user.
*/

export const colorMatch = (userData, colorSet) => {
    let results = [];
    for (const [colorName, ranges] of Object.entries(colorSet)) {
        const [rMin, rMax] = ranges.r;
        const [gMin, gMax] = ranges.g;
        const [bMin, bMax] = ranges.b;

        userData.forEach((dataSet) => {
            const splitData = dataSet[0].split(',').map(Number);
            const [userR, userG, userB] = splitData;
            if (
                userR >= rMin && userR <= rMax &&
                userG >= gMin && userG <= gMax &&
                userB >= bMin && userB <= bMax
            ) {
                results.push(colorName)
            }
        });
    }

    let resultsCount = results.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    let sortedResults = Object.entries(resultsCount).sort((a, b) => b[1] - a[1]);

    return sortedResults[0];
}

export const makeupBySkinTone = {
    pale: {
        colors: ['Light Pink', 'Peach'],
        blush: { r: [140, 255], g: [60, 180], b: [0, 180] }
    },
    fair: {
        colors: ['Soft Peach', 'Rose'],
        blush: { r: [140, 250], g: [50, 170], b: [30, 160] }
    },
    light: { 
        colors: ['Peach', 'Soft Coral'],
        blush: { r: [130, 240], g: [40, 160], b: [20, 150] }
    },
    medium: {
        colors: ['Coral', 'Rosewood'],
        blush: { r: [120, 220], g: [40, 140], b: [20, 130] }
    },
    tan: {
        colors: ['Warm Coral', 'Terracotta'],
        blush: { r: [100, 200], g: [30, 120], b: [10, 110] }
    },
    deep: {
        colors: ['Brick Red', 'Deep Berry'],
        blush: { r: [80, 180], g: [20, 80], b: [10, 70] }  
    }
};

export const makeupByEyeColor = {
    blue: {
        colors: ['Warm Browns', 'Bronze', 'Peach'],
        eyeshadow: { r: [60, 255], g: [30, 150], b: [10, 100] }
    },
    green: {
        colors: ['Plum', 'Burgundy', 'Warm Gold'],
        eyeshadow: { r: [80, 220], g: [5, 40], b: [70, 140] }
    },
    hazel: {
        colors: ['Bronze', 'Copper', 'Olive Green'],
        eyeshadow: { r: [120, 255], g: [50, 180], b: [60, 120] }
    },
    brown: {
        colors: ['Warm Browns', 'Plum', 'Gold'],
        eyeshadow: { r: [70, 230], g: [20, 140], b: [10, 100] }
    },
    dark_brown: {
        colors: ['Copper', 'Burnt Orange', 'Plum'],
        eyeshadow: { r: [90, 210], g: [40, 120], b: [20, 90] }
    },
    gray: { 
        colors: ['Warm Taupe', 'Lavender', 'Silver'],
        eyeshadow: { r: [140, 255], g: [100, 230], b: [170, 255] }
    }    
};

export const makeupByLipColor = {
    soft_pink: {
        colors: ['Baby Pink', 'Blush Pink', 'Petal Pink'],
        lipstick: { r: [200, 255], g: [150, 200], b: [170, 230] } 
    },
    rosy: {
        colors: ['Warm Rose', 'Coral', 'Muted Coral'],
        lipstick: { r: [180, 240], g: [100, 180], b: [140, 200] } 
    },
    deep_rose: {
        colors: ['Dark Rose', 'Raspberry', 'Soft Berry'],
        lipstick: { r: [150, 210], g: [80, 150], b: [100, 180] } 
    },
    nude: {
        colors: ['Beige nude', 'Peachy Nude', 'Soft Caramel'],
        lipstick: { r: [180, 230], g: [140, 200], b: [120, 180] } 
    },
    mauve: {
        colors: ['Plum', 'Mauve', 'Lavender'],
        lipstick: { r: [140, 200], g: [100, 160], b: [120, 190] } 
    },
    berry: {
        colors: ['Deep Plum', 'Rich Wien', 'Blackberry'],
        lipstick: { r: [120, 180], g: [40, 120], b: [70, 150] }  
    },
    deep_red: {
        colors: ['Crimson', 'Brick Red', 'Cherry Red'],
        lipstick: { r: [150, 255], g: [50, 120], b: [50, 130] }  
    },
    brown: {
        colors: ['Chestnut', 'Cocoa', 'Mocha'],
        lipstick: { r: [100, 180], g: [60, 130], b: [30, 100] }  
    },
    dark_brown: {
        colors: ['Espresso', 'Chocolate', 'Mahogany'],
        lipstick: { r: [60, 140], g: [40, 100], b: [30, 90] }   
    }
};

const hexToRgb = (hex) => {
    const hexValues = hex.split(',');
    const firstHex = hexValues[0].replace(/^#/, '');
    const fullHex = firstHex.length === 3 ? firstHex.split('').map(char => char + char).join('') : firstHex;

    const bigint = parseInt(fullHex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
};

export const getMakeupRecommendations = (userInfo, makeup) => {
    const skinTone = userInfo[0][0];
    const eyeColor = userInfo[1][0];
    const lipColor = userInfo[2][0];

    const skinToneRange = makeupBySkinTone[skinTone].blush;
    const eyeColorRange = makeupByEyeColor[eyeColor].eyeshadow;
    const lipColorRange = makeupByLipColor[lipColor].lipstick;

    const recommendations = makeup.reduce((acc, products) => {
        products.forEach((product) => {
            product.product_colors.forEach((color) => {
                const { r, g, b } = hexToRgb(color.hex_value);
                
                if (product.product_type === 'blush'){
                    if (
                        r >= skinToneRange.r[0] && r <= skinToneRange.r[1] &&
                        g >= skinToneRange.g[0] && g <= skinToneRange.g[1] &&
                        b >= skinToneRange.b[0] && b <= skinToneRange.b[1]
                    ){
                        acc.blush.push(product);
                    }
                }

                if (product.product_type === 'lipstick'){
                    if (
                        r >= lipColorRange.r[0] && r <= lipColorRange.r[1] &&
                        g >= lipColorRange.g[0] && g <= lipColorRange.g[1] &&
                        b >= lipColorRange.b[0] && b <= lipColorRange.b[1]
                    ){
                        acc.lipstick.push(product);
                    }
                }

                if (product.product_type === 'eyeshadow'){
                    if (
                        r >= eyeColorRange.r[0] && r <= eyeColorRange.r[1] &&
                        g >= eyeColorRange.g[0] && g <= eyeColorRange.g[1] &&
                        b >= eyeColorRange.b[0] && b <= eyeColorRange.b[1]
                    ){
                        acc.eyeshadow.push(product);
                    }
                }
            });
        });
    
        return acc;
    }, { blush: [], lipstick: [], eyeshadow: [] });
    
    return recommendations;
}

// Skin Tone Data
// 0: (2) ['255,255,255,255', 808]
// 1: (2) ['227,227,227,255', 672]
// 2: (2) ['254,254,254,255', 525]
// 3: (2) ['226,226,226,255', 211]
// 4: (2) ['253,253,253,255', 209]

// Lips Data
// 0: (2) ['197,101,103,255', 3]
// 1: (2) ['208,106,110,255', 3]
// 2: (2) ['215,110,114,255', 3]
// 3: (2) ['223,164,146,255', 3]
// 4: (2) ['224,118,141,255', 3]

// Eyes Data
// 0: (2) ['202,142,124,255', 8]
// 1: (2) ['254,218,204,255', 6]
// 2: (2) ['198,137,119,255', 5]
// 3: (2) ['197,139,119,255', 5]
// 4: (2) ['199,139,120,255', 5]
