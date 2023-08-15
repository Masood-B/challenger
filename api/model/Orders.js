const db = require('../config')
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require ('../middleware/AuthenticateUser')
class Orders{
    fetchOrders(req, res){
        const query = `
        SELECT a.orderID, b.userID, c.bookID, a.orderData
        FROM Orders a
        INNER JOIN Users b ON a.userID = b.userID
        INNER JOIN Books c ON a.bookID = c.bookID
        `
        db.query(query, 
            (err, results)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    results
                })
        })
    }
    fetchOrder(req, res){
        const query = `
        SELECT orderID, userID, bookID, orderData
        From Orders
        Where orderID = ${req.params.id};
        `
        db.getConnection.query(query,
            (err, result)=>{
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    result
                })
            })
    }
    async registerOrder(req, res){
        const data = req.body
        //query
        const query = `
        INSERT INTO Orders
        SET ?;
        `
        db.query(query, 
            [data],
            (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "You have registered."
            })
        })
    }
    updateOrder(req, res){
        const query = `
        UPDATE Orders
        SET ?
        WHERE order ID = ?
        `
        db.query(query, 
            [req.body, req.params.id],
            (err)=>{
                if (err)throw err 
                res.json({
                    status: res.statusCode,
                    msg:"The order record was updated."

                })
            })
    }
    deleteOrder(req, res){
        const query = `
        DELETE FROM Orders
        WHERE orderID = ${req.params.id};
        `
        db.query(query,
            (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                msg:"A order record was removed"
            })
        })
    }
}
module.exports = Orders