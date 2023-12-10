const Customer = require('./../models/customer');

//เพิ่ม (Insert/Create/Add) ข้อมูลลง Collection: customer
const insertCustomerCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปบันทึกลง Collection ใน MongoDB
    const customer = new Customer({
        Firstname: request.body.Firstname,
        Lastname: request.body.Lastname,
        PhoneNumber: request.body.PhoneNumber,
        Email: request.body.Email,
        CustomerActive: request.body.CustomerActive
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Customer.create(customer)
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't save data...." })
    }
}

//แก้ไช (Update) ข้อมูลลง Collection: customer
const updateCustomerCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปแก้ไขลง Collection ใน MongoDB
    const customer = new Customer({
        _id: request.body._id,
        Firstname: request.body.Firstname,
        Lastname: request.body.Lastname,
        PhoneNumber: request.body.PhoneNumber,
        Email: request.body.Email,
        CustomerActive: request.body.CustomerActive
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Customer.updateOne({ _id: customer._id }, {
            $set: {
                Firstname: request.body.Firstname,
                Lastname: request.body.Lastname,
                PhoneNumber: request.body.PhoneNumber,
                Email: request.body.Email,
                CustomerActive: request.body.CustomerActive
            }
        })
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't update data...." })
    }
}

//ลบ (Delete) ข้อมูลลง Collection: customer
const deleteCustomerCtrl = async (request, response) => {
    //นำข้อมูลที่ส่งมาเก็บใส่ Object เพื่อจะนำไปแก้ไขลง Collection ใน MongoDB
    const customer = new Customer({
        _id: request.body._id
    });

    //บันทึกลง Collection ใน MongoDB
    try {
        const result = await Customer.deleteOne({ _id: customer._id })
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't delete data...." })
    }
}

//ดึงข้อมูลทั้งหมดจาก Collection: customer
const getAllCustomerCtrl = async (request, response) => {
    //ดึงข้อมูลทั้งหมดจาก Collection ใน MongoDB
    try {
        const result = await Customer.find();
        response.json(result)
    } catch (error) {
        response.json({ "message": "Error: Can't get data...." })
    }
}

module.exports = {
    insertCustomerCtrl,
    updateCustomerCtrl,
    deleteCustomerCtrl,
    getAllCustomerCtrl
}