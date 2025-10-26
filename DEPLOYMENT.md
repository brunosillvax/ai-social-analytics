# 🚀 Guia de Deploy

Este guia mostra como fazer deploy do AI Social Analytics em diferentes plataformas.

## Vercel (Recomendado) ⚡

A maneira mais fácil de fazer deploy é usar a [Vercel](https://vercel.com):

### Deploy com 1 Clique

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brunosillvax/ai-social-analytics)

### Deploy Manual

1. **Instale a CLI do Vercel**
```bash
npm i -g vercel
```

2. **Login no Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Configure as variáveis de ambiente**
- Vá para o dashboard do Vercel
- Selecione seu projeto
- Settings → Environment Variables
- Adicione suas chaves de API

5. **Deploy em produção**
```bash
vercel --prod
```

---

## Netlify 🎯

### Via GitHub

1. Faça push do código para o GitHub
2. Conecte seu repositório no [Netlify](https://netlify.com)
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Adicione variáveis de ambiente em Site Settings → Environment

### Via CLI

```bash
# Instale a CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Railway 🚂

1. Faça push para o GitHub
2. Vá para [Railway](https://railway.app)
3. New Project → Deploy from GitHub repo
4. Configure as variáveis de ambiente
5. Deploy automático!

---

## Docker 🐳

### Build da Imagem

```bash
docker build -t ai-social-analytics .
```

### Run

```bash
docker run -p 3000:3000 ai-social-analytics
```

### Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_OPENAI_API_KEY=${NEXT_PUBLIC_OPENAI_API_KEY}
      - NEXT_PUBLIC_INSTAGRAM_TOKEN=${NEXT_PUBLIC_INSTAGRAM_TOKEN}
```

---

## VPS (Ubuntu/Debian) 💻

### 1. Setup Inicial

```bash
# Update sistema
sudo apt update && sudo apt upgrade -y

# Instale Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instale PM2
sudo npm install -g pm2
```

### 2. Clone e Build

```bash
# Clone o repositório
git clone https://github.com/brunosillvax/ai-social-analytics.git
cd ai-social-analytics

# Instale dependências
npm install

# Build
npm run build
```

### 3. Configure PM2

```bash
# Start com PM2
pm2 start npm --name "ai-social-analytics" -- start

# Auto-start no boot
pm2 startup
pm2 save
```

### 4. Configure Nginx (opcional)

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Cloudflare Pages ☁️

1. Push para GitHub
2. Conecte no [Cloudflare Pages](https://pages.cloudflare.com)
3. Configure:
   - Framework: Next.js
   - Build command: `npm run build`
   - Build output: `.next`
4. Deploy!

---

## Checklist Pré-Deploy ✅

Antes de fazer deploy, certifique-se de:

- [ ] Todas as variáveis de ambiente estão configuradas
- [ ] Build local funciona (`npm run build`)
- [ ] Testes passam (se houver)
- [ ] `.env.local` não está commitado
- [ ] README está atualizado
- [ ] Licença está incluída
- [ ] `.gitignore` está correto

---

## Variáveis de Ambiente Obrigatórias 🔐

```env
NEXT_PUBLIC_OPENAI_API_KEY=sua-chave
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=seu-token
NEXT_PUBLIC_WHATSAPP_TOKEN=seu-token
```

---

## Monitoramento 📊

Após o deploy, configure monitoramento:

- **Vercel Analytics**: Integrado automaticamente
- **Google Analytics**: Adicione o script no `layout.tsx`
- **Sentry**: Para tracking de erros
- **Uptime Robot**: Para monitorar disponibilidade

---

## Troubleshooting 🔧

### Build falha

```bash
# Limpe o cache
rm -rf .next node_modules
npm install
npm run build
```

### Variáveis de ambiente não funcionam

- Certifique-se que começam com `NEXT_PUBLIC_` para uso no client
- Reinicie o servidor após adicionar variáveis

### Erro de memória

```bash
# Aumente o limite de memória
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## Dúvidas?

Abra uma [issue](https://github.com/brunosillvax/ai-social-analytics/issues) ou consulte a [documentação oficial do Next.js](https://nextjs.org/docs/deployment).

---

**Bom deploy! 🚀**
