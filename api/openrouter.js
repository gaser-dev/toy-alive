export const config = {
    maxDuration: 60, // allow up to 60s for LLM processing
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ 
            error: { message: 'Server configuration error: OPENROUTER_API_KEY is not set.' } 
        });
    }

    // Pass necessary fields to OpenRouter
    const { model, messages, max_tokens, temperature } = req.body;

    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': req.headers.host ? `https://${req.headers.host}` : 'https://vivitoy.vercel.app',
                'X-Title': 'Vivitoy'
            },
            body: JSON.stringify({
                model,
                messages,
                max_tokens: max_tokens || 1024,
                temperature: temperature || 0.85
            })
        });

        if (!response.ok) {
            const err = await response.json().catch(() => ({}));
            return res.status(response.status).json(err);
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('OpenRouter Proxy Error:', error);
        return res.status(500).json({ 
            error: { message: 'Failed to communicate with AI provider.' } 
        });
    }
}
