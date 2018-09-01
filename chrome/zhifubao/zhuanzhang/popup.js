$("#clear").click(function () {
    chrome.storage.sync.set({ old_orders: [] }, function () {
        // console.log('清除缓存成功');
        alert("清除缓存成功");
    });
});