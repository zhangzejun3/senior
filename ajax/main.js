button.addEventListener('click', function (e) {
  let request = new XMLHttpRequest()
  request.onreadystatechange = ()=>{
    if(request.readyState ===4){
      console.log('请求响应完毕')
      if(request.status >=200&&request.status<300){
        console.log('s')
        console.log(typeof request.responseText)
        console.log(request.responseText)
        let string = request.responseText
        let object = window.JSON.parse(string)
        console.log(typeof object)
        console.log(object)
        console.log(typeof object.note)
        console.log(object.note)
        console.log(typeof object.note.to)
        console.log(object.note.to)
      }else if(request.status >=400){
        console.log('f')
      }
    }
  }
  request.open('GET', '/xxx')
  request.send()
})