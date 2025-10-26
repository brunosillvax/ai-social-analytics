# 🚀 AI Social Analytics - Setup Script (PowerShell)
# Este script automatiza a instalação e configuração inicial

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "   AI Social Analytics - Setup" -ForegroundColor Cyan
Write-Host "   Configuração automática do projeto" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Verificar Node.js
Write-Host "🔍 Verificando Node.js..." -ForegroundColor Blue
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js instalado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Node.js não encontrado!" -ForegroundColor Yellow
    Write-Host "Por favor, instale Node.js 18+ de: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Verificar npm
Write-Host "🔍 Verificando npm..." -ForegroundColor Blue
try {
    $npmVersion = npm -v
    Write-Host "✅ npm instalado: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  npm não encontrado!" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Instalar dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Blue
npm install
Write-Host "✅ Dependências instaladas!" -ForegroundColor Green
Write-Host ""

# Criar arquivo .env.local se não existir
if (-not (Test-Path .env.local)) {
    Write-Host "🔑 Criando arquivo .env.local..." -ForegroundColor Blue
    Copy-Item .env.example .env.local
    Write-Host "✅ Arquivo .env.local criado!" -ForegroundColor Green
    Write-Host "⚠️  IMPORTANTE: Configure suas chaves de API em .env.local" -ForegroundColor Yellow
} else {
    Write-Host "✅ Arquivo .env.local já existe" -ForegroundColor Green
}
Write-Host ""

# Mensagem final
Write-Host "==================================================" -ForegroundColor Green
Write-Host "   ✅ Setup concluído com sucesso!" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos passos:" -ForegroundColor Blue
Write-Host ""
Write-Host "1. Configure suas chaves de API em .env.local"
Write-Host "2. Execute: npm run dev"
Write-Host "3. Abra: http://localhost:3000"
Write-Host ""
Write-Host "📚 Documentação:" -ForegroundColor Blue
Write-Host "- README.md - Visão geral do projeto"
Write-Host "- QUICKSTART.md - Guia de início rápido"
Write-Host "- EXAMPLES.md - Exemplos de código"
Write-Host "- FAQ.md - Perguntas frequentes"
Write-Host ""
Write-Host "Bom desenvolvimento! 🚀" -ForegroundColor Green
Write-Host ""
