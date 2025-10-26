# 🚀 AI Social Analytics Dashboard

<div align="center">

![AI Social Analytics](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Dashboard completo de análise de redes sociais com Inteligência Artificial**

Monitore, analise e obtenha insights acionáveis das suas redes sociais em tempo real

[Demo ao Vivo](https://ai-social-analytics.vercel.app) · [Reportar Bug](https://github.com/brunosillvax/ai-social-analytics/issues) · [Solicitar Feature](https://github.com/brunosillvax/ai-social-analytics/issues)

</div>

---

## ✨ Features

### 🎯 Análise em Tempo Real
- 📊 **Dashboard Interativo** - Visualize todas as suas métricas em um só lugar
- 📈 **Gráficos Dinâmicos** - Acompanhe tendências e padrões
- 🔄 **Atualização Automática** - Dados sempre atualizados

### 🤖 Inteligência Artificial
- 🧠 **Insights Automatizados** - IA identifica oportunidades e padrões
- 🎯 **Recomendações Personalizadas** - Sugestões baseadas nos seus dados
- ⏰ **Melhor Horário para Postar** - Maximize seu alcance e engajamento
- 👥 **Análise de Público** - Entenda seu público profundamente

### 🌐 Plataformas Suportadas
- 💬 **WhatsApp** - Integração com API Business
- 📸 **Instagram** - Analytics completo de posts e stories
- 🎵 **TikTok** - Métricas de vídeos e engajamento
- 🔌 **Extensível** - Adicione novas plataformas facilmente

### 🎨 Design Moderno
- 🌙 **Interface Glassmorphism** - Design moderno e elegante
- ⚡ **Animações Fluidas** - Experiência premium com Framer Motion
- 📱 **Totalmente Responsivo** - Funciona em qualquer dispositivo
- 🎭 **Gradientes Vibrantes** - Visual impactante

---

## 🖼️ Screenshots

<div align="center">

### Dashboard Principal
![Dashboard](https://via.placeholder.com/800x400/1e293b/a855f7?text=Dashboard+Principal)

### Insights com IA
![AI Insights](https://via.placeholder.com/800x400/1e293b/ec4899?text=AI+Insights)

### Analytics Detalhado
![Analytics](https://via.placeholder.com/800x400/1e293b/3b82f6?text=Analytics+Detalhado)

</div>

---

## 🚀 Começando

### Pré-requisitos

```bash
Node.js 18+ 
npm ou yarn ou pnpm
```

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/brunosillvax/ai-social-analytics.git
cd ai-social-analytics
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas chaves de API:
```env
NEXT_PUBLIC_OPENAI_API_KEY=sua_chave_aqui
NEXT_PUBLIC_INSTAGRAM_TOKEN=seu_token_aqui
NEXT_PUBLIC_WHATSAPP_TOKEN=seu_token_aqui
```

4. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Abra no navegador**
```
http://localhost:3000
```

---

## 🛠️ Stack Tecnológica

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br>Next.js 16
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React 19
</td>
<td align="center" width="96">
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS
</td>
</tr>
<tr>
<td align="center" width="96">
<img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" width="48" height="48" alt="Framer" />
<br>Framer Motion
</td>
<td align="center" width="96">
<img src="https://avatars.githubusercontent.com/u/6412038?s=200&v=4" width="48" height="48" alt="Recharts" />
<br>Recharts
</td>
<td align="center" width="96">
<img src="https://lucide.dev/logo.light.svg" width="48" height="48" alt="Lucide" />
<br>Lucide Icons
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="48" height="48" alt="Vercel" />
<br>Vercel
</td>
</tr>
</table>

### Principais Bibliotecas

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript 5
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Gráficos:** Recharts
- **Ícones:** Lucide React
- **UI Components:** Radix UI

---

## 📁 Estrutura do Projeto

```
ai-social-analytics/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Dashboard principal
│   └── globals.css         # Estilos globais
├── components/             # Componentes reutilizáveis
├── lib/                    # Utilitários e helpers
├── public/                 # Arquivos estáticos
├── package.json
└── README.md
```

---

## 🎯 Roadmap

- [x] Dashboard com métricas básicas
- [x] Gráficos interativos
- [x] Insights com IA
- [x] Design responsivo
- [ ] Integração real com APIs
- [ ] Autenticação de usuários
- [ ] Exportação de relatórios PDF
- [ ] Notificações push
- [ ] Modo escuro/claro
- [ ] Suporte a mais plataformas (Twitter, LinkedIn, YouTube)
- [ ] API pública
- [ ] Aplicativo mobile

---

## 🤝 Como Contribuir

Contribuições são **muito bem-vindas**! 

1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Casos de Uso

### Para Influenciadores
- Acompanhe crescimento de seguidores em todas as plataformas
- Identifique conteúdos que mais engajam
- Otimize horários de postagem

### Para Empresas
- Monitore menções e engajamento da marca
- Analise campanhas de marketing
- Compare performance entre plataformas

### Para Agências
- Gerencie múltiplos clientes
- Relatórios automatizados
- Insights acionáveis com IA

---

## 🔐 Segurança

- 🔒 Todas as chaves de API são armazenadas de forma segura
- 🛡️ Comunicação criptografada
- 🔐 Autenticação OAuth 2.0
- 📊 Dados processados localmente quando possível

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

<div align="center">

### Bruno Silva

[![GitHub](https://img.shields.io/badge/GitHub-brunosillvax-black?style=for-the-badge&logo=github)](https://github.com/brunosillvax)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/brunosillvax)

**Desenvolvedor especializado em automação, bots e IA**

</div>

---

## 🌟 Mostre seu Apoio

Se este projeto te ajudou, dê uma ⭐️!

---

## 📞 Suporte

Tem alguma dúvida? 

- 📧 Email: [contato](mailto:seu-email@exe)
- 💬 Discord: [Join our community](#)
- 🐛 Issues: [GitHub Issues](https://github.com/brunosillvax/ai-social-analytics/issues)

---

<div align="center">

**Desenvolvido com ❤️ e ☕ por [Bruno Silva](https://github.com/brunosillvax)**

*"A automação é a arte de fazer o computador trabalhar para você"*

</div>
