const Product = require('./../models/product');

//เพิ่ม (Insert/Create/Add) ข้อมูลลง Collection: product
const insertProductCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปบันทึกลง Collection ใน MongoDB
    const product = new Product({
        ProductName: request.body.ProductName,
        ProductPrice: request.body.ProductPrice,
        ProductQuantity: request.body.ProductQuantity,
        ProductStatus: request.body.ProductStatus
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Product.create(product)
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't save data...." })
    }
}

//แก้ไช (Update) ข้อมูลลง Collection: product
const updateProductCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปแก้ไขลง Collection ใน MongoDB
    const product = new Product({
        _id: request.body._id,
        ProductName: request.body.ProductName,
        ProductPrice: request.body.ProductPrice,
        ProductQuantity: request.body.ProductQuantity,
        ProductStatus: request.body.ProductStatus
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Product.updateOne({ _id: product._id }, {
            $set: {
                ProductName: product.ProductName,
                ProductPrice: product.ProductPrice,
                ProductQuantity: product.ProductQuantity,
                ProductStatus: product.ProductStatus
            }
        })
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't update data...." })
    }
}

//ลบ (Delete) ข้อมูลลง Collection: product
const deleteProductCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปแก้ไขลง Collection ใน MongoDB
    const product = new Product({
        _id: request.body._id
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Product.deleteOne({ _id: product._id })
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't delete data...." })
    }
}

//ดึงข้อมูลทั้งหมดจาก Collection: product
const getAllProductCtrl = async (request, response) => {
    //ดึงข้อมูลทั้งหมดจาก Collection ใน MongoDB
    try {
        const result = await Product.find();
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't get data...." })
    }
}

module.exports = {
    insertProductCtrl,
    updateProductCtrl,
    deleteProductCtrl,
    getAllProductCtrl
}