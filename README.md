
# PNPM VS NPM
O PNPM é um substituto imediato para o npm. Ele é construído com base no npm e é muito mais rápido e eficiente que seu antecessor. 
É altamente eficiente em disco e resolve problemas inerentes ao npm.

https://pnpm.io/installation

# Instalando o PNPM
npm install -g pnpm
npm install -g @pnpm/exe


# Express vs Fastify
Se você valoriza estabilidade, riqueza de recursos e uma vasta comunidade, o Express é o caminho a seguir. Porém, se você procura uma alternativa mais rápida e eficiente com validação e serialização integradas, Fastify é uma excelente opção.

Artigo: https://medium.com/@vishalims095/express-vs-fastify-9a4d052c28e1


# Instalando e configurando o prisma
pnpm i prisma -D && pnpm prisma init --datasource-provider sqlite

# Rodando as migrations
pnpm prisma migrate dev


# Upload de arquivos usando fastify
https://www.npmjs.com/package/@fastify/multipart
Install: pnpm i @fastify/multipart