// ========== 官方标准扩展写法 ==========
export default {
    // 必须的 init 方法，SillyTavern 在加载扩展时会调用它
    init: function() {
        // 1. 弹出提示（手机端可见）
        alert('🎯 官方标准扩展 v4.0 加载成功！');

        // 2. 在左上角添加一个明显的绿色方块
        function addTestSquare() {
            if (document.getElementById('wm_test_square')) return;
            const div = document.createElement('div');
            div.id = 'wm_test_square';
            div.style.cssText = `
                position: fixed !important;
                top: 10px !important;
                left: 10px !important;
                width: 120px;
                height: 120px;
                background: #00ff00;
                border: 8px solid red;
                border-radius: 30px;
                z-index: 999999 !important;
                display: flex;
                align-items: center;
                justify-content: center;
                color: black;
                font-size: 40px;
                font-weight: bold;
                box-shadow: 0 0 60px rgba(0,255,0,0.9);
            `;
            div.textContent = '测试';
            div.onclick = () => alert('方块被点击！');
            document.body.appendChild(div);
            alert('✅ 绿色测试方块已添加！');
        }

        // 等DOM就绪
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', addTestSquare);
        } else {
            addTestSquare();
        }

        // 超时重试
        setTimeout(() => {
            if (!document.getElementById('wm_test_square')) {
                alert('⏰ 超时，再次尝试添加方块...');
                addTestSquare();
            }
        }, 3000);

        // 在终端日志输出
        console.log('✅ 狂野术士测试扩展 init 方法执行完毕！');
    }
};
