# ⚡ Quickstart Guide

Comece a usar o AI Social Analytics em **5 minutos**!

## 🚀 Instalação Rápida

### Opção 1: Clone e Execute

```bash
# 1. Clone o repositório
git clone https://github.com/brunosillvax/ai-social-analytics.git
cd ai-social-analytics

# 2. Instale as dependências
npm install

# 3. Execute em modo desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:3000
```

### Opção 2: Use o Template

1. Clique em "Use this template" no GitHub
2. Clone seu novo repositório
3. Siga os passos acima

## 🎯 Primeira Execução

Ao abrir `http://localhost:3000`, você verá:

✅ **Dashboard Principal** com métricas mock  
✅ **Gráficos Interativos** de engajamento  
✅ **Insights com IA** (interface)  
✅ **Cards de Plataformas** (WhatsApp, Instagram, TikTok)  

## 🔑 Configurando APIs (Opcional)

Para dados reais, configure suas chaves:

### 1. Crie o arquivo de ambiente

```bash
cp .env.example .env.local
```

### 2. Adicione suas chaves

```env
NEXT_PUBLIC_OPENAI_API_KEY=sk-sua-chave-aqui
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=seu-token
NEXT_PUBLIC_WHATSAPP_TOKEN=seu-token
```

### 3. Obtenha suas chaves

- **OpenAI**: https://platform.openai.com/api-keys
- **Instagram**: https://developers.facebook.com/
- **WhatsApp**: https://business.whatsapp.com/

## 📝 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start

# Lint
npm run lint

# Docker
docker-compose up
```

## 🎨 Personalize

### 1. Cores

Edite `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#8b5cf6',
      secondary: '#ec4899',
    }
  }
}
```

### 2. Dados

Edite `app/page.tsx` para mudar os dados mockados.

### 3. Componentes

Adicione seus próprios componentes em `components/`.

## 🚢 Deploy Rápido

### Vercel (1 clique)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/brunosillvax/ai-social-analytics)

### Netlify

```bash
netlify deploy --prod
```

### Docker

```bash
docker build -t ai-social-analytics .
docker run -p 3000:3000 ai-social-analytics
```

## 📚 Próximos Passos

1. ✅ **Explore o Dashboard** - Navegue pela interface
2. 🔑 **Configure APIs** - Conecte suas contas reais
3. 🎨 **Customize** - Adapte ao seu estilo
4. 🚀 **Deploy** - Publique seu projeto
5. ⭐ **Dê uma Star** - Se gostar do projeto!

## 💡 Dicas

- 🔥 **Hot Reload**: Mudanças aparecem automaticamente
- 🎯 **Mobile First**: Teste em dispositivos móveis
- 📊 **Dados Reais**: Integre APIs para dados verdadeiros
- 🤖 **IA**: Adicione sua chave OpenAI para insights reais

## ❓ Problemas?

- 📖 Leia o [README completo](README.md)
- 🐛 [Reporte um bug](https://github.com/brunosillvax/ai-social-analytics/issues)
- 💬 [Inicie uma discussão](https://github.com/brunosillvax/ai-social-analytics/discussions)

## 🌟 Mostre seu Apoio

Se este projeto te ajudou, dê uma ⭐️ no GitHub!

---

**Pronto! Você está executando o AI Social Analytics! 🎉**

Agora é só personalizar e fazer deploy! 🚀
