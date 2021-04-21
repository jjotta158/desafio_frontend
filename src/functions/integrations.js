import instance from './axiosInstance';

export const insertSeller = async (name, email) => {
    return await instance.post('/seller',{
        name:name,
        email:email
    })
}

export const getSellers = async () => {
    return await instance.get('/seller')
}

export const getSellerById = async (sellerId) => {
    return await instance.get('/seller/' + sellerId)
}

export const editSeller = async (sellerId,columnsToChange, values) => {
    return await instance.put('/seller/',{
        sellerId,
        columnsToChange,
        values
    })
}

export const deleteSeller = async (id) => {
    return await instance.delete('/seller/'+id)
}

export const getSales = async () => {
    return await instance.get('/sale/')
}

export const insertSale = async (id_seller, value) => {
    return await instance.post('/sale', {
        id_seller,
        value
    })
}

export const deleteSale = async (id) => {
    return await instance.delete('/sale/' + id)
}

export const editSale = async (id, columnsToChange, values) => {
    console.log(id)
    return await instance.put('/sale/', {
        id,
        columnsToChange,
        values
    })
}

export const getSaleById = async (saleId) => {
    return await instance.get('/sale/' + saleId)
}


