# gh-action-demo

gh-action-demo

## 邮箱配置

```sh
git config user.name "Ni" && git config user.email "s1124yy@gmail.com" && cat .git/config
```


## 问题

搞不懂啊，为什么我的会404啊，[阮一峰](https://github.com/ruanyf/github-actions-demo)的却没问题啊？


## 解决

因为没有在 `package.json` 中加入 `homepage` 字段，就会导致404，找不到 css 和 js 文件。
