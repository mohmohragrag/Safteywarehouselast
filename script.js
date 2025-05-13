// وظيفة لتبديل عرض مدخلات العمود الوسط
function toggleMiddleColumn() {
    var middleColumn = document.getElementById("middleColumn");
    var hasMiddleColumn = document.getElementById("hasMiddleColumn").value;

    if (hasMiddleColumn === "yes") {
        middleColumn.style.display = "block";
    } else {
        middleColumn.style.display = "none";
    }
}

function calculate() {
    // أخذ البيانات من المدخلات
    let bf_c1 = parseFloat(document.getElementById("bf_c1").value);
    let tf_c1 = parseFloat(document.getElementById("tf_c1").value);
    let tw_c1 = parseFloat(document.getElementById("tw_c1").value);
    let hw_c1 = parseFloat(document.getElementById("hw_c1").value);
    let bf_c2 = parseFloat(document.getElementById("bf_c2").value);
    let tf_c2 = parseFloat(document.getElementById("tf_c2").value);
    let tw_c2 = parseFloat(document.getElementById("tw_c2").value);
    let hw_c2 = parseFloat(document.getElementById("hw_c2").value);

    // فحص إذا كان هناك عمود وسط
    let bf_c3 = 0, tf_c3 = 0, tw_c3 = 0, hw_c3 = 0;
    if (document.getElementById("hasMiddleColumn").value === "yes") {
        bf_c3 = parseFloat(document.getElementById("bf_c3").value);
        tf_c3 = parseFloat(document.getElementById("tf_c3").value);
        tw_c3 = parseFloat(document.getElementById("tw_c3").value);
        hw_c3 = parseFloat(document.getElementById("hw_c3").value);
    }

    // بيانات الرافتر
    let bf_r1 = parseFloat(document.getElementById("bf_r1").value);
    let tf_r1 = parseFloat(document.getElementById("tf_r1").value);
    let tw_r1 = parseFloat(document.getElementById("tw_r1").value);
    let hw_r1 = parseFloat(document.getElementById("hw_r1").value);
    let bf_r2 = parseFloat(document.getElementById("bf_r2").value);
    let tf_r2 = parseFloat(document.getElementById("tf_r2").value);
    let tw_r2 = parseFloat(document.getElementById("tw_r2").value);
    let hw_r2 = parseFloat(document.getElementById("hw_r2").value);

    // البيانات العامة
    let H = parseFloat(document.getElementById("H").value);
    let H_total = parseFloat(document.getElementById("H_total").value);
    let span = parseFloat(document.getElementById("span").value);
    let spacing = parseFloat(document.getElementById("spacing").value);
    let load_kg = parseFloat(document.getElementById("load_kg").value);
    let fy = parseFloat(document.getElementById("fy").value);
    let FS = parseFloat(document.getElementById("FS").value);
    let K = parseFloat(document.getElementById("K").value);

    // إجراء الحسابات الخاصة بالإطار
    // (هنا يمكنك إضافة الحسابات بناءً على المعادلات الهندسية المطلوبة للتحليل)

    // عرض النتائج
    let results = `العمود الأيسر: عرض الجناح: ${bf_c1} مم, سمك الجناح: ${tf_c1} مم\n`;
    results += `العمود الأيمن: عرض الجناح: ${bf_c2} مم, سمك الجناح: ${tf_c2} مم\n`;
    if (document.getElementById("hasMiddleColumn").value === "yes") {
        results += `العمود الأوسط: عرض الجناح: ${bf_c3} مم, سمك الجناح: ${tf_c3} مم\n`;
    }
    results += `الرافتر الأيسر: عرض الجناح: ${bf_r1} مم, سمك الجناح: ${tf_r1} مم\n`;
    results += `الرافتر الأيمن: عرض الجناح: ${bf_r2} مم, سمك الجناح: ${tf_r2} مم\n`;

    document.getElementById("results").textContent = results;
}
