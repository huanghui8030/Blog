# Jekyll

## 一、参考文档
- [Jekyll官网](http://jekyllrb.com/docs/home/)
- [Jekyll用法-极客学院wiki](http://wiki.jikexueyuan.com/project/jekyll/usage.html)

## 二、配置
### 1、准备工作

- 先安装**全局**的jekyll：`gem install jekyll`
- 在该目录下**新建**网站名称：`jekyll new myblog`
- 进入到该网站目录下：`cd myblog`
- 在myblog目录下**启动一个jekyll服务**：`jekyll serve`
- 在**浏览器**中访问该网站：`http://127.0.0.1:4000/`


### 2、基本用法

- `jekyll build --watch `：当前文件夹中的内容将会生成到 ./site 文件夹中，查看变化并自动生成。
- `jekyll build --source <_source> --destination<_deploy>` ：指定源文件夹<source>中的内容将会生成到目标文件夹<destination>中。该方法也可通过配置来实现，在`_config.yml`中设置`source:      _source` `destination: _deploy`。
- `jekyll server --watch `：启动一个服务器，查看变化并自动生成。

### 3、目录结构

```xml
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.textile
|   └── on-simplicity-in-technology.markdown
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
|   └── 2009-04-26-barcamp-boston-4-roundup.textile
├── _data
|   └── members.yml
├── _site
└── index.html
```

## 三、编辑内容

