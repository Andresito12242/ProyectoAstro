import { defineCollection, z } from "astro:content";


const insumosCollection = defineCollection({
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    imagen: z.string(),
    estado: z.string(),
  }),
});

const usuariosCollection = defineCollection({
  schema: z.object({
    nombre: z.string(),
    rol: z.enum(["laboratorista", "administrativo", "monitor"]),
    correo: z.string().email(),
  }),
});

export const collections = {
  insumos: insumosCollection,
  usuarios: usuariosCollection,
};
