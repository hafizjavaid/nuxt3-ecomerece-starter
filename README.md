---
Build and Ship Nuxt 3 fullstack starter apps with Auth, DB, Payments, Email & File storage 

Try [Supersaas today](https://supersaas.dev)
---


[<img src="https://essentials.supersaas.dev/supersaas-banner.png">](https://supersaas.dev?ref=nuxt3-ecomerece-starter)

---
Build Faster, Design Better with QuasarUI Components and Templates.

Try [QuasarUI now](https://www.quasarui.com/)
---


[<img src="https://www.quasarui.com/img/og.webp">](https://www.quasarui.com/)

Build Faster, Design Better with QuasarUI Components and Templates.

QuasarUI is a collection of templates and over 480 beautifully crafted UI components built with Qusar, aimed at making your development process easier and faster.


# Nuxt 3 Ecommerece Starter Guide ( [Youtube Video](https://youtu.be/uy6LGbCQqwk?si=lySvNoS_Y6WS9WZh) )

If you want to follow on your own ( want to install latest depencies ), please follow the self documentation section. 

I'm creating this setup repository on 28/10/2024. I'll keep updating this, if I see any changes in the process.

## Highly Recommended

Clone this repository and do the following steps

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Environment Variable Setup

Copy the variables from .env.example file and create new file called .env. Look at the [Youtube Video](https://youtu.be/uy6LGbCQqwk?si=lySvNoS_Y6WS9WZh) to learn how you can setup.


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```


# 

## Self documentation:

#### Install Latest Nuxt Project:

```bash
npx nuxi@latest init <project-name>

```

#### Shadcn Setup:

Look at the [Shadcn-Vue Documentation](https://www.shadcn-vue.com/docs/installation/nuxt.html) to learn how you can setup on your own.

OR follow following steps:

```bash

 npm install -D typescript

 npx nuxi@latest module add @nuxtjs/tailwindcss

 npx nuxi@latest module add shadcn-nuxt

```
 Update the nuxt.config.ts as following:

 ```bash
 export default defineNuxtConfig({
        compatibilityDate: '2024-04-03',
        devtools: { enabled: true },
        modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
          shadcn: {
            prefix: '',
            componentDir: './components/ui'
          }
 })

```

Run the CLI:

 ```bash
npx shadcn-vue@latest init
 ```

On running the above command, you have to choose different settings, I'll recommend to choose defaults one

We are done with shadcn setup, now we can install the components, according to our usage, as I know which components we will be using in our project.

Let's run the following command to install components

```bash
npx shadcn-vue@latest add button alert avatar badge card carousel checkbox command dialog dropdown-menu form input label popover select separator sheet table toast tooltip

 ```

 So far we are done with nuxt project, and shadcn setup. Now let's install the other nuxt modules and other packages we will be using in our project

 VueUse:

 ```bash
npm i @vueuse/nuxt @vueuse/core

// nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
    ],
})

  ```

Look at the [VueUse Module](https://nuxt.com/modules/vueuse) to learn how you can setup on your own.


   Nuxt Icon:

 ```bash
npx nuxi module add icon

  ```

  Look at the [Nuxt Icon](https://nuxt.com/modules/icon) to learn how you can setup on your own.


   Nuxt Cloudinary for image upload and optimization:

 ```bash
npm install @nuxtjs/cloudinary

// nuxt.config
export default defineNuxtConfig({
    modules: [
    "@nuxtjs/cloudinary"
    ],
})

  ```

Look at the [Nuxt Cloudinary](https://cloudinary.nuxtjs.org/getting-started) to learn how you can setup on your own.



Nuxt Auth Utils for auth and session management:

 ```bash
npx nuxi@latest module add auth-utils

  ```

  Look at the [Nuxt Auth Utils](https://github.com/atinux/nuxt-auth-utils) to learn how you can setup on your own.


    Stripe: For payment

 ```bash
 npm install stripe

  ```

Prisma

 ```bash
npm install -D prisma @prisma/client

  ```
