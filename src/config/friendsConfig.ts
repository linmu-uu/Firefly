import type { FriendLink, FriendsPageConfig } from "../types/config";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "悍匪组队交流群",
		imgurl:
			"https://cdn.phototourl.com/free/2026-05-03-1298aca6-35d3-4348-bde0-39a6c12524b3.jpg",
		desc: "为了更强大的力量，加入我们吧！",
		siteurl: "https://qun.qq.com/universal-share/share?ac=1&authKey=VAuUWJwnPj%2FmlQhPgmCHez0ZvlNRsc8gkRdZhck7wowM2nA3HiH1bZVyaFcCV%2FQ0&busi_data=eyJncm91cENvZGUiOiIxMDc3NjkxMzY3IiwidG9rZW4iOiJCSHpHUlJlMVRqTVc5emY5c1ppeXZ6MXM3ODh0eStRcjBrWE1DRHpiUWF5UFAwQlN3ZW9Id09WZ3RvbGxWSC93IiwidWluIjoiMjExNjk0MzYyMSJ9&data=1Q8HIqxCv5oKO5zW5RC4tDLEMp9QQWQn_mBVAVJHkVt1gVXH9IModeCi5xAEBLpyNGBIrC1LReV8sysMv7-rFw&svctype=4&tempid=h5_group_info",
		tags: ["组队交流群"],
		weight: 5, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "𝐴𝑢𝑟𝑜𝑟𝑎交流群",
		imgurl:
			"https://cdn.phototourl.com/free/2026-05-03-74c6ea78-c9e7-46d6-9149-99709c9b7cf3.jpg",
		desc: "HVH交流群,欢迎加入!",
		siteurl: "https://qm.qq.com/q/kcwm9MHsRO",
		tags: ["组队交流群"],
		weight: 4, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
