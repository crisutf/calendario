# 📅 Calendario Escolar — Crisutf

Este proyecto es un **calendario escolar** diseñado para informar a los alumnos sobre **exámenes, entregas, excursiones, festivos** y otros eventos importantes del curso.

## 🌐 URLs del proyecto

- Página principal: **[https://crisu.qzz.io/](https://crisu.qzz.io/)**
- Alternativa si la primera se cae: **[https://crisutf.qzz.io/](https://crisutf.qzz.io/)**
- Alternativa 2 si la LaLiga (Mafia) bloquea la IP de Cloudflare de las 2 primeras webs: **[https://calendario-escolar.pages.dev](https://calendario-escolar.pages.dev)**

## 🛠️ Tecnologías utilizadas 🛠️

- **Vite**
- **React**
- **TailwindCSS**

La web es rápida, ligera y fácil de actualizar.

---

## ⚠ Problema detectado ⚠

- Este calendario al poner muchos eventos en el JSON da problemas en telefonos y da problemas de rendimiento re recomienda eliminar los eventos ya pasados
- Al tener el JSON en el codigo se quedaba en la cache haciendo que los usuarios no puedieran ver los eventos nuevos

---

## 🛠️ ¿Como arreglar los datos de la app? 🛠️
Para que se vean los cambios de esta version arreglada el 11/12/2025 se recomeinda borrar los datos de la web asi: enntas a configuracion de tu navegador y pinchas en *Configuración del sitio* --> *Ver permisos y datos almacenados en todos los sitios* --> eliminar datos de las 3 URL de la APP y ya esta

---

## ✏️ Cómo añadir o editar eventos ✏️

Los eventos están almacenados en el archivo:
> donde tu quieras o puede que en

```
src/data/events.json
```

Cada evento debe seguir esta estructura:

```json
{"date": "AAAA-MM-DD", "title": "Nombre del evento", "type": "event|exam|holiday"}
```

### 🔍 Explicación de los campos

- **date** → Fecha en formato `Año-Mes-Día` (ejemplo: `2025-03-18`).
- **title** → Nombre del evento.
- **type** → Tipo de evento:
  - `event` → Azul. Para entregas, excursiones o actividades.
  - `exam` → Rojo. Para exámenes.
  - `holiday` → Verde. Para festivos como Navidad, Semana Santa, etc.

### 📌 Ejemplo 
> Ahora se tiene que poner el JSON en otro server para que funcione

```json
{"date": "2025-02-14", "title": "Examen de Matemáticas", "type": "exam"}
```

---

## 📖 Descripción del proyecto

Este calendario permite a los alumnos estar informados de todo lo importante durante el curso. Su diseño simple y visual hace que sea fácil ver los días clave y mantenerse organizado.

---

## 🚀 Instalación y ejecución

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Construir para producción:

```bash
npm run build
```
