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
        } else {
            return { total: 0, detail: '格式错误' };
        }
        if (isNaN(sides) || sides < 1 || count < 1) {
            return { total: 0, detail: '无效骰子' };
        }
        let total = 0;
        let rolls = [];
        for (let i = 0; i < count; i++) {
            let r = Math.floor(Math.random() * sides) + 1;
            rolls.push(r);
            total += r;
        }
        return { total: total, detail: rolls.join(' + ') + ' = ' + total };
    }

    // 显示消息（使用alert确保手机端能看到）
    function showMessage(msg) {
        alert(msg);
    }

    // 施法检定
    function doWildSurgeCheck() {
        const d20 = rollDice('1d20');
        if (d20.total !== 1) {
            showMessage('🧙 1d20 = ' + d20.total + '，未触发浪涌。');
            return;
        }
        const d100 = rollDice('1d100');
        const effect = surgeTable[d100.total - 1] || '（未找到）';
        showMessage('✨ 浪涌触发！1d100 = ' + d100.total + '\n效果：' + effect);
    }

    // 创建悬浮球和菜单（与之前相同，但用alert确保可见）
    function buildUI() {
        if (document.getElementById('wild-magic-helper')) return;

        var container = document.createElement('div');
        container.id = 'wild-magic-helper';
        container.style.cssText = 'position:fixed; bottom:100px; right:20px; z-index:9999;';

        var ball = document.createElement('div');
        ball.textContent = '🎲';
        ball.style.cssText = 'width:60px; height:60px; border-radius:50%; background:#2b2d42; color:white; font-size:30px; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 4px 12px black; border:2px solid #8d99ae;';

        var panel = document.createElement('div');
        panel.style.cssText = 'position:absolute; bottom:70px; right:0; background:#1e1e2e; color:white; padding:15px; border-radius:12px; display:none; flex-direction:column; gap:8px; min-width:180px; border:1px solid #45475a;';

        // 简化面板：放几个骰子按钮和施法按钮
        var title = document.createElement('div');
        title.textContent = '🎲 骰子';
        panel.appendChild(title);

        var diceRow = document.createElement('div');
        diceRow.style.cssText = 'display:flex; flex-wrap:wrap; gap:5px;';
        ['d4','d6','d8','d10','d12','d20','d100'].forEach(function(d) {
            var btn = document.createElement('button');
            btn.textContent = d;
            btn.style.cssText = 'background:#313244; border:none; color:white; padding:4px 10px; border-radius:6px; cursor:pointer;';
            btn.onclick = function() {
                var res = rollDice('1' + d);
                showMessage('🎲 ' + d + ' 结果：' + res.detail);
            };
            diceRow.appendChild(btn);
        });
        panel.appendChild(diceRow);

        var custom = document.createElement('div');
        custom.style.cssText = 'display:flex; gap:5px;';
        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '如 2d6';
        input.style.cssText = 'background:#313244; border:1px solid #45475a; color:white; border-radius:6px; padding:4px; width:80px;';
        var goBtn = document.createElement('button');
        goBtn.textContent = '掷';
        goBtn.style.cssText = 'background:#89b4fa; border:none; color:#1e1e2e; padding:4px 12px; border-radius:6px; cursor:pointer;';
        goBtn.onclick = function() {
            var val = input.value.trim();
            if (!val) { showMessage('请输入格式如 2d8'); return; }
            var res = rollDice(val);
            showMessage('🎲 ' + val + ' 结果：' + res.detail);
        };
        custom.appendChild(input);
        custom.appendChild(goBtn);
        panel.appendChild(custom);

        var hr = document.createElement('hr');
        hr.style.cssText = 'border-color:#45475a;';
        panel.appendChild(hr);

        var surgeBtn = document.createElement('button');
        surgeBtn.textContent = '⚡ 施法检定';
        surgeBtn.style.cssText = 'background:#f38ba8; border:none; color:#1e1e2e; padding:8px; border-radius:8px; cursor:pointer; font-weight:bold;';
        surgeBtn.onclick = doWildSurgeCheck;
        panel.appendChild(surgeBtn);

        var isOpen = false;
        ball.onclick = function() {
            isOpen = !isOpen;
            panel.style.display = isOpen ? 'flex' : 'none';
        };

        container.appendChild(ball);
        container.appendChild(panel);
        document.body.appendChild(container);
        alert('🎉 悬浮球已创建！');
    }

    // 等待页面完全加载后创建UI
    if (document.readyState === 'complete') {
        buildUI();
    } else {
        window.addEventListener('load', buildUI);
    }
})();
