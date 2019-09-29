const MongoClient=require('mongodb').MongoClient;

const DB_URL='mongodb://localhost:27017';

let cacheClient;
function getClient() {
    return new Promise(function (resolve,reject) {
        if (cacheClient){
            resolve(cacheClient);
            return;
        }
        MongoClient.connect(DB_URL,{useNewUrlParser: true,  useUnifiedTopology: true },function (err,client) {
            if (err){
                console.log(err);
                reject(err);
                return;
            }
            console.log('一个连接客户端建立');
            cacheClient=client;
            resolve(cacheClient);
        });
    });
}


//数据库连接
async function getUsers() {
    const client=await getClient();
    const testDB=client.db('meizu');
    return new Promise(function (resolve,reject) {
        testDB.collection('user').toArray(function (err,result) {
            if (err){
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}


//数据库查询1
async function existUser(phone) {
    const client = await getClient();
    const testDB = client.db('meizu');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({"user_phone": phone}).toArray(function (err, result) {
            if (err) {
                return reject(err);
            }

            resolve(result.length > 0);
        });
    });
}


//数据库查询2
async function exist(phone,password) {
    const client = await getClient();
    const testDB = client.db('meizu');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({"user_phone": phone,"password":password}).toArray(function (err, result) {
            if (err) {
                return reject(err);
            }

            resolve(result.length>0);
        });
    });
}




//插入数据库
async function createUser(user) {
    const client = await getClient();
    const testDB = client.db('meizu');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').insertOne(user,function (err, cmdResult) {
            if (err) {
                return reject(err);
            }

            resolve({
                ok: true,
                id: cmdResult.insertedId
            });
        });
    });
}

module.exports={
    createUser,
    existUser,
    getUsers,
    exist
};