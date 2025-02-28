## Mikantama

[Requisitos](#requisitos) | [Clone](#clone) | [Config](#config) | [Docker](#docker) | [Deploy](#deploy) | [Assets](#assets) | [Figma](#figma)

### Requisitos

Para executar o projeto instale a stack 

- [Node.js](https://nodejs.org/)

  > Usei a versão 22, atualmente a LTS

- [pnpm](https://pnpm.io/installation)
- [git](https://git-scm.com/)

> Como tudo instalado, siga os passos abaixo para configurar o projeto ou use _Docker_

### Clone

Clone o projeto, usando o comando abaixo:
```bash
git clone https://github.com/nathan2slime/mikantama.git
```

### Config

Crie um arquivo `.env.local` e adicione as seguinte variáveis de ambiente. Use o arquivo `.env.example` como base.
```env
NEXT_PUBLIC_API_URL="https://fakestoreapi.com"
```
Use o comando abaixo para instalar as dependências
```
pnpm install
```

Com tudo pronto. Para executar o projeto **Next.js**, use o comando abaixo
```
pnpm dev
```
E para executar o **Storybook**, use o comando abaixo
```bash
pnpm storybook
```

### Docker
Para executar o projeto usando **Docker** rode o comando abaixo

```bash
docker compose up
```

### Figma
O arquivo do projeto no Figma foi adicionado em [/docs/mikantama.fig](https://github.com/nathan2slime/mikantama/blob/master/docs/mikantama.fig)

### Deploy

O projeto foi implamantado na _Vercel_, use os links abaixo

- [Storybook](https://mikantama-story.vercel.app/)
- [Next.js](https://mikantama.vercel.app/)

### Assets

![](https://github.com/nathan2slime/mikantama/blob/master/docs/assets/delete-product.png?raw=true)
![](https://github.com/nathan2slime/mikantama/blob/master/docs/assets/new-product.png?raw=true)
![](https://github.com/nathan2slime/mikantama/blob/master/docs/assets/home.png?raw=true)
![](https://github.com/nathan2slime/mikantama/blob/master/docs/assets/product.png?raw=true)
