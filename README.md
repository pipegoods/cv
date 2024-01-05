# Curriculum Vitae con Astro 🚀

Currículum minimalista desarrollado con Astro y Tailwind CSS, inspirado en el proyecto de [BartoszJarocki](https://github.com/BartoszJarocki/cv).

Iconos de [Lucide.dev](https://lucide.dev/)
Componentes como Card o Chip de [Flowbite](https://flowbite.com/)

## Características
- Construido con Astro, Tailwind CSS y TypeScript.
- [Archivo de configuración](https://github.com/pipegoods/cv/blob/master/src/data/resume.ts) tipado según el estándar de resúmenes.
- Diseño responsive.

## Desplegar en local

El proyecto está desarrollado con Astro y Bun. Primero, copia el proyecto en tu máquina y, para instalar las dependencias, ejecuta el siguiente comando:

```bash
bun install
```

Luego, para ejecutar localmente:

```bash
bunx --bun astro dev
```

Finalmente, edita el [Archivo de configuración](https://github.com/pipegoods/cv/blob/master/src/data/resume.ts) y agrega tus datos.

### ¿Cómo ejecutar si no tengo Bun?

Si no tienes Bun en tu máquina, puedes instalarlo con tu empaquetador favorito, eliminando el archivo `bun.lockb` o ignorándolo, y luego sigues con los otros pasos.

## Cómo contribuir

Para contribuir, puedes dejar una issue o tu pull request. Se recomienda no subir archivos `.lock` distintos al de Bun. 

Todas las opiniones o PR son bien recibidas.

## Desplegar tu CV

Te recomiendo desplegar tu CV en Vercel, ya que está optimizado para Astro. Además, sugiero cambiar el `script de analíticas` en el [Layout.astro](https://github.com/pipegoods/cv/blob/master/src/layouts/Layout.astro) y reemplazarlo con tu plataforma de analíticas preferida.

## TODO
- [ ] Modo oscuro
- [ ] i18n (Internacionalización)
- [ ] Mejorar aspecto SEO
- [ ] Print Friendly
- [ ] Agregar más redes sociales
