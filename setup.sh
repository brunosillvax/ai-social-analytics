#!/bin/bash

# 🚀 AI Social Analytics - Setup Script
# Este script automatiza a instalação e configuração inicial

echo "🎨 =================================================="
echo "   AI Social Analytics - Setup"
echo "   Configuração automática do projeto"
echo "=================================================="
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar Node.js
echo -e "${BLUE}🔍 Verificando Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js não encontrado!${NC}"
    echo "Por favor, instale Node.js 18+ de: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v)
echo -e "${GREEN}✅ Node.js instalado: $NODE_VERSION${NC}"
echo ""

# Verificar npm
echo -e "${BLUE}🔍 Verificando npm...${NC}"
if ! command -v npm &> /dev/null; then
    echo -e "${YELLOW}⚠️  npm não encontrado!${NC}"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo -e "${GREEN}✅ npm instalado: $NPM_VERSION${NC}"
echo ""

# Instalar dependências
echo -e "${BLUE}📦 Instalando dependências...${NC}"
npm install
echo -e "${GREEN}✅ Dependências instaladas!${NC}"
echo ""

# Criar arquivo .env.local se não existir
if [ ! -f .env.local ]; then
    echo -e "${BLUE}🔑 Criando arquivo .env.local...${NC}"
    cp .env.example .env.local
    echo -e "${GREEN}✅ Arquivo .env.local criado!${NC}"
    echo -e "${YELLOW}⚠️  IMPORTANTE: Configure suas chaves de API em .env.local${NC}"
else
    echo -e "${GREEN}✅ Arquivo .env.local já existe${NC}"
fi
echo ""

# Mensagem final
echo -e "${GREEN}=================================================="
echo "   ✅ Setup concluído com sucesso!"
echo "==================================================${NC}"
echo ""
echo -e "${BLUE}📋 Próximos passos:${NC}"
echo ""
echo "1. Configure suas chaves de API em .env.local"
echo "2. Execute: npm run dev"
echo "3. Abra: http://localhost:3000"
echo ""
echo -e "${BLUE}📚 Documentação:${NC}"
echo "- README.md - Visão geral do projeto"
echo "- QUICKSTART.md - Guia de início rápido"
echo "- EXAMPLES.md - Exemplos de código"
echo "- FAQ.md - Perguntas frequentes"
echo ""
echo -e "${GREEN}Bom desenvolvimento! 🚀${NC}"
echo ""
