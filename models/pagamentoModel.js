const db = require('../config/db');

const Pagamento = {
    create: (pagamento, callback) => {
        const query = 'INSERT INTO pagamento (nome, descricao) VALUES (?, ?)';
        db.query(query, [pagamento.nome, pagamento.descricao], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM pagamento WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, pagamento, callback) => {
        const query = 'UPDATE pagamento SET nome = ?, descricao = ? WHERE id = ?';
        db.query(query, [pagamento.nome, pagamento.descricao, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM pagamento WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM pagamento';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = Pagamento;