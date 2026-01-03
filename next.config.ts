import { readFileSync } from 'fs';
import { join } from 'path';

import type { NextConfig } from 'next';

// 读取 package.json 文件内容以获取应用版本信息
const packageJson = JSON.parse(
  readFileSync(join(process.cwd(), 'package.json'), 'utf-8'),
);

// 判断当前是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';

// 基础配置，开发环境和生产环境都适用
const baseConfig: NextConfig = {
  // 设置输出模式为静态导出
  output: 'export',
  // 图片配置：禁用图片优化，适用于静态导出
  images: {
    unoptimized: true,
  },
  // 环境变量配置
  env: {
    // 构建时间戳
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
    // 应用版本号，从 package.json 中读取
    NEXT_PUBLIC_APP_VERSION: packageJson.version,
  },
};

// 开发环境配置
const developmentConfig: NextConfig = {};

// 生产环境配置
const productionConfig: NextConfig = {
  // 生产环境的 basePath，用于部署到子路径
  basePath: '/llm-leaderboard',
  // 生产环境的资源前缀，确保资源路径正确
  assetPrefix: '/llm-leaderboard',
};

// 合并配置：根据环境选择对应的配置
const nextConfig: NextConfig = {
  ...baseConfig,
  // 如果是生产环境则使用生产配置，否则使用开发配置
  ...(isProduction ? productionConfig : developmentConfig),
};

export default nextConfig;
