/***

Thanks to & modified from 
1. https://gist.githubusercontent.com/Hyseen/b06e911a41036ebc36acf04ddebe7b9a/raw/nf_check.js
2. https://github.com/AtlantisGawrGura/Quantumult-X-Scripts/blob/main/media.js
3. https://github.com/CoiaPrant/MediaUnlock_Test/blob/main/check.sh


For Quantumult-X 598+ ONLY!!
2022-02-22 - 14:20

[task_local]

event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/streaming-ui-check.js, tag=流媒体-解锁查询, img-url=checkmark.seal.system, enabled=true



@XIAO_KOP

**/

const BASE_URL = 'https://www.netflix.com/title/';
const BASE_URL_YTB = "https://www.youtube.com/premium";
const BASE_URL_DISNEY = 'https://www.disneyplus.com';
const FILM_ID = 81215567

const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 
const policy_name = "Netflix" //填入你的 netflix 策略组名

const arrow = " ➟ "

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'

// 即将登陆
const STATUS_COMING = 2
// 支持解锁
const STATUS_AVAILABLE = 1
// 不支持解锁
const STATUS_NOT_AVAILABLE = 0
// 检测超时
const STATUS_TIMEOUT = -1
// 检测异常
const STATUS_ERROR = -2

var opts = {
  policy: $environment.params
};

var opts1 = {
  policy: $environment.params,
  redirection: false
};


var flags = new Map([[ "AC" , "🇦🇨" ] ,["AE","🇦🇪"], [ "AF" , "🇦🇫" ] , [ "AI" , "🇦🇮" ] , [ "AL" , "🇦🇱" ] , [ "AM" , "🇦🇲" ] , [ "AQ" , "🇦🇶" ] , [ "AR" , "🇦🇷" ] , [ "AS" , "🇦🇸" ] , [ "AT" , "🇦🇹" ] , [ "AU" , "🇦🇺" ] , [ "AW" , "🇦🇼" ] , [ "AX" , "🇦🇽" ] , [ "AZ" , "🇦🇿" ] , ["BA", "🇧🇦"], [ "BB" , "🇧🇧" ] , [ "BD" , "🇧🇩" ] , [ "BE" , "🇧🇪" ] , [ "BF" , "🇧🇫" ] , [ "BG" , "🇧🇬" ] , [ "BH" , "🇧🇭" ] , [ "BI" , "🇧🇮" ] , [ "BJ" , "🇧🇯" ] , [ "BM" , "🇧🇲" ] , [ "BN" , "🇧🇳" ] , [ "BO" , "🇧🇴" ] , [ "BR" , "🇧🇷" ] , [ "BS" , "🇧🇸" ] , [ "BT" , "🇧🇹" ] , [ "BV" , "🇧🇻" ] , [ "BW" , "🇧🇼" ] , [ "BY" , "🇧🇾" ] , [ "BZ" , "🇧🇿" ] , [ "CA" , "🇨🇦" ] , [ "CF" , "🇨🇫" ] , [ "CH" , "🇨🇭" ] , [ "CK" , "🇨🇰" ] , [ "CL" , "🇨🇱" ] , [ "CM" , "🇨🇲" ] , [ "CN" , "🇨🇳" ] , [ "CO" , "🇨🇴" ] , [ "CP" , "🇨🇵" ] , [ "CR" , "🇨🇷" ] , [ "CU" , "🇨🇺" ] , [ "CV" , "🇨🇻" ] , [ "CW" , "🇨🇼" ] , [ "CX" , "🇨🇽" ] , [ "CY" , "🇨🇾" ] , [ "CZ" , "🇨🇿" ] , [ "DE" , "🇩🇪" ] , [ "DG" , "🇩🇬" ] , [ "DJ" , "🇩🇯" ] , [ "DK" , "🇩🇰" ] , [ "DM" , "🇩🇲" ] , [ "DO" , "🇩🇴" ] , [ "DZ" , "🇩🇿" ] , [ "EA" , "🇪🇦" ] , [ "EC" , "🇪🇨" ] , [ "EE" , "🇪🇪" ] , [ "EG" , "🇪🇬" ] , [ "EH" , "🇪🇭" ] , [ "ER" , "🇪🇷" ] , [ "ES" , "🇪🇸" ] , [ "ET" , "🇪🇹" ] , [ "EU" , "🇪🇺" ] , [ "FI" , "🇫🇮" ] , [ "FJ" , "🇫🇯" ] , [ "FK" , "🇫🇰" ] , [ "FM" , "🇫🇲" ] , [ "FO" , "🇫" ] , [ "FR" , "🇫🇷" ] , [ "GA" , "🇬🇦" ] , [ "GB" , "🇬🇧" ] , [ "HK" , "🇭🇰" ] ,["HU","🇭🇺"], [ "ID" , "🇮🇩" ] , [ "IE" , "🇮🇪" ] , [ "IL" , "🇮🇱" ] , [ "IM" , "🇮🇲" ] , [ "IN" , "🇮🇳" ] , [ "IS" , "🇮🇸" ] , [ "IT" , "🇮🇹" ] , [ "JP" , "🇯🇵" ] , [ "KR" , "🇰🇷" ] , [ "LU" , "🇱🇺" ] , [ "MO" , "🇲🇴" ] , [ "MX" , "🇲🇽" ] , [ "MY" , "🇲🇾" ] , [ "NL" , "🇳🇱" ] , [ "PH" , "🇵🇭" ] , [ "RO" , "🇷🇴" ] , [ "RS" , "🇷🇸" ] , [ "RU" , "🇷🇺" ] , [ "RW" , "🇷🇼" ] , [ "SA" , "🇸🇦" ] , [ "SB" , "🇧" ] , [ "SC" , "🇸🇨" ] , [ "SD" , "🇸🇩" ] , [ "SE" , "🇸🇪" ] , [ "SG" , "🇸🇬" ] , [ "TH" , "🇹🇭" ] , [ "TN" , "🇹🇳" ] , [ "TO" , "🇹🇴" ] , [ "TR" , "🇹🇷" ] , [ "TV" , "🇹🇻" ] , [ "TW" , "🇨🇳" ] , [ "UK" , "🇬🇧" ] , [ "UM" , "🇺🇲" ] , [ "US" , "🇺🇸" ] , [ "UY" , "🇺🇾" ] , [ "UZ" , "🇺🇿" ] , [ "VA" , "🇻🇦" ] , [ "VE" , "🇻🇪" ] , [ "VG" , "🇻🇬" ] , [ "VI" , "🇻🇮" ] , [ "VN" , "🇻🇳" ] , [ "ZA" , "🇿🇦"]])

