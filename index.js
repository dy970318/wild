// ================= 狂野魔法浪涌表（共100条） =================
const surgeTable = [
    '施法者以3环法术效应施展火球术，并且以施法者自身为爆发中心。',
    '施法者以5环法术效应施展7枚魔法飞弹 。',
    '骰一次d10，并以骰值为英寸数改变施法者的身高，持续6小时。',
    '施法者以自身为中心施展油腻术。',
    '施法者的前额长出第三只眼并持续存在1分钟。',
    '骰一次d100，并以骰值为年数改变施法者的年龄，持续1天。',
    '施法者变成一棵盆栽，状态持续1分钟。',
    '距施法者3米之内任一有头发的类人生物（包括施法者）的头发掉光，不过可以在24小时后恢复。',
    '接下来的半小时内，施法者说话时只能以歌唱的方式发声。',
    '施法者指定至多三个距离施法者9米内的生物，使之承受雷劈。',
    '接下来的1分钟内，施法者发出9米半径的刺眼的明亮光照。任何在施法者周边2米范围内的生物会被强光闪得睁不开眼，持续至光照效果结束。',
    '接下来的10分钟内，施法者变成一整个车轮芝士，可以释放臭云术。',
    '接下来1分钟内，施法者身边3米范围不断出现虚幻的蝴蝶和花瓣。',
    '接下来1分钟内，施法者进入隐形，且其他生物无法听见施法者的声音。施法者一旦施法或攻击则隐形结束。',
    '接下来1分钟内，施法者剧烈旋转，形成以施法者为中心的龙卷风。',
    '施法者在接下来 2d6 分钟内只能用押韵方式说话。',
    '3d20 只 劣魔 从传送门中涌出并攻击施法者。它们在 1 分钟后消失。',
    '绿色黏液从施法者鼻子中流出，并作为一只 软泥怪 对施法者发动攻击。',
    '施法者的 力量 在接下来 1d4 天内变为力大无穷。',
    '施法者极度醉酒 1 小时。',
    '一条幽灵绞索出现在施法者的脖子上。施法者必须迅速挣脱，否则将被绞索紧紧勒住并无法呼吸。',
    '接下来10分钟内，一个巨大的迪斯科球出现在空中，施法者和他周围5米的所有类人生物都受到 奥图迷舞 法术影响。',
    '施法者或他周围5米内的任一类人生物的武器会像 活化物件 法术般活化并嬉戏逃跑，它们不会攻击原主人，但会四处躲避并避免被捡起。',
    '在接下来 1 小时内，施法者长出第二颗会争辩的头颅。',
    '施法者在接下来 10 分钟内变为二维状态。',
    '施法者携带的所有金币全部变成清水。',
    '施法者被施法目标魅惑 1 小时。在此期间，施法者将施法目标视为亲密朋友，并会尝试阻止任何人伤害它，必要时甚至会使用武力来“维持和平”。',
    '一个 艾伐黑触手 法术以施法者为中心出现。',
    '施法者 15米内所有食物都立刻长出霉菌。',
    '一只半人高的剧毒蜘蛛出现在施法者身边并发动攻击。',
    '一个 魔嘴术 出现，大声辱骂施法者后消失。',
    '施法者变形成一种该区域原生动物（有 40% 概率变成怪物），持续 1 分钟。',
    '施法者狂热地相信自己是一位神祇，持续6小时，并会试图聚集追随者。',
    '施法者与施法目标交换身体。若施法目标是无生命物体，则施法者陷入昏迷。',
    '施法者的鞋子长出牙齿，持续 3d4 分钟，并会追赶、咬伤2米内生物。',
    '施法者或他周围3米内的任一类人生物坚信自己最爱的武器变成了他最害怕的动物，持续 1d6 分钟，并因此 恐慌。',
    '附近一只鸟开始大声歌唱爱国国歌般的旋律。它会以震耳欲聋的音量跟随施法者 一整天。',
    '接下来2分钟内，施法目标的皮肤变得如钻石般坚硬。',
    '1d100 枚金币如雨般落下，覆盖以施法者为中心直径 18米区域。',
    '施法者的衣物与装备隐形 1 小时。',
    '施法者所拥有的一件随机物品获得感知能力，并会大声抱怨，持续 1周。',
    '施法者的头发燃起无害幻象火焰，持续 6d10 分钟。',
    '一根 15米高的石柱从施法者脚下喷出，将其撞飞至 60米高空。',
    '施法者 9米内所有生物都会无害地吐出自己上一餐吃下的食物。',
    '施法者身边3米内所有活物（包括施法者自己）的头顶出现‘内心所想’的文字气泡，持续1分钟。',
    '接下来1分钟内，所有 利器挥砍时都会发出响亮的亲吻声。',
    '施法者 2米内所有铜币永久变成金币，而所有金币永久变成铜币。',
    '施法者能看见的所有生物都会感到刺骨寒冷，持续 5 分钟。',
    '施法者可以说出一句 祈愿术 级别的愿望，愿望一定会被实现，但实现的过程或结果一定会被扭曲。',
    '一场壮观但无害的烟火秀会在以施法者为中心 18米半径区域爆发。',
    '施法目标身上出现“【施法者名字】到此一游！”的涂鸦。',
    '1d6 枚鸡蛋从空中砸向施法目标。',
    '贝多芬《命运交响曲》的前四个音符响彻四周。',
    '施法者能看到 1 小时后的未来，但会陷入 失能（无法行动、无法说话） 状态 1d4 分钟。',
    '施法目标受到 缓慢术 法术影响，持续 1 分钟。',
    '施法目标附近散落大量滑溜溜的弹珠。',
    '1d10 只 骷髅 从地面升起并在施法者控制下攻击施法目标。',
    '施法目标会被强烈的生理需求压倒，必须立刻使用其动作脱离战斗。',
    '施法者的泪腺开始喷射液体。',
    '施法者获得“点石成金”之触，持续 1d4 分钟。其接触的任何物体都会永久变成黄金。',
    '一个魔像会由附近材料（石头、黏土、血肉或铁，取决于环境）形成。施法者必须集中意志与之进行精神对抗，否则魔像会发动攻击；若成功，则魔像会服从施法者 1 小时。',
    '一个 加速术 法术会以施法者为中心生效，并影响施法者与 9米内所有盟友，持续 1 分钟。',
    '施法者获得一次喷吐火焰能力。其可用一个动作在 5米锥形范围内喷出火焰。',
    '施法者的双眼在 1 天内变成强力探照灯，它们会发射一道 12米长、2米宽的光束。',
    '施法者双手变成 任意武器，持续 5 分钟。',
    '施法者或其盟友的一件武器会飞向施法目标并发动攻击，持续5分钟。',
    '施法者所信仰的神祇被召唤并注意到施法者。',
    '接下来1分钟内，施法者无法说话。施法者一张嘴就会吐出粉色的泡泡。',
    '施法者获得暂时性的言出法随能力，他说出的下一句话即刻变为现实。',
    '施法者的衣物变成黄金。',
    '9米内所有生物陷入睡眠。',
    '施法者接下来1小时内无法撒谎，但可以拒绝回答。一旦开口必须说真话。',
    '施法者变形为龙，持续10分钟。',
    '施法者突然倒地并陷入昏迷，持续1分钟。',
    '施法者对18米内随机一个类人生物施展人类定身术。',
    '法术效果反弹到施法者自身。',
    '施法者的头发长到1米。',
    '1d6只呋噜怪出现在距施法者18米内的未被占据空间，并因施法者而陷入恐慌。它们将在1分钟后消失不见。',
    '施法者以自身为中心施展云雾术。',
    '一道闪电从天而降击中施法者。该闪电无法避免。',
    '施法者接下来 24 小时内施放的每个法术都会自动触发一次 狂野魔法浪涌。',
    '施法者变成一幅自己的油画肖像。效果持续5分钟。',
    '施法者及其盟友携带的所有武器都变成受诅咒状态。每把武器下次被使用时，都会先调转方向攻击持用者一次，然后恢复正常。',
    '施法目标散发出一个 3米半径的恐惧光环，持续 1 分钟。任何在光环内的生物都会在光环消失前陷入 恐慌 状态。',
    '施法者 18米内所有敌对生物都会被复制。复制体持续 1 分钟。',
    '施法者被石化2分钟。',
    '一股无形力量抓住并摇晃施法者，持续 2d6 分钟。',
    '施法目标在接下来 24 小时内获得说施法者所会语言的能力。',
    '施法者召唤出一个小妖精，一种混乱而恶作剧的妖精生物，持续1小时。',
    '施法者接下来1小时内每说一句赞美他人的话，对方就会原地转一圈。',
    '距离施法者最近的一件武器永久性变成一束鲜花。',
    '以施法者为中心 18米半径区域下起暴雨，持续 2d6 分钟。雨云会跟随施法者移动。',
    '施法者与施法目标交换位置，包括所有穿戴装备。',
    '一个 造风术 法术以施法者为中心生效。',
    '施法目标陷入狂暴，持续 1 分钟，并攻击最近的生物。',
    '一个甜瓜出现在施法者手中。',
    '空气中响起一声巨大的“嘘!”。没有其他效果。',
    '施法者 18米内所有水都会变成葡萄酒。',
    '施法目标会对施法者产生强烈爱慕欲望，不断试图抱住施法者。这种冲动会持续一段时间，但目标可以凭意志力逐渐摆脱影响。',
    '一块馅饼从天而降砸在施法目标脸上。'
];

