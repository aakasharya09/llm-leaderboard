import type { Model } from '@/types/model';

export interface ModelPreset {
  id: string;
  name: string;
  description: string;
  models: string[];
}

export const MODEL_PRESETS: ModelPreset[] = [
  {
    id: 'trae-cn',
    name: 'TRAE 中文模型组',
    description: '包含国内主流大语言模型',
    models: [
      'Doubao-Seed-1.8',
      'Doubao-Seed-Code',
      'GLM-4.7',
      'GLM-4.6',
      'MiniMax-M2.1',
      'MiniMax-M2',
      'DeepSeek-V3.1-Terminus',
      'Kimi-K2-0905',
      'Qwen-3-Coder',
    ],
  },
  {
    id: 'trae',
    name: 'TRAE 模型组',
    description: '包含国际主流大语言模型',
    models: [
      'Gemini-3-Pro-Preview',
      'Gemini-3-Pro-Preview(200K)',
      'Gemini-2.5-Pro',
      'Kimi-K2-0905',
      'GPT-5.2 Beta',
      'GPT-5.1',
      'DeepSeek-V3.1',
      'GPT-5-medium',
      'GPT-5-high',
      'DeepSeek-V3.1Grok-4 Beta',
      'Gemini-3-Flash-Preview',
      'Gemini-2.5-Flash',
    ],
  },
];

export function applyPreset(allModels: Model[], presetId: string): Model[] {
  const preset = MODEL_PRESETS.find((p) => p.id === presetId);
  if (!preset) return [];

  const presetModels: Model[] = [];
  for (const modelName of preset.models) {
    const model = allModels.find((m) => m.name === modelName);
    if (model && presetModels.length < 5) {
      presetModels.push(model);
    }
  }
  return presetModels;
}
