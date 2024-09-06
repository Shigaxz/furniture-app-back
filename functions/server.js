import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import fs from 'fs';
import path from 'path';

var app = express();
app.use(cors());

const router = express.Router();

router.get('/api/productos', (req, res) => {
  const filePath = path.resolve('data/productos.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de productos' });
    }
    res.json(JSON.parse(data));
  });
});

router.get('/api/comentarios', (req, res) => {
  const filePath = path.resolve('data/comentarios.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de comentarios' });
    }
    res.json(JSON.parse(data));
  });
});

router.get('/api/categorias', (req, res) => {
  const filePath = path.resolve('data/categorias.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de categorías' });
    }
    res.json(JSON.parse(data));
  });
});

router.get('/api/bodegas', (req, res) => {
  const filePath = path.resolve('data/bodegas.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de bodegas' });
    }
    res.json(JSON.parse(data));
  });
});

router.get('/api/detalle-ventas', (req, res) => {
  const filePath = path.resolve('data/detalle_ventas.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de detalles de venta' });
    }
    res.json(JSON.parse(data));
  });
});

router.get('/api/detalle-compras', (req, res) => {
  const filePath = path.resolve('data/detalle_compras.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de detalles de compra' });
    }
    res.json(JSON.parse(data));
  });
});

router.get('/api/usuarios', (req, res) => {
  const filePath = path.resolve('data/usuarios.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de usuarios' });
    }
    res.json(JSON.parse(data));
  });
});

//METODOS POSTS

router.post('/api/productos', (req, res) => {
  const filePath = path.resolve('data/productos.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de productos' });
    }

    const products = JSON.parse(data);
    const newProduct = req.body;
    products.push(newProduct);

    fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar el nuevo producto' });
      }
      res.status(201).json(newProduct);
    });
  });
});

router.post('/api/comentarios', (req, res) => {
  const filePath = path.resolve('data/comentarios.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de comentarios' });
    }

    const comments = JSON.parse(data);
    const newComment = req.body;
    comments.push(newComment);

    fs.writeFile(filePath, JSON.stringify(comments, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar el nuevo comentario' });
      }
      res.status(201).json(newComment);
    });
  });
});

router.post('/api/categorias', (req, res) => {
  const filePath = path.resolve('data/categorias.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de categorías' });
    }

    const categories = JSON.parse(data);
    const newCategory = req.body;
    categories.push(newCategory);

    fs.writeFile(filePath, JSON.stringify(categories, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar la nueva categoría' });
      }
      res.status(201).json(newCategory);
    });
  });
});

router.post('/api/bodegas', (req, res) => {
  const filePath = path.resolve('data/bodegas.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de bodegas' });
    }

    const warehouses = JSON.parse(data);
    const newWarehouse = req.body;
    warehouses.push(newWarehouse);

    fs.writeFile(filePath, JSON.stringify(warehouses, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar la nueva bodega' });
      }
      res.status(201).json(newWarehouse);
    });
  });
});

router.post('/api/detalle-venta', (req, res) => {
  const filePath = path.resolve('data/detalle_venta.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de detalles de venta' });
    }

    const salesDetails = JSON.parse(data);
    const newSaleDetail = req.body;
    salesDetails.push(newSaleDetail);

    fs.writeFile(filePath, JSON.stringify(salesDetails, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar el nuevo detalle de venta' });
      }
      res.status(201).json(newSaleDetail);
    });
  });
});

router.post('/api/detalle-compra', (req, res) => {
  const filePath = path.resolve('data/detalle_compra.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de detalles de compra' });
    }

    const purchasesDetails = JSON.parse(data);
    const newPurchaseDetail = req.body;
    purchasesDetails.push(newPurchaseDetail);

    fs.writeFile(filePath, JSON.stringify(purchasesDetails, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar el nuevo detalle de compra' });
      }
      res.status(201).json(newPurchaseDetail);
    });
  });
});

router.post('/api/usuarios', (req, res) => {
  const filePath = path.resolve('data/users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo de usuarios' });
    }

    const users = JSON.parse(data);
    const newUser = req.body;
    users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar el nuevo usuario' });
      }
      res.status(201).json(newUser);
    });
  });
});

app.use('/.netlify/functions/server', router);
export const handler = serverless(app);
