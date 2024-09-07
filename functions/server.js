import express from "express";
import cors from "cors";
import serverless from "serverless-http";

import { bodegas } from "./bodegas.js";
import { categorias } from "./categorias.js";
import { comentarios } from "./comentarios.js";
import { detalleVentas } from "./detalleVentas.js";
import { detalleCompras } from "./detalleCompras.js";
import { productos } from "./productos.js";
import { usuarios } from "./usuarios.js";

var app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();

// Metodo GET
export const handleGet = (array, req, res) => {
  res.json(array);
};
// Metodo GET:Id
export const handleGetId = (array, req, res) => {
  const { id } = req.params;
  const index = array.find((index) => index.id === parseInt(id));

  if (index) {
    res.json(index);
  } else {
    res.status(404).json({ error: "No se econtro ningun elemento" });
  }
};
// Metodo POST
export const handlePost = (array, req, res) => {
  const newIndex = req.body;
  const maxId = array.length > 0 ? Math.max(...array.map((e) => e.id)) : 0;
  newIndex.id = maxId + 1;
  array.push(newIndex);
  res.status(201).json(newIndex);
};
// Metodo DELETE
export const handleDelete = (array, req, res) => {
  const { id } = req.params;
  const index = array.findIndex((item) => item.id === parseInt(id));

  if (index !== -1) {
    const [deletedItem] = array.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ error: "No se econtro ningun elemento" });
  }
};
// Metodo PUT
export const handlePut = (array, req, res) => {
  const { id } = req.params;
  const index = array.findIndex((item) => item.id === parseInt(id));

  if (index !== -1) {
    const updatedItem = { ...array[index], ...req.body, id: parseInt(id) };
    array[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ error: "No se econtro ningun elemento" });
  }
};

// Creacion de rutas para cada API
router.get("/api/productos", (req, res) => handleGet(productos, req, res));
router.post("/api/productos", (req, res) => handlePost(productos, req, res));
router.delete("/api/productos/:id", (req, res) => handleDelete(productos, req, res));
router.put('/api/productos/:id', (req, res) => handlePut(productos, req, res));
router.get('/api/productos/:id', (req, res) => handleGetId(productos, req, res));

router.get("/api/comentarios", (req, res) => handleGet(comentarios, req, res));
router.post("/api/comentarios", (req, res) => handlePost(comentarios, req, res));
router.delete("/api/comentarios/:id", (req, res) =>handleDelete(comentarios, req, res));
router.put('/api/comentarios/:id', (req, res) => handlePut(comentarios, req, res));
router.get('/api/comentarios/:id', (req, res) => handleGetId(comentarios, req, res));

router.get("/api/bodegas", (req, res) => handleGet(bodegas, req, res));
router.post("/api/bodegas", (req, res) => handlePost(bodegas, req, res));
router.delete("/api/bodegas/:id", (req, res) => handleDelete(bodegas, req, res));
router.put('/api/bodegas/:id', (req, res) => handlePut(bodegas, req, res));
router.get('/api/bodegas/:id', (req, res) => handleGetId(bodegas, req, res));

router.get("/api/categorias", (req, res) => handleGet(categorias, req, res));
router.post("/api/categorias", (req, res) => handlePost(categorias, req, res));
router.delete("/api/categorias/:id", (req, res) => handleDelete(categorias, req, res));
router.put('/api/categorias/:id', (req, res) => handlePut(categorias, req, res));
router.get('/api/categorias/:id', (req, res) => handleGetId(categorias, req, res));

router.get("/api/usuarios", (req, res) => handleGet(usuarios, req, res));
router.post("/api/usuarios", (req, res) => handlePost(usuarios, req, res));
router.delete("/api/usuarios/:id", (req, res) => handleDelete(usuarios, req, res));
router.put('/api/usuarios/:id', (req, res) => handlePut(usuarios, req, res));
router.get('/api/usuarios/:id', (req, res) => handleGetId(usuarios, req, res));

router.get("/api/detalle-ventas", (req, res) => handleGet(detalleVentas, req, res));
router.post("/api/detalle-ventas", (req, res) => handlePost(detalleVentas, req, res));
router.delete("/api/detalle-ventas/:id", (req, res) => handleDelete(detalleVentas, req, res));
router.put('/api/detalle-ventas/:id', (req, res) => handlePut(detalleVentas, req, res));
router.get('/api/detalle-ventas/:id', (req, res) => handleGetId(detalleVentas, req, res));

router.get("/api/detalle-compras", (req, res) => handleGet(detalleCompras, req, res));
router.post("/api/detalle-compras", (req, res) =>handlePost(detalleCompras, req, res));
router.delete("/api/detalle-compras/:id", (req, res) => handleDelete(detalleCompras, req, res));
router.put('/api/detalle-compras/:id', (req, res) => handlePut(detalleCompras, req, res));
router.get('/api/detalle-compras/:id', (req, res) => handleGetId(detalleCompras, req, res));

app.use("/.netlify/functions/server", router);
export const handler = serverless(app);