let result = {
  "title": '    📺  流媒体服务查询',
  "YouTube": '<b>YouTube: </b>检测失败，请重试 ❗️',
  "Netflix": '<b>Netflix: </b>检测失败，请重试 ❗️',
  "Disney": "<b>Disneyᐩ: </b>检测失败，请重试 ❗️",
  //"Google": "Google 定位: 检测失败，请重试"

}
const message = {
  action: "get_policy_state",
  content: $environment.params
};

;(async () => {
  testYTB()
  let [{ region, status }] = await Promise.all([testDisneyPlus(),testNf(FILM_ID)])
  console.log(result["Netflix"])
  console.log(`testDisneyPlus: region=${region}, status=${status}`)
  if (status==STATUS_COMING) {
    //console.log(1)
    result["Disney"] = "<b>Disneyᐩ:</b> 即将登陆 ➟ "+'⟦'+flags.get(region.toUpperCase())+"⟧ ⚠️"
  } else if (status==STATUS_AVAILABLE){
    //console.log(2)
    result["Disney"] = "<b>Disneyᐩ:</b> 支持 ➟ "+'⟦'+flags.get(region.toUpperCase())+"⟧ 🎉"
    console.log(result["Disney"])
  } else if (status==STATUS_NOT_AVAILABLE) {
    //console.log(3)
    result["Disney"] = "<b>Disneyᐩ:</b> 未支持 🚫 "
  } else if (status==STATUS_TIMEOUT) {
    result["Disney"] = "<b>Disneyᐩ:</b> 检测超时 🚦 "
  }

  let content = "------------------------------"+"</br>"+([result["YouTube"],result["Netflix"],result["Disney"]]).join("</br></br>")
  content = content + "</br>------------------------------</br>"+"<font color=#CD5C5C >"+"<b>节点</b> ➟ " + $environment.params+ "</font>"
  content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
//  cnt = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` +'----------------------</br></br>'+result["Disney"]+'</br></br>----------------------</br>'+$environment.params + `</p>`
$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
      console.log(resolve.error);
      $done()
    }
    if (resolve.ret) {
      let output=JSON.stringify(resolve.ret[message.content])? JSON.stringify(resolve.ret[message.content]).replace(/\"|\[|\]/g,"").replace(/\,/g," ➟ ") : $environment.params
      let content = "--------------------------------------</br>"+(result["Disney"],result["Netflix"],result["YouTube"]]).join("</br></br>")
      content = content + "</br>--------------------------------------</br>"+"<font color=#CD5C5C>"+"<b>节点</b> ➟ " + output+ "</font>"
      content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
      //$notify(typeof(output),output)
      console.log(output);
      $done({"title":result["title"],"htmlMessage":content})
      
    }
    //$done();|
  }, reject => {
    // Normally will never happen.
    $done();
  });  
  //$done({"title":result["title"],"htmlMessage":content})
})()
.finally(() => {
  
  $configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
      console.log(resolve.error);
      $done()
    }
    if (resolve.ret) {
      let output=JSON.stringify(resolve.ret[message.content])? JSON.stringify(resolve.ret[message.content]).replace(/\"|\[|\]/g,"").replace(/\,/g," ➟ ") : $environment.params
      let content = "--------------------------------------</br>"+(result["Disney"],result["Netflix"],result["YouTube"]]).join("</br></br>")
      content = content + "</br>--------------------------------------</br>"+"<font color=#CD5C5C>"+"<b>节点</b> ➟ " + output+ "</font>"
      content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
      //$notify(typeof(output),output)
      console.log(output);
      $done({"title":result["title"],"htmlMessage":content})
      
    }
    //$done();|
  }, reject => {
    // Normally will never happen.
    $done();
  }); 
  
    $done({"title":result["title"],"htmlMessage":`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">`+'----------------------</br></br>'+"🚥 检测异常"+'</br></br>----------------------</br>'+ output + `</p>`})
}
  );


