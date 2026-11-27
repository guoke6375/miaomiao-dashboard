# 个人成长工作台

一个手机优先的个人工作台：今日待办、习惯打卡、体重、记账、目标、周复盘，另带一个「改价审核」入口。
纯静态 HTML，无构建步骤，数据全部存在浏览器本地（localStorage），不上传任何服务器。

## 目录

```
docs/
├── index.html       界面 + 逻辑（单文件）
├── manifest.json    PWA，加到手机桌面用
├── icon.png         桌面图标
├── reminder.ics     日历订阅文件（每天定时提醒）
├── robots.txt       禁止搜索引擎收录
└── .nojekyll        跳过 Jekyll 处理

edge-functions/      可选：双端同步接口（当前未启用）
package.json         上面那个接口的依赖
```

## 部署

GitHub Pages：仓库 Settings → Pages → Source 选 `main` / `docs`。
地址：`https://<用户名>.github.io/miaomiao-dashboard/`

## 数据

- 全部业务数据存 `localStorage`（命名空间 `bysdash:`），换设备/清缓存会丢，设置页里可以导出备份
- 页面为纯静态，没有任何上报接口
- `.ics` 是给 iPhone 日历订阅用的，每天固定时间弹一条提醒
