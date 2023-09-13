
// ------------ task 1.3 -----------------------
// Develop a program “Object Projection”. Input: any JSON object; prototype object. 
// Output: projected object. Projected object structure shall be intersection of 
// source object and prototype object structures. 
// Values of properties in projected object shall be the same as values of 
// respective properties in source object. 

// ------------ src, proto - initial data ------------------
const src = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        }
    },
    prop12: 12
};

const proto = {
    prop11: {
        prop25: null
    }
};

// for checking
// const result = {
//     prop11: {
//         prop22: {
//             prop31: 31,
//             prop32: 32
//         }
//     }
// }
// ----------- src, proto - for testing --------------
// const src = {
//     prop11: {
//         prop21: 21,
//         prop22: {
//             prop31: 31,
//             prop32: 32
//         }
//     },
//     prop12: 12,

//     prop13: {
//         prop41: 41,
//         prop42: {
//             prop51: 51,
//             prop52: 52
//         }
//     },
// };
// const proto = {
//     prop11: {
//         prop22: {}
//     },
//     prop12: null,
//     prop13: {
//         prop41: 55}
// };
// ----------------------------------------------------

// check if x type is obj
const isObj = x => typeof x === 'object'

const obj_intersection_func = (a, b) => {
    
    let result_obj = {}

    if (([a, b]).every(isObj)) 
        {   
            for (const [key] of Object.entries(a)) 
            {   
                let a_prop = a[key]
                let b_prop = b[key]

                if (b_prop === undefined) 
                {
                    break;
                }
                if (b_prop == null) {
                    result_obj[key]= a_prop;
                    continue;
                }

                if (Object.keys(b_prop).length === 0) {
                    result_obj[key] = a_prop
                    continue;
                }
                if (
                    isObj(a_prop) && b_prop !== undefined &&
                    b_prop != null && Object.keys(b_prop).length !== 0
                    ) {
                    result_obj[key] = obj_intersection_func(a_prop, b_prop)
                    // new check for empty result
                    if (JSON.stringify(result_obj[key]).length == 2) {
                        result_obj[key] = a_prop
                    } 
                } 
                else if (a_prop == b_prop) {
                    result_obj[key] = a_prop
                    console.log(`result=c(result_obj)}`)
                }
            }
        }
    return result_obj
}

let res = obj_intersection_func(src, proto)

console.log(`\x1b[36m \n Result_obj = ${JSON.stringify(res, null, 4)} \x1b[0m \n`)
