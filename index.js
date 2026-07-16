// ============ 暴力诊断版：如果脚本加载，必定有反应 ============
(function() {
    // 1. 立即弹出提示框——如果看到这个，说明脚本绝对在运行
    alert('🎯 狂野术士脚本已成功加载并执行！');

    // 2. 创建一个大红色悬浮方块放在屏幕左上角
    function addRedBox() {
        // 防止重复添加
        if (document.getElementById('wm_debug_box')) return;

        var box = document.createElement('div');
        box.id = 'wm_debug_box';
        box.style.cssText = 'position:fixed !important; top:10px !important; left:10px !important; width:80px; height:80px; background:red; border:5px solid yellow; z-index:999999; border-radius:15px; display:flex; align-items:center; justify-content:center; color:white; font-size:40px; box-shadow:0 0 30px black;';
        box.textContent = '🎲';
        box.onclick = function() { alert('红色方块被点击！悬浮球功能正常！'); };
        document.body.appendChild(box);
        alert('✅ 红色方块已成功添加到页面左上角！');
    }

    // 3. 立即执行（不等任何ST上下文）
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addRedBox);
    } else {
        addRedBox();
    }

    // 4. 超时兜底：2秒后如果还没添加上，强制再试一次
    setTimeout(function() {
        if (!document.getElementById('wm_debug_box')) {
            alert('⏰ 2秒超时，尝试再次添加红色方块...');
            addRedBox();
        }
    }, 2000);

    console.log('Wild Magic Debug: 脚本执行完毕');
})();
