import { RecursivePartial, TDictionary } from "../types";

const dictionary: RecursivePartial<TDictionary> = {
  title: "漂亮的标题",
  description: "漂亮的描述",
  aboutMe: {
    title: "关于我",
    text: "关于我的文本",
  },
  apresentation: {
    title: "动态词典示例",
    description: "更改语言，看魔法发生",
  },
  randomWords: [
    { text: "猫" },
    { text: "房子" },
    { text: "菠萝" },
    { text: "黄色的" },
    { text: "派对" },
    { text: "雨" },
    { text: "香蕉" },
    { text: "绿色的" },
    { text: "朋友" },
    { text: "海滩" },
    { text: "夏天" },
    { text: "旅行" },
    { text: "工作" },
    { text: "爱" },
    { text: "钱" },
    { text: "幸福" },
    { text: "健康" },
    { text: "食物" },
    { text: "饮料" },
    { text: "运动" },
  ],
};

export default dictionary;
