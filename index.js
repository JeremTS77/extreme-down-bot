const fs = require('fs')
const xml2js = require('xml2js')

const parser = new xml2js.Parser()

const xmlBuffFile = fs.readFileSync(__dirname+'/result')

parser.parseStringPromise(xmlBuffFile)
.then(data =>{
	console.log(data?.rss?.channel?.[0]?.item);
	console.log('done!');
})
