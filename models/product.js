//ไฟลที่แมปกับตัวข้อมูลใน Collection/Table ในฐานข้อมูล
const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

//สร้าง Schema ของ Collection ที่จะทำงานด้วย
const productSchema = mongoose.Schema(
    {
        ProductName:{
            require: true,
            type: String
        },
        ProductPrice:{
            require: true,
            type: Decimal128
        },
        ProductQuantity:{
            require: true,
            type: Number
        },
        ProductStatus:{
            require: true,
            type: Boolean
        }
    },{
        collection:'product',
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('product', productSchema)