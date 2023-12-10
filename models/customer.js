//ไฟลที่แมปกับตัวข้อมูลใน Collection/Table ในฐานข้อมูล
const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

//สร้าง Schema ของ Collection ที่จะทำงานด้วย
const customerSchema = mongoose.Schema(
    {
        Firstname:{
            require: true,
            type: String
        },
        Lastname:{
            require: true,
            type: String
        },
        PhoneNumber:{
            require: true,
            type: String
        },
        Email:{
            require: true,
            type: String
        },
        CustomerActive:{
            require: true,
            type: Boolean
        }
    },{
        collection:'customer',
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('customer', customerSchema)