# ❓ Perguntas Frequentes (FAQ)

Respostas para as perguntas mais comuns sobre o AI Social Analytics.

## 🚀 Geral

### O que é o AI Social Analytics?

É um dashboard completo e moderno para análise de redes sociais com Inteligência Artificial. Ele permite monitorar métricas de WhatsApp, Instagram, TikTok e outras plataformas em um só lugar, com insights automatizados gerados por IA.

### O projeto é gratuito?

Sim! O projeto é 100% open-source e gratuito sob a licença MIT. Você pode usar, modificar e distribuir livremente.

### Preciso saber programar para usar?

Para usar a versão básica, não. Basta seguir o [Quickstart Guide](QUICKSTART.md). Para customizações avançadas, conhecimento em React/TypeScript é recomendado.

## 🔑 APIs e Integração

### Quais plataformas são suportadas?

Atualmente, a interface suporta:
- ✅ WhatsApp (via WhatsApp Business API)
- ✅ Instagram (via Instagram Graph API)
- ✅ TikTok (via TikTok API)
- 🚧 Twitter/X (em breve)
- 🚧 LinkedIn (em breve)
- 🚧 YouTube (em breve)

### Preciso pagar pelas APIs?

Depende da plataforma:
- **Instagram/WhatsApp**: Gratuito até certo limite
- **OpenAI**: Pago por uso (mas com créditos iniciais)
- **TikTok**: Depende do tipo de conta

### Como obtenho as chaves de API?

Veja o guia detalhado em [EXAMPLES.md](EXAMPLES.md) com links e instruções para cada plataforma.

### Os dados são armazenados?

Por padrão, **não**. O projeto trabalha com dados em tempo real. Se quiser armazenar histórico, você pode adicionar um banco de dados (veja [EXAMPLES.md](EXAMPLES.md)).

## 🛠️ Técnico

### Quais tecnologias são usadas?

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS 4
- **Animações**: Framer Motion
- **Gráficos**: Recharts
- **IA**: OpenAI API

### Posso usar com outras linguagens/frameworks?

A lógica pode ser adaptada para qualquer framework JavaScript/TypeScript. Os componentes React podem ser portados para Vue, Svelte, etc.

### Como adiciono autenticação?

Recomendamos usar **NextAuth.js** ou **Clerk**. Veja exemplos na [documentação](EXAMPLES.md).

### Como adiciono um banco de dados?

Você pode usar:
- **Postgres** (Supabase, Vercel Postgres)
- **MongoDB** (MongoDB Atlas)
- **MySQL** (PlanetScale)

Exemplos em breve na documentação.

## 🎨 Personalização

### Posso mudar as cores?

Sim! Edite o arquivo `tailwind.config.js` ou use as classes de utilitários do Tailwind diretamente nos componentes.

### Como adiciono novas métricas?

1. Adicione os dados no array correspondente em `app/page.tsx`
2. Crie um novo componente `MetricCard` com os novos dados
3. Ajuste os gráficos conforme necessário

### Posso remover plataformas que não uso?

Sim! Basta remover as seções correspondentes em `app/page.tsx`.

## 🚀 Deploy

### Onde posso fazer deploy?

As opções mais populares:
- **Vercel** (recomendado) - Deploy com 1 clique
- **Netlify** - Simples e rápido
- **Railway** - Com banco de dados incluído
- **Docker** - Em qualquer lugar
- **VPS** - Ubuntu, Debian, etc.

Veja o guia completo em [DEPLOYMENT.md](DEPLOYMENT.md).

### É gratuito fazer deploy?

Sim! Vercel, Netlify e Railway têm planos gratuitos generosos.

### Como configuro domínio personalizado?

Cada plataforma tem seu processo:
- **Vercel**: Settings → Domains
- **Netlify**: Domain management
- **Railway**: Custom domains (plano pago)

## 🔒 Segurança

### Minhas chaves de API estão seguras?

Sim, se você seguir as melhores práticas:
- ✅ Use `.env.local` para desenvolvimento
- ✅ Nunca commite arquivos `.env`
- ✅ Use variáveis de ambiente na plataforma de deploy
- ✅ Rotacione chaves regularmente

Veja mais em [SECURITY.md](SECURITY.md).

### Os dados dos usuários são privados?

Sim. Por padrão, não armazenamos nada. Tudo processa no cliente ou em tempo real via API.

## 💰 Custos

### Quanto custa rodar este projeto?

**Desenvolvimento**: Grátis  
**Deploy (Vercel/Netlify)**: Grátis para uso pessoal  
**APIs**:
- WhatsApp/Instagram: Geralmente grátis até volume alto
- OpenAI: ~$0.002 por request (GPT-4)
- TikTok: Grátis para analytics básico

**Total**: Você pode começar com **$0** e escalar conforme necessário.

## 🤝 Contribuição

### Posso contribuir?

Sim! Adoramos contribuições! Veja o [CONTRIBUTING.md](CONTRIBUTING.md) para começar.

### Como reporto bugs?

Abra uma [issue](https://github.com/brunosillvax/ai-social-analytics/issues) usando o template de bug report.

### Como sugiro features?

Abra uma [issue](https://github.com/brunosillvax/ai-social-analytics/issues) usando o template de feature request.

## 📱 Mobile

### Tem aplicativo mobile?

Ainda não, mas está no [roadmap](README.md#-roadmap)! A versão web é totalmente responsiva e funciona bem em mobile.

### Posso criar um app React Native?

Sim! A lógica pode ser reutilizada. Se você criar, considere contribuir de volta ao projeto!

## 🐛 Problemas Comuns

### Erro "Cannot find module"

```bash
# Limpe e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Build falha

```bash
# Limpe o cache
rm -rf .next
npm run build
```

### Variáveis de ambiente não funcionam

- Certifique-se que começam com `NEXT_PUBLIC_` para uso no client
- Reinicie o servidor (`npm run dev`)

### Erros de TypeScript

```bash
# Limpe e reconstrua
rm -rf .next
npm run dev
```

## 📞 Suporte

### Onde posso obter ajuda?

1. 📖 Leia a [documentação](README.md)
2. 🔍 Procure em [issues existentes](https://github.com/brunosillvax/ai-social-analytics/issues)
3. 💬 Inicie uma [discussão](https://github.com/brunosillvax/ai-social-analytics/discussions)
4. 🐛 Abra uma nova [issue](https://github.com/brunosillvax/ai-social-analytics/issues/new)

### Tem Discord/Slack?

Ainda não, mas está nos planos! Por enquanto, use GitHub Discussions.

## 🌟 Outros

### Posso usar em projetos comerciais?

Sim! A licença MIT permite uso comercial. Só pedimos que mantenha a atribuição original.

### Como posso apoiar o projeto?

- ⭐ Dê uma star no GitHub
- 🐛 Reporte bugs
- 💡 Sugira features
- 🔧 Contribua com código
- 📢 Compartilhe com amigos
- ☕ [Apoie financeiramente](https://github.com/sponsors/brunosillvax) (opcional)

### Tem vídeos/tutoriais?

Em breve! Inscreva-se nas discussions para ser notificado.

---

## 💬 Sua pergunta não está aqui?

Abra uma [discussion](https://github.com/brunosillvax/ai-social-analytics/discussions) ou [issue](https://github.com/brunosillvax/ai-social-analytics/issues)!

---

**Feito com ❤️ por [Bruno Silva](https://github.com/brunosillvax)**
