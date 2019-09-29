const fs = require('fs');
const path = require('path');
// const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const express = require('express');

const db = require('./test-db');


// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

// const fakeDb = require('./fakeDB');


app.get('/test/types', function (req, res) {

    res.send([
        {id: '111', name: '魅族 16s Pro', price: 2699.00, installment: '分期价 ￥241.77 × 12期', desc: '【24日上午10:00 部分版本现货开售】高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC',
        col:[
            {color:'黑之谧镜'},
            {color:'梦幻独角兽'},
            {color:'暮光森林'},
            {color:'白色物语'}
        ],
        sto:[
            {storage:'6+128GB'},
            {storage:'8+128GB'},
            {storage:'8+256GB'}
        ],
        pac:[
            {combo:'官方标配'},
            {combo:'碎屏保套餐'}
        ]},
        {id: '222', name: '魅族 Note9', price: 1199.00, installment: '分期价 ￥107.40 × 12期', desc: '【限时领券最高立减100】【限时6期免息】 骁龙675 | 后置4800万 | 前置2000万 | 独家定制水滴设计全面屏 | 4000mAh大容量电池 | 18W mCharge快充 | 吃鸡不卡 拍她更美',
        col:[
            {color:'幻黑'},
            {color:'皓白'},
            {color:'星耀蓝'}
        ],
        sto:[
            {storage:'4+64GB'},
            {storage:'6+64GB'},
            {storage:'4+128GB'}
        ],
        pac:[
            {combo:'官方标配'},
            {combo:'EP52Lite套餐'}
        ]}
    ])
});

app.get('/test/photo_list',function(req, res){
    res.send({
        '111':[
            {src:'https://openfile.meizu.com/group1/M00/07/6F/Cgbj0V15nniAIHcBAAYUWkUcZ9U699.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/50/Cgbj0F1nM7mARzF6AAac1MV8U6I589.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/68/Cgbj0V1nTR6ADYlFAAVz0L5q03I467.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/50/Cgbj0F1nM8KARRgaAAcxerJJqLs331.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/68/Cgbj0V1nM8eAVvyYAAk8o69GMRE732.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/50/Cgbj0F1nM8yAXvLSAAdT6edoRvw449.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/68/Cgbj0V1nM9WAIwOUAAbRUw3hmzU869.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/6A/Cgbj0V1o0JmAF8uqAAP9xDCAQoY941.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/68/Cgbj0V1nM-SAdqxsAAhkjFUIHK0706.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/50/Cgbj0F1nM-iAAZ04AA0K5DEegZw901.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/68/Cgbj0V1nM-2AeA-RAA5JG4JFeh4146.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/50/Cgbj0F1nM_GAM3t4AAnAnybOp88746.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/68/Cgbj0V1nM_WAFDnoAAE1marYnAw432.jpg'}
        ],
        '222':[
            {src:'https://openfile.meizu.com/group1/M00/07/13/Cgbj0Vx_aF6AJ9vuAAQOTclQhlo901.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/04/Cgbj0Fx_aGmABuvSAAYSHAJLPeE195.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/13/Cgbj0Vx_aHOAOTxCAAPSsrJUwa8382.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/1A/Cgbj0VyZyPmACZokAAZQyBgn2d4118.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/13/Cgbj0Vx_aJaAcxVrAAgX8tWb2CE252.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/04/Cgbj0Fx_aKCADtlTAAshbKeTyOg279.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/13/Cgbj0Vx_aKiAdN2kAAUKeCjq_ak769.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/04/Cgbj0Fx_aK-ANsuSAAYqK8JmS0o209.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/13/Cgbj0Vx_aLOAeJpyAAK2lb-udwQ861.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/04/Cgbj0Fx_aLmAHTPsAATgmBygK5k993.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/13/Cgbj0Vx_aMCAdqogAAQlXpZJpSg905.jpg'},
            {src:'https://openfile.meizu.com/group1/M00/07/04/Cgbj0Fx_aMSAU3n9AAD_Ldf_VZA169.jpg'}
        ]
    })
});

app.get('/test/swiper_list',function(req, res){
    res.send({
        '111':[
            {img:'https://openfile.meizu.com/group1/M00/07/5F/Cgbj0V1jhtuAa71pAAd3EPLUA9Q862.png480x480.jpg'},
            {img:'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhtKAcMb1AAKhnngaAZQ850.png480x480.jpg'},
            {img:'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhtmAXJUeAAQ7Y9jDbao501.png480x480.jpg'},
            {img:'https://openfile.meizu.com/group1/M00/07/5F/Cgbj0V1jhtWALpddAAImIpdb8sg331.png480x480.jpg'}
        ],
        '222':[
            {img:'https://openfile.meizu.com/group1/M00/07/03/Cgbj0Fx_ZLSAbkvCAAbf6BLA9aU577.png480x480.jpg'},
            {img:'https://openfile.meizu.com/group1/M00/07/02/Cgbj0Fx_ZKaAHKKzAANLbi_Jh9A009.png480x480.jpg'},
            {img:'https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK2AeLuGAAOGkMdE1x4601.png480x480.jpg'},
            {img:'https://openfile.meizu.com/group1/M00/07/03/Cgbj0Fx_ZK6AMuFWAAInES6rB6g430.png480x480.jpg'}
        ]
    })
});
//查询账号
app.post('/phone',async function (req,res) {
    let ret=await db.existUser(req.body.phone);
    console.log(ret);
    res.send(ret);
});

//查询账号和密码
app.post('/phoneword',async function (req,res) {
    let ret=await db.exist(req.body.phone,req.body.password);
    console.log(req.body.phone);
    console.log(typeof req.body.phone);
    console.log(req.body.password);
    console.log(ret);
    res.send(ret);
});



//插入账号密码
app.post('/phreg',async function (req,res) {
    let ret=await db.createUser(req.body);
    console.log(ret);
    res.send(ret);
});


app.listen(5000,function (err) {
    if (err){
        console.log(err);
    }
    console.log('正在监听5000');
});