import type { Request, Response } from "express";
import type { ResultSetHeader, RowDataPacket } from "mysql2";
import { pool } from "../conf/dbConnection.ts";

export class ProductController {
    constructor() { /**/ }

    /*
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL DEFAULT 0,
        description TEXT,
        active BOOLEAN NOT NULL DEFAULT TRUE
    */

    public async getProducts(_req: Request, res: Response) {
        try {
            const [users] = await pool.execute(`select id, name, price, stock, description from products where active = TRUE`);

            if (!users){
                res.status(404).json({ message: `Products table not found` });
            }

            res.json(users);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error" });
        }
    }
    
    public async getProduct(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const [users] = await pool.execute<RowDataPacket[]>(`select name, price, stock, description, active from products where id = ?`, [id]);

            if (!users[0]) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }
            if (!users[0].active){
                res.status(404).json({ message: 'Product nonexistent' });
                return;
            }

            res.json(users);
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error" });
        }
    }

    public async createProduct(req: Request, res: Response) {
        try {
            const { name, price, stock, description } = req.body;
            await pool.execute(`insert into products (name, price, stock, description) values (?, ?, ?, ?)`, [name, price, stock, description]);
            res.status(201).json({ message: 'Product added' })
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error" });
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const price = Number(req.body.price);

            if (price && price < 0){
                res.status(400).json({ message: "Invalid price" });
                return;
            }

            const [result] = await pool.execute<ResultSetHeader>(
                `update products
                set
                    name = ?,
                    price = ?,
                    stock = ?,
                    description = ?
                where id = ?`, [req.body.name, req.body.price, req.body.stock, req.body.description, id]
            );

            if (result.affectedRows === 0) {
                res.status(404).json({ message: 'Product not found' });
                return;
            }

            res.json({ message: 'User updated' });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error" });
        }
    }
    
    public async deleteProduct(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const [result] = await pool.execute<ResultSetHeader>(
                "update products set active = FALSE where id = ?",
                [id]
            );
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            res.json({ message: "Product deleted" });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error" });
        }
    }

    public async changePriceProduct(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const price = Number(req.body.price);

            //Cheking the price, lil' bro </3
            if (!price || price < 0){
                res.status(400).json({ message: "Invalid price" });
                return;
            }

            const [result] = await pool.execute<ResultSetHeader>(
                "update products set price = ? where id = ?",
                [price, id]
            );
            if (result.affectedRows === 0) {
                res.status(404).json({ message: "Product not found" });
                return;
            }
            res.json({ message: "Product price updated" });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: "internal server error" });
        }
    }
}

