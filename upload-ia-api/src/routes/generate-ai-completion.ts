import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { createReadStream } from 'node:fs';
import { z } from 'zod';
import { openai } from '../lib/openai';

export async function generateAICompletionRoute(app:FastifyInstance) {
    app.post('/ai/complete', async (req) => {
        
        
        const paramsSchema = z.object({
            videoId: z.string().uuid(),
        });
    
  
        
        return {}
    });
}