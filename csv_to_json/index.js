const csvFilePath = './customer-data.csv'
const fs = require('fs')
const csvtojson = require('csvtojson')
let arr = []

csvtojson()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        arr.push(jsonObj)
    })
    .then((error) => {
        if (error) return process.exit(1)
        console.log(arr)
        fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error) => {
            if (error) return process.exit(1)
            console.log('done')
            process.exit(0)
        })
    }
)