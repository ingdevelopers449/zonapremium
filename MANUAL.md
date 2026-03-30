
# Manual del Frontend - ZonaPremium

Este manual proporciona una descripción detallada de la arquitectura, componentes y flujo de datos de la aplicación de frontend de ZonaPremium.

## 1. Visión General de la Arquitectura

La aplicación es una **Single Page Application (SPA)** construida con **React** y **Vite**. Utiliza **TypeScript** para el tipado estático y **Tailwind CSS** para los estilos.

El "backend" de la aplicación es una integración con **WhatsApp**, donde las órdenes de compra se envían a través de un enlace `https://wa.me`. No hay un servidor de backend tradicional ni una base de datos en este repositorio.

## 2. Estructura de Archivos

La estructura de archivos del proyecto es la siguiente:

```
/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- home/
|   |   |-- layout/
|   |   |-- modals/
|   |   |-- services/
|   |   |-- ui/
|   |-- App.tsx
|   |-- constants.ts
|   |-- index.css
|   |-- main.tsx
|   |-- types.ts
|-- .gitignore
|-- index.html
|-- package.json
|-- tsconfig.json
|-- vite.config.ts
```

-   **`src/main.tsx`**: Punto de entrada de la aplicación.
-   **`src/App.tsx`**: Componente principal que orquesta toda la aplicación.
-   **`src/components/`**: Contiene todos los componentes de React, organizados por funcionalidad.
-   **`src/constants.ts`**: Define los datos estáticos de la aplicación (servicios, combos, etc.).
-   **`src/types.ts`**: Define las interfaces de TypeScript para los modelos de datos.
-   **`src/index.css`**: Contiene los estilos globales y la configuración de Tailwind CSS.
-   **`vite.config.ts`**: Archivo de configuración de Vite.

## 3. Modelos de Datos

Los modelos de datos se definen en `src/types.ts`:

-   **`Service`**: Representa un servicio o combo.
-   **`ServiceOption`**: Define las opciones de compra para un servicio.
-   **`PurchaseData`**: Define la estructura de los datos de una compra.

Todos los datos de los servicios y combos se almacenan estáticamente en el archivo `src/constants.ts`.

## 4. Componentes Principales

### 4.1. `App.tsx`

El componente raíz que gestiona el estado principal de la aplicación, incluyendo:

-   Modo oscuro.
-   Servicio seleccionado para la compra.
-   Visibilidad de los modales.

### 4.2. Componentes de Layout (`src/components/layout/`)

-   **`Header.tsx`**: La barra de navegación superior.
-   **`Footer.tsx`**: El pie de página.
-   **`ProgressBar.tsx`**: Una barra de progreso que se muestra en la parte superior de la página.

### 4.3. Componentes de la Página de Inicio (`src/components/home/`)

-   **`Hero.tsx`**: La sección principal de la página de inicio.
-   **`ServiceGrid.tsx`** y **`ServiceCard.tsx`**: Renderizan la cuadrícula de servicios y las tarjetas individuales.
-   **`FAQ.tsx`**: Una sección de preguntas frecuentes.

### 4.4. Modales (`src/components/modals/`)

-   **`PurchaseModal.tsx`**: El modal de compra que recopila la información del usuario.
-   **`NequiModal.tsx`**: Muestra la información de pago de Nequi.
-   **`SuccessModal.tsx`**: Un modal que se muestra después de enviar una orden de compra.

## 5. Flujo de Compra

1.  El usuario selecciona un servicio en una `ServiceCard`.
2.  Se abre el `PurchaseModal`.
3.  El usuario introduce su nombre y número de WhatsApp.
4.  Al hacer clic en "Ordenar por WhatsApp", se abre una URL de WhatsApp con un mensaje pre-rellenado.
5.  El usuario puede ver la información de pago en el `NequiModal`.
6.  El usuario realiza el pago y envía la captura de pantalla por WhatsApp.

## 6. Enfoque de Estilos

La aplicación utiliza **Tailwind CSS** con una configuración personalizada en `src/index.css`.

-   **Tema Personalizado**: Se definen colores personalizados (gold, silver, premium-black) en `src/index.css`.
-   **Modo Oscuro**: Implementado con la estrategia de clase de Tailwind (`dark:`).
-   **Efectos Personalizados**: Clases personalizadas para degradados metálicos y efectos de vidrio.

## 7. Cómo Añadir/Modificar Servicios

Para añadir o modificar un servicio, simplemente edita el array `SERVICES` o `COMBOS` en el archivo `src/constants.ts`. La aplicación se actualizará automáticamente para reflejar los cambios.
