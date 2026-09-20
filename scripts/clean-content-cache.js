/**
 * 构建前清理 Astro 的内容层缓存。
 *
 * 为什么需要：
 * Astro 的内容缓存（.astro/ 和 node_modules/.astro/）里会残留已删除文章的数据。
 * 如果被删的文章引用过本地图片，构建就会报 [ImageNotFound] 错误，
 * 例如：Could not find requested image `./images/1.avif`。
 *
 * Cloudflare Pages 会缓存 node_modules 来加速构建，所以云端也会踩到同一个坑，
 * 必须在构建前把它们清掉，否则每次删改文章都要手动「清除构建缓存」。
 */

import fs from "node:fs";

const targets = [".astro", "node_modules/.astro"];

for (const target of targets) {
	if (fs.existsSync(target)) {
		fs.rmSync(target, { recursive: true, force: true });
		console.log(`[clean-content-cache] 已清理 ${target}`);
	}
}
