const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const axios = require('axios');

const main = async ()=>{
	const axiosInstance = new axios.create({
		headers: {
			'authority': 'www.extreme-down.lol',
			'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
			'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
			'cache-control': 'max-age=0',
			'cookie': 'PHPSESSID=4fdsrf8p87m4okme0rabthhch3; _gid=GA1.2.1909275845.1667735249; cf_clearance=265ec3f1ddc7d3bbbb643d04cc4b25377d131e1a-1667752985-0-150; ed_last_visit=1667756585; _ga_QQC3DW0NQ6=GS1.1.1667748291.4.1.1667752984.0.0.0; _gat_gtag_UA_98317451_1=1; _ga_L898H8XW5T=GS1.1.1667748291.4.1.1667752984.0.0.0; _ga=GA1.1.902563598.1667438107',
			'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
			'sec-ch-ua-mobile': '?0',
			'sec-ch-ua-platform': '"Windows"',
			'sec-fetch-dest': 'document',
			'sec-fetch-mode': 'navigate',
			'sec-fetch-site': 'same-origin',
			'sec-fetch-user': '?1',
			'upgrade-insecure-requests': '1',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
		}
	})
	const response = await axiosInstance.get('https://www.extreme-down.lol/rss.xml');
	const data = await response.data


	const doc = await parser.parseStringPromise(data)

	const filmList = doc?.rss?.channel?.[0]?.item
	console.log('filmList : ', filmList);

	const link = filmList?.[0]?.link
	console.log('response : ', link)

}


main()
