var baseUrl="https://api.xxpie.com/";var fetchVcodeUrl="api/photographer/mine/sendSMSVerificationCode";var loginUrl="api/photographer/mine/signIn";(function(){var e=new Vue({el:"#root",data:{phone_number:"15573232540",password:"123456"},methods:{getVCode:function(e){if(this.phone_number.length!==11){alert("手机号码格式不正确！");return}axios.post(baseUrl+fetchVcodeUrl,{mobile:this.phone_number,type:"PHOTOGRAPHER_SIGN_IN"}).then(function(e){if(e.status!=200){alert("验证码发送失败，请重新点击")}}).catch(function(e){alert(e)})},login:function(e){if(this.phone_number=="",this.code==""){alert("手机号和验证码不能为空！");return}axios.post(baseUrl+loginUrl,{username:this.phone_number,password:this.password}).then(function(e){if(e.status==200){window.localStorage.setItem("token",e.data.token);window.location.replace("./main.html")}else{code="";alert("验证码错误，请重新输入")}}).catch(function(e){alert("密码错误")})}}})})();