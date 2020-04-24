import mock from 'mockjs'

mock.mock("http://520mg.com/mi/sms.php",function(){
	let result ={
		"code":0,
		"result":"ok"
	}
	return result
})

export {mock}