// ================= 插件核心逻辑 =================
(function () {
    // 获取SillyTavern上下文
    const context = SillyTavern.getContext();

    // ----- 掷骰子函数（支持 d4, 2d6, 1d20 等格式） -----
    function rollDice(notation) {
        notation = notation.trim().toLowerCase();
        let count = 1,
            sides = 0;
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

    // ----- 显示消息（用toast气泡，不干扰正文） -----
    function showMessage(msg) {
        context.toast(msg, { type: 'info', timeout: 8000 });
    }

    // ----- 施法检定（核心功能） -----
    function doWildSurgeCheck() {
        // 掷1d20
        const d20Result = rollDice('1d20');
        if (d20Result.total !== 1) {
            showMessage('🧙 施法检定 1d20 = ' + d20Result.total + '，未触发狂野魔法浪涌。');
            return;
        }
        // 触发浪涌，掷1d100
        const d100Result = rollDice('1d100');
        const index = d100Result.total - 1; // 数组从0开始
        const surgeEffect = surgeTable[index] || '（未找到对应条目，请检查表）';
        showMessage('✨ 狂野魔法浪涌触发！1d100 = ' + d100Result.total + '\n效果：' + surgeEffect);
    }

    // ========== 创建UI（悬浮球 + 菜单） ==========
    // 1. 创建悬浮球容器
    const container = document.createElement('div');
    container.id = 'wild-magic-helper';
    container.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 20px;
            z-index: 9999;
            font-family: sans-serif;
            user-select: none;
        `;

    // 2. 悬浮球按钮
    const ball = document.createElement('div');
    ball.id = 'wm-ball';
    ball.textContent = '🎲';
    ball.style.cssText = `
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background: #2b2d42;
            color: white;
            font-size: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0,0,0,0.6);
            transition: 0.2s;
            border: 2px solid #8d99ae;
        `;
    ball.onmouseover = () => { ball.style.transform = 'scale(1.08)'; };
    ball.onmouseout = () => { ball.style.transform = 'scale(1)'; };

    // 3. 菜单面板（初始隐藏）
    const panel = document.createElement('div');
    panel.id = 'wm-panel';
    panel.style.cssText = `
            position: absolute;
            bottom: 70px;
            right: 0;
            background: #1e1e2e;
            color: #cdd6f4;
            padding: 16px 18px;
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.8);
            display: none;
            flex-direction: column;
            gap: 10px;
            min-width: 200px;
            border: 1px solid #45475a;
            font-size: 14px;
            max-height: 400px;
            overflow-y: auto;
        `;

    // ---- 菜单内容 ----
    // 标题
    const title = document.createElement('div');
    title.textContent = '🎲 狂野术士工具';
    title.style.cssText = 'font-weight: bold; font-size: 16px; text-align: center; border-bottom: 1px solid #45475a; padding-bottom: 6px;';

    // 常规骰子按钮行
    const diceRow = document.createElement('div');
    diceRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 6px; justify-content: center;';
    const diceTypes = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'];
    diceTypes.forEach(d => {
        const btn = document.createElement('button');
        btn.textContent = d;
        btn.style.cssText = `
                background: #313244; border: none; color: white;
                padding: 4px 10px; border-radius: 8px; cursor: pointer;
                font-size: 13px;
            `;
        btn.onmouseover = () => { btn.style.background = '#45475a'; };
        btn.onmouseout = () => { btn.style.background = '#313244'; };
        btn.onclick = () => {
            const res = rollDice('1' + d.substring(1)); // 把d4变成1d4
            showMessage('🎲 ' + d + ' 掷骰结果：' + res.detail);
        };
        diceRow.appendChild(btn);
    });

    // 自定义 ndn 输入
    const customRow = document.createElement('div');
    customRow.style.cssText = 'display: flex; gap: 6px; align-items: center; justify-content: center;';
    const inputNd = document.createElement('input');
    inputNd.type = 'text';
    inputNd.placeholder = '如 3d6';
    inputNd.style.cssText = `
            background: #313244; border: 1px solid #45475a; color: white;
            border-radius: 8px; padding: 4px 8px; width: 80px;
        `;
    const customBtn = document.createElement('button');
    customBtn.textContent = '掷';
    customBtn.style.cssText = `
            background: #89b4fa; border: none; color: #1e1e2e;
            padding: 4px 14px; border-radius: 8px; cursor: pointer; font-weight: bold;
        `;
    customBtn.onmouseover = () => { customBtn.style.background = '#74c7ec'; };
    customBtn.onmouseout = () => { customBtn.style.background = '#89b4fa'; };
    customBtn.onclick = () => {
        const val = inputNd.value.trim();
        if (!val) { showMessage('请输入骰子格式，例如 2d8'); return; }
        const res = rollDice(val);
        if (res.detail === '格式错误' || res.detail === '无效骰子') {
            showMessage('❌ 格式错误，请输入如 3d6 或 d20');
        } else {
            showMessage('🎲 ' + val + ' 掷骰结果：' + res.detail);
        }
    };
    customRow.appendChild(inputNd);
    customRow.appendChild(customBtn);

    // 分割线
    const hr = document.createElement('hr');
    hr.style.cssText = 'border-color: #45475a; width: 100%;';

    // 施法检定按钮（核心）
    const surgeBtn = document.createElement('button');
    surgeBtn.textContent = '⚡ 施法检定 (自动判定浪涌)';
    surgeBtn.style.cssText = `
            background: #f38ba8; border: none; color: #1e1e2e;
            padding: 8px 12px; border-radius: 10px; cursor: pointer;
            font-weight: bold; font-size: 15px;
        `;
    surgeBtn.onmouseover = () => { surgeBtn.style.background = '#eba0ac'; };
    surgeBtn.onmouseout = () => { surgeBtn.style.background = '#f38ba8'; };
    surgeBtn.onclick = doWildSurgeCheck;

    // 组装面板
    panel.appendChild(title);
    panel.appendChild(diceRow);
    panel.appendChild(customRow);
    panel.appendChild(hr);
    panel.appendChild(surgeBtn);

    // 点击悬浮球切换面板显示
    let isPanelOpen = false;
    ball.onclick = () => {
        isPanelOpen = !isPanelOpen;
        panel.style.display = isPanelOpen ? 'flex' : 'none';
    };

    // 将元素添加到容器
    container.appendChild(ball);
    container.appendChild(panel);
    document.body.appendChild(container);

    // 拖拽悬浮球功能（用鼠标拖动）
    let isDragging = false;
    let offsetX, offsetY;
    ball.addEventListener('mousedown', (e) => {
        // 如果点击的是球本身，且不是点击菜单内部，允许拖动
        isDragging = true;
        const rect = container.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        ball.style.cursor = 'grabbing';
        e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        // 限制不跑出屏幕太远
        x = Math.max(0, Math.min(window.innerWidth - 70, x));
        y = Math.max(0, Math.min(window.innerHeight - 70, y));
        container.style.left = x + 'px';
        container.style.top = y + 'px';
        container.style.right = 'auto';
        container.style.bottom = 'auto';
    });
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            ball.style.cursor = 'pointer';
        }
    });

    console.log('✅ 狂野术士跑团助手已加载！');
})();