async function testDisneyPlus() {
  try {
    let { region, cnbl } = await Promise.race([testHomePage(), timeout(7000)])
    console.log(`homepage: region=${region}, cnbl=${cnbl}`)
    // 即将登陆
//  if (cnbl == 2) {
//    return { region, status: STATUS_COMING }
//  }
    let { countryCode, inSupportedLocation } = await Promise.race([getLocationInfo(), timeout(7000)])
    console.log(`getLocationInfo: countryCode=${countryCode}, inSupportedLocation=${inSupportedLocation}`)
    
    region = countryCode ?? region
    console.log( "region:"+region)
    // 即将登陆
    if (inSupportedLocation === false || inSupportedLocation === 'false') {
      return { region, status: STATUS_COMING }
    } else {
      // 支持解锁
      return { region, status: STATUS_AVAILABLE }
    }
    
  } catch (error) {
    console.log("error:"+error)
    
    // 不支持解锁
    if (error === 'Not Available') {
      console.log("不支持")
      return { status: STATUS_NOT_AVAILABLE }
    }
    
    // 检测超时
    if (error === 'Timeout') {
      return { status: STATUS_TIMEOUT }
    }
    
    return { status: STATUS_ERROR }
  } 
  
}

function getLocationInfo() {
  return new Promise((resolve, reject) => {
    let opts0 = {
      url: 'https://disney.api.edge.bamgrid.com/graph/v1/device/graphql',
      method: "POST",
      opts: opts,
      headers: {
        'Accept-Language': 'en',
        "Authorization": 'ZGlzbmV5JmJyb3dzZXImMS4wLjA.Cu56AgSfBTDag5NiRA81oLHkDZfu5L3CKadnefEAY84',
        'Content-Type': 'application/json',
        'User-Agent': UA,
      },
      body: JSON.stringify({
        query: 'mutation registerDevice($input: RegisterDeviceInput!) { registerDevice(registerDevice: $input) { grant { grantType assertion } } }',
        variables: {
          input: {
            applicationRuntime: 'chrome',
            attributes: {
              browserName: 'chrome',
              browserVersion: '94.0.4606',
              manufacturer: 'microsoft',
              model: null,
              operatingSystem: 'windows',
              operatingSystemVersion: '10.0',
              osDeviceIds: [],
            },
            deviceFamily: 'browser',
            deviceLanguage: 'en',
            deviceProfile: 'windows',
          },
        },
      }),
    }
    
    $task.fetch(opts0).then(response => {
      let data = response.body
      console.log("locationinfo:"+response.statusCode)
      if (response.statusCode !== 200) {
        console.log('getLocationInfo: ' + data)
        reject('Not Available')
        return
      } else {let {
        inSupportedLocation,
        location: { countryCode },
      } = JSON.parse(data)?.extensions?.sdk?.session
        resolve({ inSupportedLocation, countryCode })
      }
    }, reason => {
      reject('Error')
      return
    })
  })
}

