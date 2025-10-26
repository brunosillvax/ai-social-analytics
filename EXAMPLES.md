# 📚 Exemplos de Uso

Este arquivo contém exemplos práticos de como usar e integrar o AI Social Analytics.

## 📊 Integrando com APIs Reais

### 1. Instagram API

```typescript
// lib/instagram.ts
export async function getInstagramMetrics(accessToken: string, userId: string) {
  const fields = 'followers_count,media_count,follows_count';
  const url = `https://graph.instagram.com/${userId}?fields=${fields}&access_token=${accessToken}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return {
    followers: data.followers_count,
    posts: data.media_count,
    following: data.follows_count
  };
}

export async function getInstagramPosts(accessToken: string, userId: string) {
  const fields = 'id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count';
  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}`;
  
  const response = await fetch(url);
  const data = await response.json();
  
  return data.data;
}
```

### 2. WhatsApp Business API

```typescript
// lib/whatsapp.ts
export async function getWhatsAppAnalytics(token: string, phoneId: string) {
  const url = `https://graph.facebook.com/v18.0/${phoneId}/analytics`;
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return await response.json();
}

export async function sendWhatsAppMessage(token: string, phoneId: string, to: string, message: string) {
  const url = `https://graph.facebook.com/v18.0/${phoneId}/messages`;
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: to,
      text: { body: message }
    })
  });
  
  return await response.json();
}
```

### 3. OpenAI para Insights

```typescript
// lib/ai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});

export async function generateInsights(metrics: any) {
  const prompt = `
    Analise as seguintes métricas de redes sociais e forneça insights acionáveis:
    
    Seguidores: ${metrics.followers}
    Engajamento: ${metrics.engagement}%
    Posts esta semana: ${metrics.posts}
    
    Forneça 3 insights específicos e recomendações práticas.
  `;
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Você é um especialista em marketing de redes sociais.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 500
  });
  
  return completion.choices[0].message.content;
}

export async function getBestPostingTime(historicalData: any[]) {
  const prompt = `
    Com base nos seguintes dados históricos de engajamento:
    ${JSON.stringify(historicalData)}
    
    Qual é o melhor horário para postar? Forneça uma análise detalhada.
  `;
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.5
  });
  
  return completion.choices[0].message.content;
}
```

## 🎨 Componentes Customizados

### 1. Card de Métrica Personalizado

```typescript
// components/MetricCard.tsx
'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  gradient: string;
}

export function MetricCard({ icon: Icon, label, value, change, gradient }: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span className={`text-sm font-semibold ${change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
    </motion.div>
  );
}
```

### 2. Gráfico Animado

```typescript
// components/AnimatedChart.tsx
'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AnimatedChart({ data }: { data: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20"
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
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
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#8b5cf6" 
            strokeWidth={3}
            dot={{ fill: '#8b5cf6', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
```

## 🔄 Hooks Customizados

### 1. useAnalytics Hook

```typescript
// hooks/useAnalytics.ts
import { useState, useEffect } from 'react';

export function useAnalytics(platform: 'instagram' | 'whatsapp' | 'tiktok') {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`/api/analytics/${platform}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    // Atualiza a cada 5 minutos
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [platform]);

  return { data, loading, error };
}
```

### 2. useAIInsights Hook

```typescript
// hooks/useAIInsights.ts
import { useState, useCallback } from 'react';
import { generateInsights } from '@/lib/ai';

export function useAIInsights() {
  const [insights, setInsights] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = useCallback(async (metrics: any) => {
    setLoading(true);
    try {
      const result = await generateInsights(metrics);
      setInsights(result);
    } catch (error) {
      console.error('Erro ao gerar insights:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { insights, loading, generate };
}
```

## 🎯 Exemplos de API Routes

### 1. API Route para Instagram

```typescript
// app/api/instagram/metrics/route.ts
import { NextResponse } from 'next/server';
import { getInstagramMetrics } from '@/lib/instagram';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const accessToken = searchParams.get('token');
    const userId = searchParams.get('userId');

    if (!accessToken || !userId) {
      return NextResponse.json(
        { error: 'Token e userId são obrigatórios' },
        { status: 400 }
      );
    }

    const metrics = await getInstagramMetrics(accessToken, userId);
    
    return NextResponse.json(metrics);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar métricas' },
      { status: 500 }
    );
  }
}
```

### 2. API Route para AI Insights

```typescript
// app/api/insights/route.ts
import { NextResponse } from 'next/server';
import { generateInsights } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const metrics = await request.json();
    const insights = await generateInsights(metrics);
    
    return NextResponse.json({ insights });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao gerar insights' },
      { status: 500 }
    );
  }
}
```

## 📱 Exemplo de Uso Completo

```typescript
// app/dashboard/page.tsx
'use client';

import { useAnalytics } from '@/hooks/useAnalytics';
import { useAIInsights } from '@/hooks/useAIInsights';
import { MetricCard } from '@/components/MetricCard';
import { Users, Heart, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { data: instagram, loading } = useAnalytics('instagram');
  const { insights, generate } = useAIInsights();

  useEffect(() => {
    if (instagram) {
      generate(instagram);
    }
  }, [instagram, generate]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-3 gap-6">
      <MetricCard
        icon={Users}
        label="Seguidores"
        value={instagram.followers}
        change="+12%"
        gradient="from-blue-500 to-blue-600"
      />
      <MetricCard
        icon={Heart}
        label="Engajamento"
        value={`${instagram.engagement}%`}
        change="+8.1%"
        gradient="from-pink-500 to-pink-600"
      />
      <MetricCard
        icon={TrendingUp}
        label="Crescimento"
        value="+34.5%"
        change="+5.2%"
        gradient="from-green-500 to-green-600"
      />
      
      {insights && (
        <div className="col-span-3 bg-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Insights com IA</h3>
          <p className="text-gray-300">{insights}</p>
        </div>
      )}
    </div>
  );
}
```

## 🚀 Mais Exemplos

Confira a [documentação completa](https://github.com/brunosillvax/ai-social-analytics/wiki) para mais exemplos e tutoriais!

---

**Precisa de ajuda?** Abra uma [issue](https://github.com/brunosillvax/ai-social-analytics/issues) ou entre em contato!
