// index.js
const defaultAvatarUrl = '../../res/2.jpg'
Page({
  data:{
    isMe: true,
    toName:'Dears ',
    content:'hello world!',
    fromName:'Leon',
    avatarUrl: defaultAvatarUrl,
    nickname:'Leon',
  },
  onLoad(option){
    // console.log(option)
    const{
      value: value,
      toname : toName,
      content : content,
      fromname: fromName,
      avatarurl: avatarUrl,
      nickname: nickname,
    }=option;
    // debugger;
    this.setData({
      isMe: value !=='0',
      toName,
      content,
      fromName,
      avatarUrl,
      nickname
    })
    // debugger;
  },
  toNameInput(e) {
    const{value}=e.detail;
    this.setData({
      toName: value
    })
  },
  contentInput(e){
    const{value}=e.detail;
    this.setData({
      content: value
    })
  },
  fromNameInput(e){
    const{value}=e.detail;
    this.setData({
      fromName: value
    })
  },
  onShareAppMessage(){
    const{isMe,toName,content,fromName,avatarUrl,nickname}=this.data;
    
    return{
      title: 'happy',
      path: `pages/index/index?value=0&toname=${toName}&content=${content}&fromname=${fromName}&avatarurl=${avatarUrl}&nickname=${nickname}`,
      imageUrl: ''
    }
  },
  onChooseAvatar(e) {
    const {avatarUrl} = e.detail;
    this.setData({
      avatarUrl,
    })
  },
  nicknameInput(e){
    const {value} = e.detail;
    this.setData({
      nickname: value
    })
  }
})
