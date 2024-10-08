/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 启用静态导出
    distDir: 'out',    // 指定生成的目录为 'out'
    trailingSlash: true,  // 生成的路径会有尾部斜杠（可选）
    images: {
        unoptimized: true,  // 禁用 Next.js 的图片优化（在静态导出中通常需要）
    },
};

export default nextConfig;