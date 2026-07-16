// 这行会在Node.js解析文件时直接输出到Termux终端
console.log('===== 终端测试扩展：index.js 已被Node.js加载并解析 =====');

// 定义一个标准的SillyTavern扩展导出对象
const extension = {
    init: function() {
        console.log('===== 终端测试扩展：init方法被SillyTavern成功调用 =====');
        try {
            // 在页面上强行添加一个大大的蓝色方块
            const div = document.createElement('div');
            div.id = 'terminal_test_block';
            div.style.cssText = 'position:fixed; top:20px; left:20px; width:150px; height:150px; background:blue; border:10px solid orange; z-index:999999; display:flex; align-items:center; justify-content:center; color:white; font-size:30px; font-weight:bold; border-radius:20px;';
            div.textContent = '终端OK';
            document.body.appendChild(div);
            console.log('===== 终端测试扩展：蓝色方块已添加到页面 =====');
        } catch (e) {
            console.log('===== 终端测试扩展：添加方块时出错：', e.message);
        }
    }
};

// 导出（这是ES Module标准写法）
export default extension;
