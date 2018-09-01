

$(function () {

    var payurl = "https://houtaijiekou.com";// 伪代码，后台接口地址，参数要求 orderid，jine，beizhu
    // 后台根据金额正负，备注内容，账单流水号进行业务沟通

    var old_orders = [];// 缓存里的订单
    var new_orders = [];// 刷新后当前页面的订单
    var orders = [];// 本次提交的订单
    var cg_orders = [];// 提交成功的订单
    var tzjg = [];// 后台处理结果
    var $table;
    var $tbody;
    var $tr;

    //  https://mbillexprod.alipay.com/enterprise/fundAccountDetail.htm

    // 加载当前页所有订单
    setTimeout(() => {
        $table = $("table.ant-table-fixed").first();
        $tbody = $table.find("tbody");
        $tr = $tbody.find("tr");
        shuaxin();
        loadorders();
    }, 5 * 1000);

    // 自动刷新当前页，并循环
    function loadorders() {
        new_orders = [];

        var beizhu;
        var jine;
        var orderid;
        var $td;

        // 取出刷新后的全部订单
        $tr.each(function () {
            $td = $(this).find("td");

            beizhu = $td.eq(7).find("span span").html();
            jine = $td.eq(5).find("div span").html();
            orderid = $td.eq(1).find("span span").attr("title");

            new_orders.push({
                orderid: orderid,
                jine: jine,
                beizhu: beizhu
            })
        });

        console.log("当前页面订单：" + new_orders.length, new_orders);

        chrome.storage.sync.get({ old_orders: [] }, function (items) {

            old_orders = items.old_orders;
            console.log('缓存订单：' + old_orders.length, old_orders);

            // 与缓存对比，去除提交过的订单
            orders = quchong(new_orders, old_orders);

            console.log('待提交个数：' + orders.length, orders);
            // 依次提交自动通知，回调成功订单
            tijiao(function (data) {
                // 筛选出失败订单
                var shibai = quchong(data, orders);
                console.log("失败个数：" + shibai.length, shibai);
                // 失败订单不存入缓存
                new_orders = quchong(shibai, new_orders);
                // console.log("成功个数：" + shibai.length, shibai);

                chrome.storage.sync.set({ old_orders: new_orders }, function () {
                    console.log('缓存已成功订单数量：' + new_orders.length, new_orders);
                });
            });

        });

    }

    function quchong(objarr1, objarr2) {
        // console.log("去重数组", objarr1, objarr2);
        if (objarr1.length <= 0) {
            return objarr2;
        }
        if (objarr2.length <= 0) {
            return objarr1;
        }
        return objarr1.filter(function (obj) {
            return !objarr2.some(function (obj2) {
                return obj.orderid == obj2.orderid;
            });
        });
    }

    // 随机一个刷新时间，50-90 秒
    function shuaxin() {
        console.clear();
        var sec = getRandomInt(50, 90);
        console.log("下一次刷新间隔：" + sec);
        setTimeout(() => {
            location.reload();
        }, sec * 1000);
    }

    // 提交并返回成功订单
    function tijiao(callback) {
        cg_orders = [];
        var s_count = 0;
        if (orders.length > 0) {
            console.log("转账通知进行中......");
        } else {
            console.log("无新转账订单......");
        }
        for (var i = 0; i < orders.length; i++) {
            // 回调带参数写法，================================重点=================================
            $.post(payurl, orders[i], callbackFun(orders[i]))
                .always(function (data) {
                    s_count++;
                    // 全部成功后一起处理缓存
                    if (s_count >= orders.length) {
                        console.log("转账通知已完成......");
                        console.log("通知结果：" + tzjg.length, tzjg);
                        console.log("成功个数：" + cg_orders.length, cg_orders);
                        callback(cg_orders);
                    }
                });
        }
    }

    function callbackFun(torder) {
        return function (data) {
            if (data == "0" || data == "1" || data == "3" || data == "4") {
                // 成功
                cg_orders.push(torder);
            }
            torder.acode = data;
            // 结果
            tzjg.push(torder);
        }
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})