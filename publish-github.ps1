# 🚀 Script de Publicação Automática no GitHub
# AI Social Analytics - @brunosillvax

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  🚀 AI Social Analytics" -ForegroundColor Cyan
Write-Host "  Publicação Automática no GitHub" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se Git está instalado
Write-Host "🔍 Verificando Git..." -ForegroundColor Blue
try {
    $gitVersion = git --version
    Write-Host "✅ Git instalado: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git não encontrado!" -ForegroundColor Red
    Write-Host "Por favor, instale o Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Pressione Enter para sair"
    exit 1
}
Write-Host ""

# Verificar se já é um repositório Git
Write-Host "📂 Verificando repositório Git..." -ForegroundColor Blue
if (Test-Path ".git") {
    Write-Host "✅ Repositório Git já existe" -ForegroundColor Green
} else {
    Write-Host "⚙️  Inicializando repositório Git..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Repositório Git criado!" -ForegroundColor Green
}
Write-Host ""

# Adicionar todos os arquivos
Write-Host "📦 Adicionando arquivos ao Git..." -ForegroundColor Blue
git add .
Write-Host "✅ Arquivos adicionados!" -ForegroundColor Green
Write-Host ""

# Fazer o primeiro commit
Write-Host "💾 Criando commit..." -ForegroundColor Blue
git commit -m "🎉 Initial commit: AI Social Analytics Dashboard

✨ Features:
- Dashboard interativo com métricas em tempo real
- Gráficos dinâmicos com Recharts
- Animações fluidas com Framer Motion
- Insights com IA (interface pronta)
- Design glassmorphism moderno
- Totalmente responsivo

🛠️ Stack:
- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- OpenAI API integration ready

📚 Documentação completa incluída
🐳 Docker support
⚙️  CI/CD configurado" -ErrorAction SilentlyContinue

Write-Host "✅ Commit criado!" -ForegroundColor Green
Write-Host ""

# Configurar remote
Write-Host "🔗 Configurando repositório remoto..." -ForegroundColor Blue
$repoUrl = "https://github.com/brunosillvax/ai-social-analytics.git"

# Remover remote se já existir
git remote remove origin 2>$null

# Adicionar novo remote
git remote add origin $repoUrl
Write-Host "✅ Remote configurado: $repoUrl" -ForegroundColor Green
Write-Host ""

# Verificar/criar branch main
Write-Host "🌿 Configurando branch principal..." -ForegroundColor Blue
git branch -M main
Write-Host "✅ Branch 'main' configurada!" -ForegroundColor Green
Write-Host ""

# Instruções finais
Write-Host "=========================================" -ForegroundColor Green
Write-Host "  ✅ Configuração Concluída!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1️⃣  CRIAR REPOSITÓRIO NO GITHUB:" -ForegroundColor Cyan
Write-Host "   - Acesse: https://github.com/new" -ForegroundColor White
Write-Host "   - Repository name: ai-social-analytics" -ForegroundColor White
Write-Host "   - Description: 🚀 AI-Powered Social Media Analytics Dashboard" -ForegroundColor White
Write-Host "   - Visibility: ✅ Public" -ForegroundColor White
Write-Host "   - ⚠️  NÃO marque 'Initialize with README'" -ForegroundColor Yellow
Write-Host "   - Clique em 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "2️⃣  APÓS CRIAR O REPOSITÓRIO, EXECUTE:" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Green
Write-Host ""
Write-Host "3️⃣  CONFIGURAR O REPOSITÓRIO:" -ForegroundColor Cyan
Write-Host "   - Vá em Settings → About" -ForegroundColor White
Write-Host "   - Adicione topics: nextjs, typescript, ai, analytics, dashboard" -ForegroundColor White
Write-Host "   - Adicione description e website (link do Vercel)" -ForegroundColor White
Write-Host ""
Write-Host "4️⃣  DEPLOY NA VERCEL:" -ForegroundColor Cyan
Write-Host "   - Acesse: https://vercel.com/new" -ForegroundColor White
Write-Host "   - Importe o repositório GitHub" -ForegroundColor White
Write-Host "   - Clique em Deploy" -ForegroundColor White
Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 DICA: Copie o comando 'git push' acima!" -ForegroundColor Yellow
Write-Host ""
Write-Host "📚 Documentação completa em: COMO_PUBLICAR.md" -ForegroundColor Blue
Write-Host ""

# Perguntar se quer abrir o GitHub
$openGitHub = Read-Host "Deseja abrir o GitHub para criar o repositório agora? (S/N)"
if ($openGitHub -eq "S" -or $openGitHub -eq "s") {
    Start-Process "https://github.com/new"
    Write-Host "✅ Abrindo GitHub..." -ForegroundColor Green
}

Write-Host ""
Write-Host "Pressione Enter para finalizar..." -ForegroundColor Gray
Read-Host
