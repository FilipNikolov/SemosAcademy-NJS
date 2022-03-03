const fs = require("fs");




// const fileWrite = (file, content) => {
//     return new Promise((succsess, fail) => {
//         fs.writeFile(file, content, "utf8", err => {
//             if (err) return fail(err);
//             return succsess()
//         });
//     });
// };

// fileWrite('data.txt', 'Trying Something!')
//     .then(() => {
//         console.log('Succsessfully wrote to file!')
//     }).catch(err => {
//         console.log(err)
// //     });


// const fileRead = (file, utf8) => {
//     return new Promise((succsess, fail) => {
//         fs.readFile(file, utf8, err => {
//             if (err) return fail(err);
//             return succsess()
//         });
//     });
// };

// fileRead('data.txt', 'utf8')
//     .then((data) => {
//         console.log("Read Succsessfully!")
//     }).catch(err => {
//         console.log(err)
//     })












// const makedir = (nameofdir) => {
//     return new Promise((success, fail) => {
//         fs.mkdir(nameofdir, err => {
//             if (err) return fail(err);
//             return success()
//         });
//     });
// }

// makedir("Dora")
//     .then(() => {
//         console.log('Directory created successfully')
//     }).catch(err => {
//         console.log(err);
//     });


// const deleteDir = (dirname) => {
//     return new Promise((success, fail) => {
//         fs.rmdir(dirname, err => {
//             if (err) return fail(err);
//             return success()
//         });
//     });
// }

// deleteDir("Eno")
//     .then(() => {
//         console.log("Dir was deleted succ!")
//     }).catch(err => {
//         console.log(err)
//     })


// const Reader = (data) => {
//     return new Promise((succsess, fail) => {
//         fs.createReadStream(data, err => {
//             if (err) return fail(err);
//             return succsess()
//         });
//     })

// }



// Reader('data.txt')
//     .then(() => {
//         console.log("data.txt")
//     }).catch(err => {
//         console.log(err)
//     })






// reader.on('data', function(chunk) {
//     console.log(chunk.toString());
// });

const exist = (path) => {
    return new Promise((succsess, fail) => {
        fs.exist(path, err => {
            if (err) return fail(err);
            return succsess()
        });
    });
}

exist("data.txt")
    .then()