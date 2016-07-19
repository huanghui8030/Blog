# Sublime Text  用法

## 1、sunblime text介绍

- 现在官方版本号为[sublime text2](https://www.sublimetext.com/2)，但其实[官方网站](https://www.sublimetext.com/)上已经有了[sublime text3](https://www.sublimetext.com/3)了，用哪种都可以。

- 一款收费的ide，但是可以永久试用。

- 轻便快捷，反应速度快，插件强大。

  ​

## 2、插件添加方法

- [Package Control](https://packagecontrol.io/)

- 打开控制台：view>show console（快捷键cmd+\` 或者  ctrl+\`）

- 在控制台输入一段代码，sublime text版本不一样输入的代码不一样

  - sublime text3

    ```
    import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
    ```

  - sublime text2

    ```
    import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
    ```

- 等待执行完后，打开goto anything（cmd+shift+p），输入pic（package control instal package），进入安装插件输入框。输入想要安装的插件即可，例如，输入emmet，点击后后台自动安装该插件。

  ​

## 3、前端插件整理

- pretty、Alignment：html+css+js 格式化插件，pretty，快捷键cmd+shift+h（crl+shift+h）
- emmet：html+css代码简写插件
- BracketHighlighter：闭合标签或者是括号打开折叠高亮插件
- AllAutocommplete：代码补签插件
- DocBlockr：注释补全插件
- AutoFileName：文件路劲补全插件
- ColorPicker：调入调色盘，快捷键cmd+shift+C（ctrl+shift+c）
- MarkdownEditing：markdown格式插件。
- MarkdownPreview：本地预览
- View in Browser：在浏览器中查看html文件
- JSHint：js代码检测
- sublimetext prefixr：CSS3 私有前缀自动补全插件
- sublimeLinter：是一个代码校验插件，它可以帮你找出错误或编写不规范的代码，支持 C/C++、CoffeeScript、CSS、Git Commit Messages、Haml、HTML、Java、JavaScript、Lua、Objective-J、Perl、PHP、Puppet、Python、Ruby 和 XML 语言。
- sublimeEnhancement、SideBarEnhancements：边栏菜单扩充功能。
- Terminal：通过sublimetext直接打开终端。它设置按 Ctrl / Cmd + Shift + T 键的快捷方式打开终端。
- ​



## 4、快捷键

- cmd+L：选择一行代码

- cmd+p：转到任意文件，如果输入一个@，可以查找任意方法名或者是css属性名

- cmd+f：当前文件中查找内容

- cmf+shift+f：包名中查找内容

- ​

  ​