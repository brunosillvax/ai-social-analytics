// AI Social Analytics Dashboard
// Dashboard principal com métricas, gráficos e insights de IA
'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Heart,
  Instagram,
  Send,
  Video,
  Sparkles,
  BarChart3,
  Brain,
  Zap,
  Target
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  PieChart,
  Pie,
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';

// Dados de exemplo
const engagementData = [
  { name: 'Seg', whatsapp: 4000, instagram: 2400, tiktok: 2400 },
  { name: 'Ter', whatsapp: 3000, instagram: 1398, tiktok: 2210 },
  { name: 'Qua', whatsapp: 2000, instagram: 9800, tiktok: 2290 },
  { name: 'Qui', whatsapp: 2780, instagram: 3908, tiktok: 2000 },
  { name: 'Sex', whatsapp: 1890, instagram: 4800, tiktok: 2181 },
  { name: 'Sab', whatsapp: 2390, instagram: 3800, tiktok: 2500 },
  { name: 'Dom', whatsapp: 3490, instagram: 4300, tiktok: 2100 },
];

const platformData = [
  { name: 'WhatsApp', value: 45, color: '#25D366' },
  { name: 'Instagram', value: 35, color: '#E4405F' },
  { name: 'TikTok', value: 20, color: '#000000' },
];

const aiInsights = [
  {
    icon: Brain,
    title: 'Melhor Horário para Postar',
    insight: 'Terça-feira às 14h tem 23% mais engajamento',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Público Alvo',
    insight: '68% do seu público está entre 18-25 anos',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Tendência Crescente',
    insight: 'Vídeos curtos aumentaram 145% em views',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Sparkles,
    title: 'Conteúdo Recomendado',
    insight: 'Tutoriais têm 3x mais salvamentos',
    color: 'from-green-500 to-emerald-500'
  }
];

const stats = [
  { 
    icon: Users, 
    label: 'Seguidores Totais', 
    value: '127.5K',
    change: '+12.5%',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    icon: Heart, 
    label: 'Engajamento', 
    value: '89.2%',
    change: '+8.1%',
    color: 'from-pink-500 to-pink-600'
  },
  { 
    icon: MessageCircle, 
    label: 'Mensagens', 
    value: '15.3K',
    change: '+23.4%',
    color: 'from-purple-500 to-purple-600'
  },
  { 
    icon: TrendingUp, 
    label: 'Crescimento', 
    value: '+34.5%',
    change: '+5.2%',
    color: 'from-green-500 to-green-600'
  },
];

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-500/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg shadow-purple-500/50">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Social Analytics</h1>
                <p className="text-sm text-gray-400 mt-1">Powered by Artificial Intelligence</p>
              </div>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all">
              Conectar Contas
            </button>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-green-400 text-sm font-bold px-3 py-1 bg-green-500/10 rounded-full">{stat.change}</span>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{stat.label}</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 flex items-center justify-center gap-3">
              <Brain className="w-10 h-10 text-purple-400" />
              Insights com IA
            </h2>
            <p className="text-gray-400">Análise inteligente e automatizada dos seus dados</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl shadow-black/20 hover:shadow-purple-500/20"
              >
                <div className={`p-4 bg-gradient-to-br ${insight.color} rounded-2xl w-fit mb-6 shadow-lg`}>
                  <insight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{insight.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{insight.insight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Engagement Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2 bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-xl shadow-black/20"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">Engajamento por Plataforma</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="whatsapp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#25D366" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#25D366" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="instagram" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E4405F" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#E4405F" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="tiktok" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f2ea" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00f2ea" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="name" stroke="#ffffff60" />
                <YAxis stroke="#ffffff60" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px'
                  }} 
                />
                <Legend />
                <Area type="monotone" dataKey="whatsapp" stroke="#25D366" fillOpacity={1} fill="url(#whatsapp)" />
                <Area type="monotone" dataKey="instagram" stroke="#E4405F" fillOpacity={1} fill="url(#instagram)" />
                <Area type="monotone" dataKey="tiktok" stroke="#00f2ea" fillOpacity={1} fill="url(#tiktok)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Platform Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-xl shadow-black/20"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">Distribuição de Público</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => {
                    const displayName = name || '';
                    const displayPercent = typeof percent === 'number' ? (percent * 100).toFixed(0) : 0;
                    return `${displayName} ${displayPercent}%`;
                  }}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Platform Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Plataformas Conectadas</h2>
            <p className="text-gray-400">Gerencie todas as suas redes sociais em um só lugar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-2xl rounded-3xl p-8 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20 hover:shadow-green-500/20">
              <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-fit mb-6 shadow-lg shadow-green-500/50">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
              <p className="text-gray-300 mb-6 text-sm">Bot de automação ativo</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">45.2K</span>
                <span className="text-green-400 text-sm font-bold px-3 py-1 bg-green-500/10 rounded-full">+12%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 backdrop-blur-2xl rounded-3xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20 hover:shadow-pink-500/20">
              <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl w-fit mb-6 shadow-lg shadow-pink-500/50">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Instagram</h3>
              <p className="text-gray-300 mb-6 text-sm">API integrada</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">62.8K</span>
                <span className="text-pink-400 text-sm font-bold px-3 py-1 bg-pink-500/10 rounded-full">+18%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-2xl rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-xl shadow-black/20 hover:shadow-cyan-500/20">
              <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl w-fit mb-6 shadow-lg shadow-cyan-500/50">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">TikTok</h3>
              <p className="text-gray-300 mb-6 text-sm">Analytics em tempo real</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">19.5K</span>
                <span className="text-cyan-400 text-sm font-bold px-3 py-1 bg-cyan-500/10 rounded-full">+34%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center sm:text-left">
              Desenvolvido com ❤️ por{' '}
              <a href="https://github.com/brunosillvax" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                Bruno Silva
              </a>
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="font-semibold">Powered by AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