function testHomePage() {
  return new Promise((resolve, reject) => {
    let opts0 = {
      url: 'https://www.disneyplus.com/',
      opts: opts,
      headers: {
        'Accept-Language': 'en',
        'User-Agent': UA,
      },
    }
    $task.fetch(opts0).then(response => {
      let data = response.body
      console.log("homepage"+response.statusCode)
      if (response.statusCode !== 200 || data.indexOf('unavailable') !== -1) {
        reject('Not Available')
        return
      } else {
        let match = data.match(/Region: ([A-Za-z]{2})[\s\S]*?CNBL: ([12])/)
        if (!match) {
          resolve({ region: '', cnbl: '' })
          return
        } else {
          let region = match[1]
          let cnbl = match[2]
          //console.log("homepage"+region+cnbl)
          resolve({ region, cnbl })
        }
      }
    }, reason => {
      reject('Error')
      return
    })
  })
}

function timeout(delay = 5000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Timeout')
    }, delay)
  })
}


function testNf(filmId) {
  return new Promise((resolve, reject) =>{
    let option = {
      url: BASE_URL + filmId,
      opts: opts,
      timeout: 5200,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $task.fetch(option).then(response => {
      //$notify("nf:"+response.statusCode)
      console.log("nf:"+response.statusCode)
      if (response.statusCode === 404) {
        
        result["Netflix"] = "<b>Netflix: </b>支持自制剧集 ⚠️"
        console.log("nf:"+result["Netflix"])
        resolve('Not Found')
        return 
      } else if (response.statusCode === 403) {
        
        //console.log("nfnf")
        result["Netflix"] = "<b>Netflix: </b>未支持 🚫"
        console.log("nf:"+result["Netflix"])
        //$notify("nf:"+result["Netflix"])
        resolve('Not Available')
        return
      } else if (response.statusCode === 200) {
        let url = response.headers['X-Originating-URL']
        let region = url.split('/')[3]
        region = region.split('-')[0]
        if (region == 'title') {
          region = 'us'
        }
        console.log("nf:"+region)
        result["Netflix"] = "<b>Netflix: </b>完整支持"+arrow+ "⟦"+flags.get(region.toUpperCase())+"⟧ 🎉"
        //$notify("nf:"+result["Netflix"])
        resolve("nf:"+result["Netflix"])
        return 
      }
    }, reason => {
      result["Netflix"] = "<b>Netflix: </b>检测超时 🚦"
      console.log(result["Netflix"])
      resolve("timeout")
    }
    )
  }
  )
}

function testYTB() { 
    let option = {
      url: BASE_URL_YTB,
      opts: opts,
      timeout: 2800,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
      },
    }
    $task.fetch(option).then(response=> {
      let data = response.body
      console.log("ytb:"+response.statusCode)
      if (response.statusCode !== 200) {
        //reject('Error')
        result["YouTube"] = "<b>YouTube Premium: </b>检测失败 ❗️"
      } else if (data.indexOf('Premium is not available in your country') !== -1) {
          //resolve('Not Available')
        result["YouTube"] = "<b>YouTube Premium: </b>未支持 🚫"
      } else if (data.indexOf('Premium is not available in your country') == -1) {//console.log(data.split("countryCode")[1])
      let region = ''
      let re = new RegExp('"GL":"(.*?)"', 'gm')
      let ret = re.exec(data)
      if (ret != null && ret.length === 2) {
        region = ret[1]
      } else if (data.indexOf('www.google.cn') !== -1) {
        region = 'CN'
      } else {
        region = 'US'
      }
      //resolve(region)
      result["YouTube"] = "<b>YouTube Premium: </b>支持 "+arrow+ "⟦"+flags.get(region.toUpperCase())+"⟧ 🎉"
      console.log("ytb:"+region+ result["YouTube"])
      }
    }, reason => {
      result["YouTube"] = "<b>YouTube Premium: </b>检测超时 🚦"
      //resolve("timeout")
    })
}

