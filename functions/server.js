import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import fs from 'fs';
import path from 'path';

var app = express();
app.use(cors());

const router = express.Router();


router.get('/api/productos', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/productos.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de productos' });
    }
    try {
      const productos = JSON.parse(data);
      res.json(productos);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de productos' });
    }
  });
});

router.get('/api/comentarios', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/comentarios.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de comentarios' });
    }
    try {
      const comentarios = JSON.parse(data);
      res.json(comentarios);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de comentarios' });
    }
  });
});

router.get('/api/categorias', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/categorias.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de categorias' });
    }
    try {
      const categorias = JSON.parse(data);
      res.json(categorias);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de categorias' });
    }
  });
});

router.get('/api/bodegas', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/bodegas.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de bodegas' });
    }
    try {
      const bodegas = JSON.parse(data);
      res.json(bodegas);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de bodegas' });
    }
  });
});

router.get('/api/detalle-venta', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/detalle_venta.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de detalle-venta' });
    }
    try {
      const detalle_venta = JSON.parse(data);
      res.json(detalle_venta);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de detalle-venta' });
    }
  });
});

router.get('/api/detalle-compra', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/detalle_compra.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de detalle-compra' });
    }
    try {
      const detalle_compra = JSON.parse(data);
      res.json(detalle_compra);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de detalle-compra' });
    }
  });
});

router.get('/api/usuarios', (req, res) => {
  const filePath = path.resolve(__dirname, 'data/usuarios.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al leer el archivo de usuarios' });
    }
    try {
      const usuarios = JSON.parse(data);
      res.json(usuarios);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error al procesar el archivo de usuarios' });
    }
  });
});

//METODOS POSTS

router.post('/api/productos', (req, res) => {
  const filePath = path.resolve('productos.json');
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
