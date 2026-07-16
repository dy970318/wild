// ================= 版本标识 =================
const VERSION = '2.0.0';

// 强制显示版本号（无论任何情况，只要脚本执行，就会看到）
(function() {
    // 立即弹出版本信息
    alert('🎯 狂野术士助手 版本 ' + VERSION + ' 已加载！');

    // 在页面左上角添加一个永久版本标签
    function addVersionLabel() {
        if (document.getElementById('wm_version_label')) return;
        var label = document.createElement('div');
        label.id = 'wm_version_label';
        label.style.cssText = 'position:fixed; top:10px; left:10px; background:black; color:lime; font-size:24px; font-weight:bold; padding:10px 20px; border-radius:10px; z-index:999999; border:3px solid red;';
        label.textContent = '✅ 助手 v' + VERSION;
        document.body.appendChild(label);
        alert('✅ 版本标签已添加到左上角！');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addVersionLabel);
    } else {
        addVersionLabel();
    }

    // ========== 以下是完整的骰子 + 狂野魔法功能 ==========
    // （你的100项浪涌表太长，我精简为示例，你后面可以替换回来）
    const surgeTable = [
        '火球术以自身为中心爆发。',
        '施展7枚魔法飞弹。',
        // ... 这里我仅放前2条，你实际使用时把完整100条粘贴到这里即可
    ];

    // 掷骰函数（支持d4,d6,...和ndn）
    function rollDice(notation) {
        notation = notation.trim().toLowerCase();
        let count = 1, sides = 0;
        if (notation.startsWith('d')) {
            sides = parseInt(notation.substring(1), 10);
        } else if (notation.includes('d')) {
            const parts = notation.split('d');
            count = parseInt(parts[0], 10) || 1;
            sides = parseInt(parts[1], 10) || 0;
// ========== 官方标准格式（SillyTavern 1.18+ 兼容） ==========
export default (function() {
    // 强制弹窗（浏览器环境）
    alert('🔥 狂野术士测试版 v3.0 已加载！');

    // 强制添加红色方块到左上角
    function addTestBox() {
        if (document.getElementById('wm_test_box')) return;
        const box = document.createElement('div');
        box.id = 'wm_test_box';
        box.style.cssText = `
            position: fixed !important;
            top: 10px !important;
            left: 10px !important;
            width: 100px;
            height: 100px;
            background: #ff0000;
            border: 5px solid #00ff00;
            border-radius: 20px;
            z-index: 999999 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 50px;
            font-weight: bold;
            box-shadow: 0 0 50px rgba(255,0,0,0.8);
        `;
        box.textContent = '✅';
        box.onclick = () => alert('点击测试方块成功！');
        document.body.appendChild(box);
        alert('✅ 测试方块已添加到页面左上角！');
    }

    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addTestBox);
    } else {
        addTestBox();
    }

    // 超时兜底
    setTimeout(() => {
        if (!document.getElementById('wm_test_box')) {
            alert('⏰ 超时重试添加方块...');
            addTestBox();
        }
    }, 2000);

    // 返回一个空对象（符合ST扩展规范）
    return {};
})();
