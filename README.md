# 🔗 QueryZero: Limpiador de URLs con Ingeniería de Precisión
# 🔗 QueryZero: Precision Engineering URL Cleaner

![Versión](https://img.shields.io/badge/Versi%C3%B3n-1.0.0-blue.svg)
![Estado](https://img.shields.io/badge/Estado-Producci%C3%B3n-success.svg)
![Licencia](https://img.shields.io/badge/Licencia-MIT-lightgrey.svg)
![Stack](https://img.shields.io/badge/Stack-HTML%2FCSS%2FJS-orange.svg)

## 🇪🇸 Descripción General

**QueryZero** es la herramienta definitiva para eliminar parámetros de seguimiento no deseados (como `utm_source`, `fbclid`, `ref`, etc.) de cualquier URL. Diseñado bajo principios de **Ingeniería de Software y Privacidad por Diseño**, garantiza enlaces limpios, cortos y seguros.

* **Procesamiento 100% en Cliente:** Cero envío de datos a servidores. Su privacidad está garantizada.
* **Velocidad:** Limpieza instantánea.
* **Nombre Técnico:** QueryZero comunica la eliminación de los *Query Parameters* (`?`) para llevarlos a cero.

## 🇺🇸 Overview

**QueryZero** is the ultimate tool for stripping unwanted tracking parameters (such as `utm_source`, `fbclid`, `ref`, etc.) from any URL. Engineered under principles of **Software Engineering and Privacy by Design**, it ensures clean, short, and secure links.

* **100% Client-Side Processing:** Zero data submission to servers. Your privacy is guaranteed.
* **Speed:** Instant, lightning-fast cleaning.
* **Technical Name:** QueryZero conveys the removal of *Query Parameters* (`?`) to bring them down to zero.

---

## 🚀 Características Principales / Key Features

| Icono | Característica (ES) | Key Feature (EN) |
| :---: | :--- | :--- |
| ✨ | **Limpieza de Precisión** | **Precision Purge** |
| ⚡️ | **Ejecución Instantánea** | **Instant Execution** |
| 🔒 | **Privacidad Absoluta** | **Absolute Privacy** |
| ⚙️ | **Código Modular** | **Modular Codebase** |

---

## 🛠️ Guía de Uso / Usage Guide

1.  **Copiar:** Copia el enlace largo y "sucio" (con tracking).
2.  **Pegar:** Pégalo en la caja de texto en la web de QueryZero.
3.  **Acción:** Haz clic en **"Limpiar Enlace" / "Clean Link"**. El resultado es instantáneo.

### Ejemplo / Example

| Enlace Sucio (Before) | Enlace Limpio (After) |
| :--- | :--- |
| `https://www.amazon.es/item?pf_rd_p=1234&fbclid=ab-c-123456&utm_campaign=winter` | `https://www.amazon.es/item` |
| `https://youtu.be/video_id?si=12345&utm_medium=social` | `https://youtu.be/video_id` |

---

## 🧑‍💻 Guía de Despliegue / Deployment Guide

This project is built for professional, static deployment on platforms like Vercel.

**Stack:** HTML, CSS, Vanilla JavaScript.

1.  **Clone Repository:** `git clone ...`
2.  **Deploy to Vercel:** Simply connect the repository. Vercel automatically deploys the static files.

---

## 📄 Licencia / License

This project is licensed under the **MIT License**.

Este proyecto está bajo la Licencia **MIT**. Consulte el archivo `LICENSE.md` para ver los detalles completos. See the `LICENSE.md` file for full details.

---

## 💡 Contacto

Desarrollado por **Juan Martín Arrayago** (Web Development & Robotics/IoT Engineering).

* **https://tinchodev.it.com/**
* **https://github.com/ArrayagoM/linkpurge**

---

## 2. Archivo index.html (Español)

Se actualiza el `index.html` con el nombre **QueryZero**.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QueryZero | Limpiador de URLs de Tracking Extremo</title>
    <meta name="description" content="QueryZero elimina automáticamente utm_source, fbclid y todos los parámetros de seguimiento. Ingeniería de precisión, rápido y privado.">
    <link rel="stylesheet" href="src/css/style.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)' viewBox='0 0 100 100'><text y='90' font-size='90'>🔗</text></svg>">
</head>
<body>
    <header>
        <h1>QueryZero</h1>
        <a href="index-en.html" class="lang-switch">English</a>
    </header>
    <main>
        <section id="input-section">
            <textarea id="urlInput" placeholder="Pega aquí tu enlace largo y sucio (con utm_, fbclid, etc.)." rows="5"></textarea>
            <button id="cleanButton" class="cta-button">
                Limpiar Enlace
                <span id="spinner" class="spinner"></span>
            </button>
        </section>

        <section id="result-section" class="hidden">
            <h2><span class="icon-clean">✨</span> Enlace Purificado</h2>
            <input type="text" id="resultUrl" readonly>
            <button id="copyButton" class="secondary-button">Copiar</button>
        </section>
        
        <p id="message"></p>
    </main>
    <footer>
        <p>© 2025 QueryZero. Desarrollado con Ingeniería de Precisión por Juan Martín Arrayago.</p>
    </footer>

    <script src="src/js/cleaner.js" defer></script>
    <script src="src/js/main.js" defer></script>
</body>
</html>
